import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "build");
const PORT = 4173;

function findChromePath() {
  const candidates = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  ];

  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }

  throw new Error(
    "Chrome/Edge executable not found. Install Chrome or Edge, or set executablePath manually."
  );
}

function startServer(distPath, port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let reqPath = req.url === "/" ? "/index.html" : req.url;
      let filePath = path.join(distPath, reqPath);

      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distPath, "index.html");
      }

      const ext = path.extname(filePath).toLowerCase();
      const mimeTypes = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".ico": "image/x-icon",
        ".webp": "image/webp",
        ".txt": "text/plain",
        ".xml": "application/xml",
        ".map": "application/json",
      };

      const contentType = mimeTypes[ext] || "application/octet-stream";

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end("Server Error");
          return;
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      });
    });

    server.listen(port, () => {
      console.log(`Preview server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

function injectSeoHtml(html) {
  const seoBlock = `
    <section id="seo-content" style="padding:40px 20px;max-width:1100px;margin:0 auto;background:#fff;">
      <h2 style="font-size:32px;line-height:1.2;margin-bottom:16px;">Best Taxi Service in Goa</h2>
      <p style="font-size:16px;line-height:1.8;color:#444;margin-bottom:16px;">
        Prime Route Taxi Goa offers reliable airport pickup and drop, local taxi rides,
        sightseeing tours, and outstation trips in Goa. Book trusted Goa taxi service
        for comfortable travel with professional drivers.
      </p>
      <h3 style="font-size:24px;line-height:1.3;margin-bottom:12px;">Our Goa Taxi Services</h3>
      <ul style="padding-left:20px;color:#444;line-height:1.8;margin-bottom:16px;">
        <li>Goa Airport Pickup and Drop Taxi</li>
        <li>Local Taxi Service in Goa</li>
        <li>North Goa and South Goa Sightseeing Taxi</li>
        <li>Full-Day Cab Booking in Goa</li>
        <li>Outstation Taxi from Goa</li>
      </ul>
      <p style="font-size:16px;line-height:1.8;color:#444;">
        Call or WhatsApp now for instant Goa taxi booking.
      </p>
    </section>
  `;

  if (html.includes("</body>")) {
    return html.replace("</body>", `${seoBlock}</body>`);
  }

  return html + seoBlock;
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`Build folder not found at: ${DIST_DIR}. Run npm run build first.`);
  }

  const server = await startServer(DIST_DIR, PORT);
  const executablePath = findChromePath();

  const browser = await puppeteer.launch({
    headless: true,
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    await page.setViewport({
      width: 1440,
      height: 2200,
      deviceScaleFactor: 1,
    });

    await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    await page.waitForSelector("#root", { timeout: 15000 });
    await page.waitForFunction(
      () => document.querySelector("#root")?.children.length > 0,
      { timeout: 15000 }
    );

    await new Promise((resolve) => setTimeout(resolve, 2500));

    await page.addStyleTag({
      content: `
        *,
        *::before,
        *::after {
          animation-play-state: paused !important;
          transition: none !important;
        }
      `,
    });

    const html = await page.content();
    const finalHtml = injectSeoHtml(html);

    fs.writeFileSync(path.join(DIST_DIR, "index.html"), finalHtml, "utf-8");
    console.log("Prerender complete: build/index.html updated successfully.");
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});