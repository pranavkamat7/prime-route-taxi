import React, { useState } from "react";

/* ═══════════════════════════════════════
   BLOG DATA — SEO-rich articles for
   Goa taxi service keywords
═══════════════════════════════════════ */
export const BLOGS = [
  {
    slug: "goa-airport-taxi-guide",
    category: "Airport Transfer",
    categoryColor: "#1D6DB5",
    date: "May 18, 2026",
    readTime: "6 min read",
    title: "Goa Airport Taxi Guide: Dabolim & Mopa — What to Expect, Best Routes & Fares",
    excerpt:
      "Planning to fly into Goa? Here's everything you need to know about getting a reliable taxi from Dabolim (GOI) or the new Mopa International Airport — including fares, booking tips, and how to avoid overcharging.",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    alt: "Airplane at Goa airport runway at sunset",
    content: `
<h2>Goa Airport Taxi: Dabolim vs Mopa — A Complete Guide</h2>
<p>Goa has two airports — the legacy <strong>Dabolim Airport (GOI)</strong> near Vasco da Gama and the newer <strong>Mopa International Airport (GOX)</strong> in North Goa. Choosing the right taxi at the right price can make or break the start of your Goa holiday.</p>

<h3>Dabolim Airport (GOI) Taxi Service</h3>
<p>Dabolim is located about 29 km from Panaji and roughly 28 km from Calangute Beach. Pre-booking a cab avoids the infamous prepaid taxi queues and the inflated rates at the airport exit. We serve all major destinations including Calangute, Panaji, Baga, and South Goa.</p>

<h3>Mopa Airport (GOX) Taxi Service</h3>
<p>Mopa is positioned in North Goa, making it ideal for travellers heading to Calangute, Baga, Anjuna, Vagator, or Morjim. It is about 40 km from Panaji and only 18 km from Calangute. Contact us on WhatsApp for a quick fare quote for your specific route.</p>

<h3>Tips to Book a Reliable Airport Taxi in Goa</h3>
<ol>
  <li><strong>Pre-book via WhatsApp:</strong> Always book at least 6–12 hours before your flight lands. Last-minute bookings at the airport cost 30–50% more.</li>
  <li><strong>Share your flight number:</strong> A good driver will track your flight and wait if it is delayed — at no extra charge.</li>
  <li><strong>Confirm the fare upfront:</strong> Get the total fare confirmed on WhatsApp before you board. Avoid "metered" cabs that don't disclose rates clearly.</li>
  <li><strong>Choose AC vehicles:</strong> Goa can be extremely hot and humid. An air-conditioned cab is worth every rupee, especially on a 30–45-minute airport ride.</li>
</ol>

<p>At Manohar International Airport Taxi, we offer flight-tracked airport pickups from both Dabolim and Mopa airports. Book on WhatsApp and receive a confirmation with your driver's name and number within minutes.</p>
    `,
  },
  {
    slug: "north-goa-sightseeing-cab",
    category: "Sightseeing",
    categoryColor: "#15803D",
    date: "May 10, 2026",
    readTime: "7 min read",
    title: "North Goa Sightseeing by Cab: The Perfect 1-Day Itinerary from Calangute",
    excerpt:
      "From the golden shores of Calangute to the Portuguese charm of Fort Aguada, discover how to cover the best of North Goa in a single day with a hired cab — with timings, costs, and local tips.",
    img: "https://tse4.mm.bing.net/th/id/OIP.ZkrakctBJYzrGfaY1muz9AHaE0?pid=ImgDet&w=474&h=308&rs=1&o=7&rm=3",
    alt: "Palm trees on a sunny Goa beach",
    content: `
<h2>The Ultimate North Goa Sightseeing Cab Itinerary</h2>
<p>North Goa is a feast for the senses — colonial forts, bustling beach shacks, spice-scented markets, and some of India's most famous beaches. The best way to explore it all comfortably is by hiring a <strong>full-day sightseeing cab in North Goa</strong>.</p>

<h3>Recommended North Goa 1-Day Itinerary</h3>
<p><strong>Start time: 8:30 AM | End time: ~6:30 PM</strong></p>

<h4>Morning (8:30 AM – 1:00 PM)</h4>
<ul>
  <li><strong>Calangute Beach & Baga Beach</strong> — Start with a walk on India's most visited beach strip. Morning light is perfect for photography. (30–40 min)</li>
  <li><strong>Anjuna Flea Market</strong> (Wednesday only) or <strong>Anjuna Beach</strong> — A hippy-heritage gem with stunning red-laterite cliffs. (45 min)</li>
  <li><strong>Vagator Beach & Chapora Fort</strong> — Made famous by Bollywood, the Chapora Fort viewpoint offers a panoramic view of the Arabian Sea and Vagator Beach below. (45 min)</li>
</ul>

<h4>Afternoon (1:30 PM – 4:30 PM)</h4>
<ul>
  <li><strong>Lunch at a North Goa Shack</strong> — Ask your driver for a non-touristy local favourite. Fish curry rice is the definitive Goa experience.</li>
  <li><strong>Fort Aguada</strong> — A 17th-century Portuguese fortress at the mouth of the Mandovi River. One of Goa's most photogenic landmarks. (45 min)</li>
  <li><strong>Sinquerim Beach</strong> — The calmer beach next to Fort Aguada, great for a short dip. (30 min)</li>
</ul>

<h4>Evening (4:30 PM – 6:30 PM)</h4>
<ul>
  <li><strong>Candolim Beach sunset walk</strong> — A quieter alternative to Calangute for golden-hour views.</li>
  <li><strong>Return to your hotel</strong></li>
</ul>

<h3>Full-Day Cab for North Goa Sightseeing</h3>
<p>We offer full-day cab rentals covering 8 hours and up to 80 km, perfect for this itinerary. Extra kilometres beyond the package can be arranged. Fuel is included and there are no hidden charges. WhatsApp us for a personalised quote based on your vehicle preference and pickup location.</p>

<p>Book your North Goa sightseeing cab on WhatsApp and get a customised itinerary based on your interests and hotel location.</p>
    `,
  },
  {
    slug: "dudhsagar-falls-cab",
    category: "Day Trips",
    categoryColor: "#7C3AED",
    date: "April 29, 2026",
    readTime: "5 min read",
    title: "Dudhsagar Falls from Goa: Cab Route, Entry Timings & Everything You Need to Know",
    excerpt:
      "Dudhsagar — one of India's tallest waterfalls — is a bucket-list day trip from Goa. Here's how to get there by private cab, what to expect on the road, and how to make the most of your visit.",
    img: "https://media.insider.in/image/upload/c_crop,g_custom/v1568709591/udzhzq2fpcewv5yupqyy.jpg",
    alt: "Spectacular waterfall in lush green jungle",
    content: `
<h2>Dudhsagar Falls Day Trip from Goa: The Complete Guide</h2>
<p><strong>Dudhsagar Falls</strong> — literally meaning "Sea of Milk" — plunges 310 metres through the lush Bhagwan Mahavir Wildlife Sanctuary in the Goa–Karnataka border region. It is one of the <em>tallest waterfalls in India</em> and among the most dramatic natural experiences in the country.</p>

<h3>Distance & Route</h3>
<p>Dudhsagar is approximately <strong>60 km from Panaji</strong> and 70 km from Calangute. The route passes through the scenic Mollem National Park. Travel time is about 2–2.5 hours each way, with the final stretch on a jeep safari mandatory (private cars are not allowed inside the forest zone).</p>

<h3>How to Visit Dudhsagar Falls by Cab</h3>
<ol>
  <li><strong>Book a cab from your hotel to Castle Rock / Mollem</strong> — Your Manohar International Airport Taxi drops you at the forest entry point (Kulem / Castle Rock area).</li>
  <li><strong>Join a jeep safari</strong> — From Mollem, you board a 4WD jeep safari (₹400–₹500 per person, arranged locally) that takes you through the forest to the base of the falls.</li>
  <li><strong>Spend 2–3 hours at the falls</strong> — Swim in the natural pool, soak in the mist, and enjoy the rainforest surroundings.</li>
  <li><strong>Return cab picks you up</strong> — We track your return time and are waiting to bring you back comfortably.</li>
</ol>

<h3>Best Time to Visit Dudhsagar</h3>
<ul>
  <li><strong>October to February:</strong> Post-monsoon is ideal. The falls are at full flow, the forest is emerald-green, and the weather is pleasant.</li>
  <li><strong>June to September:</strong> Monsoon. The falls are majestic but the forest safari is often closed due to waterlogging. Check before booking.</li>
  <li><strong>March to May:</strong> Summer. Falls slow down significantly. Hot weather. Not the best time for this trip.</li>
</ul>

<h3>Cab Service for Dudhsagar Day Trip</h3>
<p>Manohar International Airport Taxi offers comfortable return cab service to Dudhsagar with an experienced driver who knows these routes well. Pricing depends on your pickup location and vehicle choice — WhatsApp us for a confirmed quote.</p>
    `,
  },
  {
    slug: "goa-outstation-cab-mumbai-pune",
    category: "Outstation",
    categoryColor: "#DC2626",
    date: "April 15, 2026",
    readTime: "6 min read",
    title: "Goa to Mumbai & Pune by Cab: Distance, Fares, Route & Travel Tips",
    excerpt:
      "Prefer the road over a flight? An outstation cab from Goa to Mumbai or Pune is a scenic, comfortable alternative — especially for families with luggage. Here's what to know before you book.",
    img: "https://housing.com/news/wp-content/uploads/2024/09/Mumbai-expressway-min.png",
    alt: "Highway road trip through scenic Western Ghats",
    content: `
<h2>Outstation Cab from Goa to Mumbai & Pune: Complete Guide</h2>
<p>The road from Goa to Mumbai weaves through the stunning <strong>Sahyadri mountains and Konkan coast</strong>, passing waterfalls, cashew forests, and small coastal towns. For travellers with heavy luggage, families, or those who prefer not to fly, an outstation cab is the clear winner.</p>

<h3>Goa to Mumbai by Cab</h3>
<ul>
  <li><strong>Distance:</strong> Approximately 590–620 km via NH66 (Coastal Route)</li>
  <li><strong>Travel Time:</strong> 11–13 hours</li>
  <li><strong>Best Route:</strong> Panaji → Pernem → Sawantwadi → Ratnagiri → Chiplun → Pune Bypass → Mumbai via the Coastal Highway (NH66) — scenic but takes longer; OR via Kolhapur (NH48) — faster but less scenic</li>
</ul>
<p>For fare details on Goa to Mumbai trips, reach out on WhatsApp. Pravin will share a confirmed quote based on your vehicle choice and pickup location.</p>

<h3>Goa to Pune by Cab</h3>
<ul>
  <li><strong>Distance:</strong> Approximately 430–450 km via NH48 (Kolhapur–Pune)</li>
  <li><strong>Travel Time:</strong> 8–9 hours</li>
</ul>
<p>WhatsApp us for Goa to Pune cab fares — we'll share a transparent, confirmed quote with no surprises.</p>

<h3>Travel Tips for Goa Outstation Cab Trips</h3>
<ol>
  <li><strong>Start early (5–6 AM):</strong> Beat city traffic in both Goa and the destination city. Arriving before peak hours reduces fatigue.</li>
  <li><strong>Book Innova for 5+ passengers:</strong> The Innova Crysta handles mountain roads better and offers far more luggage space.</li>
  <li><strong>Toll charges are extra:</strong> The Goa–Mumbai highway has multiple toll plazas. Budget approximately ₹800–₹1,000 extra for tolls.</li>
  <li><strong>Driver rest stops:</strong> A responsible driver takes 2–3 breaks for tea and food. This is mandatory for safety on long routes — never rush a driver.</li>
</ol>

<p>Manohar International Airport Taxi outstation cabs are fully AC, GPS-equipped, and operated by drivers with long-distance route experience. WhatsApp us for a confirmed quote.</p>
    `,
  },
  {
    slug: "goa-taxi-tips-tourists",
    category: "Travel Tips",
    categoryColor: "#D97706",
    date: "April 2, 2026",
    readTime: "5 min read",
    title: "10 Must-Know Taxi Tips for Tourists Visiting Goa in 2026",
    excerpt:
      "First time in Goa? The local taxi scene can be confusing — and expensive if you don't know the rules. Here are 10 practical tips to get the best cab service in Goa without overpaying or getting stuck.",
    img: "https://images.pexels.com/photos/11171626/pexels-photo-11171626.jpeg",
    alt: "Tourist looking at a map on a sunny road trip",
    content: `
<h2>10 Essential Taxi Tips for Tourists in Goa</h2>
<p>Goa's taxi market is unique in India — there's no Ola or Uber (they are not allowed to operate freely in Goa as of 2026), which means navigating local cabs and pre-booking services is essential to avoid being overcharged or stranded.</p>

<h3>1. Pre-Book Your Cab Before You Arrive</h3>
<p>The best taxi rates in Goa go to those who book in advance. Pre-booking via WhatsApp ensures a fixed, transparent fare — with no scope for the driver to renegotiate at the last moment.</p>

<h3>2. Avoid Yellow Plate (Tourist Permit) Cabs at the Airport</h3>
<p>The prepaid taxi counters at Goa Airport are significantly overpriced. A private pre-booked cab to the same destination can save you 30–50%.</p>

<h3>3. Always Agree on the Fare Upfront</h3>
<p>Get the full fare confirmed in writing (WhatsApp message) before boarding. A fair driver will not hesitate to confirm the price.</p>

<h3>4. Prefer AC Vehicles — Goa is Humid</h3>
<p>Even in December–January, Goa's humidity can make a non-AC cab very uncomfortable. AC cabs cost slightly more but are worth it for comfort.</p>

<h3>5. Book a Full-Day Cab for Sightseeing</h3>
<p>Instead of hiring different cabs for each stop, a full-day rental (8 hours / 80 km) gives you the flexibility to stay longer at places you love. WhatsApp us to get the day package fare for your preferred vehicle.</p>

<h3>6. Night Rides Need Pre-Booking</h3>
<p>After 10 PM, finding an available cab in Goa becomes difficult. If you're planning a late night out, pre-arrange your return ride with a trusted driver.</p>

<h3>7. Respect the 80 km Day Limit</h3>
<p>Full-day packages usually cover 80 km. Plan your itinerary to stay within this range or clarify extra km charges upfront when you book.</p>

<h3>8. Share Your Hotel Location, Not Just the Name</h3>
<p>Goa has many small guesthouses with similar names. Share your Google Maps pin to avoid confusion and ensure your driver reaches the right place.</p>

<h3>9. Tip Your Driver for Excellent Service</h3>
<p>A ₹100–₹200 tip on top of the agreed fare is a generous and appreciated gesture for a long day trip or early-morning airport run.</p>

<h3>10. Use WhatsApp for All Communication</h3>
<p>WhatsApp is the standard in Goa for cab booking. It creates a written record of your fare, timing, and pickup location — and lets you reach your driver instantly on the day of travel.</p>

<p>Manohar International Airport Taxi follows all of the above standards — transparent fares, pre-booked confirmations, and professional drivers. Book your Goa cab on WhatsApp today.</p>
    `,
  },
  {
    slug: "old-goa-churches-sightseeing",
    category: "Sightseeing",
    categoryColor: "#15803D",
    date: "March 20, 2026",
    readTime: "5 min read",
    title: "Old Goa Churches & Panjim: A Half-Day Heritage Cab Tour from North Goa",
    excerpt:
      "Step back into 500 years of Portuguese colonial history on a half-day cab tour of Old Goa's UNESCO World Heritage churches and the colourful Latin Quarter of Panjim — perfect for culture lovers.",
    img: "https://thumbs.dreamstime.com/b/ancient-basilica-bom-jesus-old-goa-church-south-part-india-which-was-capital-early-days-portuguese-rule-located-287131470.jpg?w=992",
    alt: "Beautiful white colonial church in Goa",
    content: `
<h2>Old Goa Heritage Cab Tour: Churches, History & Latin Quarter</h2>
<p>Just 9 km from Panaji, <strong>Old Goa</strong> is home to one of the most remarkable collections of colonial-era architecture in Asia. Its churches and convents are listed as a <strong>UNESCO World Heritage Site</strong> — and are a must-visit for any traveller with even a passing interest in history or architecture.</p>

<h3>Top Sites in Old Goa</h3>
<ul>
  <li><strong>Basilica of Bom Jesus:</strong> Built in 1605, this is one of the oldest churches in India and holds the mortal remains of St. Francis Xavier. A masterpiece of Baroque architecture.</li>
  <li><strong>Sé Cathedral:</strong> One of the largest churches in Asia. Its famous Golden Bell is said to have the richest tone in Goa.</li>
  <li><strong>Church of St. Francis of Assisi:</strong> Features intricate Manueline Portuguese carvings and a richly decorated interior.</li>
  <li><strong>Archaeological Museum of Goa:</strong> Small but fascinating — houses pre-Portuguese artefacts, hero stones, and portraits of Portuguese governors.</li>
</ul>

<h3>Combining with Panjim's Latin Quarter (Fontainhas)</h3>
<p>After Old Goa, a short 10-minute drive brings you to <strong>Fontainhas</strong> — Goa's Latin Quarter — where narrow cobblestone lanes are lined with brightly painted Portuguese-era houses. This is the most photogenic neighbourhood in Goa.</p>

<h3>Half-Day Cab Package (4 hours)</h3>
<p>We offer half-day cab packages covering Old Goa churches and the Fontainhas Latin Quarter, with return to your hotel. Fare depends on your pickup area and vehicle. WhatsApp us to get a quick quote — Pravin will confirm availability and pricing within minutes.</p>

<p>Book a heritage sightseeing cab with Manohar International Airport Taxi via WhatsApp. Our drivers are familiar with all historical sites and can help you plan the most efficient route.</p>
    `,
  },
];

/* ═══════════════════════════════════════
   BLOG PAGE (full page view)
═══════════════════════════════════════ */
export function BlogPage({ onBack, slug }) {
  const post = BLOGS.find((b) => b.slug === slug) || BLOGS[0];
  const related = BLOGS.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        paddingTop: 70,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .blog-content h2 { font-family: 'Playfair Display', serif; font-size: clamp(22px,4vw,30px); font-weight: 700; color: #1A1A1A; margin: 36px 0 14px; line-height: 1.25; }
        .blog-content h3 { font-size: 18px; font-weight: 700; color: #1A1A1A; margin: 28px 0 10px; }
        .blog-content h4 { font-size: 15px; font-weight: 700; color: #333; margin: 20px 0 8px; }
        .blog-content p { font-size: 16px; color: #555; line-height: 1.85; margin-bottom: 18px; }
        .blog-content ul, .blog-content ol { padding-left: 22px; margin-bottom: 18px; }
        .blog-content li { font-size: 15px; color: #555; line-height: 1.8; margin-bottom: 8px; }
        .blog-content strong { color: #1A1A1A; font-weight: 700; }
        .blog-content em { color: #444; font-style: italic; }
        .back-btn:hover { background: #F5F5F3 !important; }
        .rel-card:hover { border-color: #DCDCDA !important; box-shadow: 0 8px 28px rgba(0,0,0,.09) !important; transform: translateY(-3px); }
      `}</style>

      {/* Hero Banner */}
      <div
        style={{
          position: "relative",
          height: "clamp(260px, 40vw, 440px)",
          overflow: "hidden",
        }}
      >
        <img
          src={post.img}
          alt={post.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.25) 0%, rgba(0,0,0,.65) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "clamp(20px,4vw,48px) clamp(20px,6vw,60px)",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span
              style={{
                background: post.categoryColor,
                color: "#fff",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 50,
              }}
            >
              {post.category}
            </span>
            <span style={{ color: "rgba(255,255,255,.7)", fontSize: 12 }}>
              {post.date} · {post.readTime}
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(22px, 4vw, 38px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              maxWidth: 720,
              textShadow: "0 2px 12px rgba(0,0,0,.3)",
            }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,48px)",
        }}
      >
        {/* Back button */}
        <button
          className="back-btn"
          onClick={onBack}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            border: "1.5px solid #E5E5E5",
            borderRadius: 50,
            padding: "9px 18px",
            fontSize: 13,
            fontWeight: 600,
            color: "#555",
            cursor: "pointer",
            marginTop: 32,
            marginBottom: 36,
            transition: "background .2s",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          Back to Blog
        </button>

        {/* Article */}
        <article
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div
          style={{
            background: "#111",
            borderRadius: 20,
            padding: "clamp(28px,4vw,44px)",
            marginTop: 52,
            marginBottom: 60,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#F5C800",
                marginBottom: 8,
              }}
            >
              Ready to Ride?
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(20px,3vw,28px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              Book Your Goa Taxi Now
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.5)",
                marginTop: 6,
                lineHeight: 1.6,
              }}
            >
              Instant confirmation · Transparent fares · Available 24/7
            </p>
          </div>
          <a
            href="https://wa.me/918007909460?text=Hi%20Pravin!%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20cab%20in%20Goa."
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "#15803D",
              color: "#fff",
              padding: "14px 26px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(21,128,61,.4)",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Book on WhatsApp
          </a>
        </div>

        {/* Related Posts */}
        <div style={{ marginBottom: 80 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 20,
            }}
          >
            More from the Blog
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
              gap: 16,
            }}
          >
            {related.map((r) => (
              <div
                key={r.slug}
                className="rel-card"
                onClick={() => {}}
                style={{
                  background: "#fff",
                  border: "1px solid #E8E8E6",
                  borderRadius: 14,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all .25s cubic-bezier(.22,1,.36,1)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.04)",
                }}
              >
                <img
                  src={r.img}
                  alt={r.alt}
                  style={{
                    width: "100%",
                    height: 130,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "14px 16px 18px" }}>
                  <span
                    style={{
                      background: r.categoryColor + "18",
                      color: r.categoryColor,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 50,
                    }}
                  >
                    {r.category}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#1A1A1A",
                      lineHeight: 1.4,
                      marginTop: 10,
                    }}
                  >
                    {r.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   BLOG LISTING PAGE (all posts)
═══════════════════════════════════════ */
export function BlogListPage({ onReadMore }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(BLOGS.map((b) => b.category))),
  ];
  const filtered =
    activeCategory === "All"
      ? BLOGS
      : BLOGS.filter((b) => b.category === activeCategory);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAFAFA",
        paddingTop: 70,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .blog-card:hover { border-color: #DCDCDA !important; box-shadow: 0 12px 36px rgba(0,0,0,.1) !important; transform: translateY(-4px); }
        .blog-card:hover .blog-read-more { background: #F5C800 !important; color: #111 !important; }
        .cat-btn:hover { border-color: #1A1A1A !important; color: #1A1A1A !important; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "60px clamp(20px,5vw,40px) 100px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 52 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 3,
                background: "#F5C800",
                borderRadius: 2,
              }}
            />
            Goa Travel Blog
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.1,
              letterSpacing: "-0.5px",
              marginBottom: 14,
            }}
          >
            Expert Guides for{" "}
            <span
              style={{
                background: "#F5C800",
                color: "#111",
                padding: "0 8px",
                borderRadius: 4,
              }}
            >
              Travelling Goa
            </span>
          </h1>
          <p style={{ fontSize: 16, color: "#777", lineHeight: 1.7, maxWidth: 560 }}>
            In-depth guides on taxi services, sightseeing itineraries, airport transfers, and travel tips for Goa — written by the team at Manohar International Airport Taxi.
          </p>
        </div>

        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 44,
          }}
        >
          {categories.map((c) => (
            <button
              key={c}
              className="cat-btn"
              onClick={() => setActiveCategory(c)}
              style={{
                padding: "8px 18px",
                border: "1.5px solid",
                borderColor: activeCategory === c ? "#1A1A1A" : "#E5E5E5",
                borderRadius: 50,
                background: activeCategory === c ? "#1A1A1A" : "transparent",
                color: activeCategory === c ? "#fff" : "#888",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured Post (first) */}
        {activeCategory === "All" && (
          <div
            className="blog-card"
            onClick={() => onReadMore(BLOGS[0].slug)}
           style={{
  display: "grid",
  gridTemplateColumns:
    typeof window !== "undefined" && window.innerWidth < 768
      ? "1fr"
      : "1fr 1fr",
  gap: 0,
  background: "#fff",
  border: "1px solid #E8E8E6",
  borderRadius: 20,
  overflow: "hidden",
  marginBottom: 32,
  cursor: "pointer",
  transition: "all .3s cubic-bezier(.22,1,.36,1)",
  boxShadow: "0 4px 16px rgba(0,0,0,.06)",
}}
          >
            <div
  style={{
    minHeight:
      typeof window !== "undefined" && window.innerWidth < 768
        ? 240
        : 340,
    position: "relative",
    overflow: "hidden",
  }}
>
              <img
                src={BLOGS[0].img}
                alt={BLOGS[0].alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .5s cubic-bezier(.22,1,.36,1)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  background: "#F5C800",
                  color: "#111",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: 50,
                }}
              >
                Featured
              </div>
            </div>
            <div
              style={{
                padding: "clamp(24px,4vw,44px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span
                  style={{
                    background: BLOGS[0].categoryColor,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: 50,
                  }}
                >
                  {BLOGS[0].category}
                </span>
                <span style={{ fontSize: 12, color: "#AAA" }}>
                  {BLOGS[0].date} · {BLOGS[0].readTime}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px,2.5vw,26px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  lineHeight: 1.3,
                  marginBottom: 14,
                }}
              >
                {BLOGS[0].title}
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "#777",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                {BLOGS[0].excerpt}
              </p>
              <span
                className="blog-read-more"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#1A1A1A",
                  color: "#fff",
                  padding: "11px 22px",
                  borderRadius: 50,
                  fontSize: 13,
                  fontWeight: 600,
                  width: "fit-content",
                  transition: "all .2s",
                }}
              >
                Read Full Guide →
              </span>
            </div>
          </div>
        )}

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {(activeCategory === "All" ? filtered.slice(1) : filtered).map(
            (post) => (
              <div
                key={post.slug}
                className="blog-card"
                onClick={() => onReadMore(post.slug)}
                style={{
                  background: "#fff",
                  border: "1px solid #E8E8E6",
                  borderRadius: 18,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all .3s cubic-bezier(.22,1,.36,1)",
                  boxShadow: "0 2px 8px rgba(0,0,0,.04)",
                }}
              >
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={post.img}
                    alt={post.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform .5s cubic-bezier(.22,1,.36,1)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      background: post.categoryColor,
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 50,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#BBB",
                      marginBottom: 10,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {post.date} · {post.readTime}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 17,
                      fontWeight: 700,
                      color: "#1A1A1A",
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#888",
                      lineHeight: 1.75,
                      marginBottom: 18,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="blog-read-more"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#F5F5F3",
                      color: "#555",
                      padding: "9px 18px",
                      borderRadius: 50,
                      fontSize: 12,
                      fontWeight: 600,
                      transition: "all .2s",
                    }}
                  >
                    Read More →
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   HOMEPAGE BLOG PREVIEW STRIP
   — Drop this into your homepage
═══════════════════════════════════════ */
export function BlogPreviewStrip({ onReadMore, onViewAll }) {
  const preview = BLOGS.slice(0, 3);

  return (
    <section
      id="blog"
      style={{
        background: "#fff",
        padding: "80px 0 90px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .hp-blog-card:hover { border-color: #DCDCDA !important; box-shadow: 0 14px 40px rgba(0,0,0,.1) !important; transform: translateY(-5px); }
        .hp-blog-card:hover .hp-blog-img { transform: scale(1.04); }
        .hp-blog-card:hover .hp-read-more { background: #F5C800 !important; color: #111 !important; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,40px)",
        }}
      >
        {/* Section header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#767676",
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 3,
                  background: "#F5C800",
                  borderRadius: 2,
                }}
              />
              Travel Blog
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(28px,4vw,42px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
              }}
            >
              Goa Travel Guides
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#888",
                marginTop: 10,
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Expert tips, itineraries, and cab guides from the team that knows Goa best.
            </p>
          </div>
          <button
            onClick={onViewAll}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              border: "1.5px solid #E5E5E5",
              borderRadius: 50,
              padding: "11px 22px",
              fontSize: 13,
              fontWeight: 600,
              color: "#555",
              cursor: "pointer",
              transition: "all .2s",
            }}
          >
            View All Articles →
          </button>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
            gap: 24,
          }}
        >
          {preview.map((post, i) => (
            <div
              key={post.slug}
              className={`hp-blog-card reveal reveal-d${i + 1}`}
              onClick={() => onReadMore(post.slug)}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E8E8E6",
                borderRadius: 18,
                overflow: "hidden",
                cursor: "pointer",
                transition: "all .3s cubic-bezier(.22,1,.36,1)",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)",
              }}
            >
              <div
                style={{
                  height: 200,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={post.img}
                  alt={post.alt}
                  className="hp-blog-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform .5s cubic-bezier(.22,1,.36,1)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: post.categoryColor,
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "4px 12px",
                    borderRadius: 50,
                  }}
                >
                  {post.category}
                </span>
              </div>
              <div style={{ padding: "20px 22px 26px" }}>
                <div
                  style={{
                    fontSize: 11,
                    color: "#BBB",
                    marginBottom: 10,
                  }}
                >
                  {post.date} · {post.readTime}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#1A1A1A",
                    lineHeight: 1.4,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#888",
                    lineHeight: 1.75,
                    marginBottom: 20,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="hp-read-more"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "#1A1A1A",
                    color: "#fff",
                    padding: "9px 18px",
                    borderRadius: 50,
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "all .2s",
                  }}
                >
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}