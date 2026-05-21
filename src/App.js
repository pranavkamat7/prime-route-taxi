import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
/* ═══════════════════════════════════════
   GLOBAL CSS - Light, Premium, Real
═══════════════════════════════════════ */
const CSS = `




*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
  background:#FAFAFA;
  color:#1A1A1A;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-track{background:#EFEFEF}
::-webkit-scrollbar-thumb{background:#F5C800;border-radius:4px}

/* ── KEYFRAMES ── */
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes scaleIn{from{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}
@keyframes waPulse{0%,100%{box-shadow:0 0 0 0 rgba(22,101,52,.5)}65%{box-shadow:0 0 0 14px rgba(22,101,52,0)}}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes shimmerText{0%{background-position:-300px 0}100%{background-position:300px 0}}
@keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(0,0,0,.18)}50%{box-shadow:0 0 0 10px rgba(212,136,10,0)}}
@keyframes gradMove{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes twinkle{0%,100%{opacity:.3}50%{opacity:1}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes starFill{from{transform:scale(0)}to{transform:scale(1)}}
@keyframes loaderBar{from{width:0}to{width:100%}}
@keyframes spinSlow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes slideUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

/* ── SCROLL REVEAL ── */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-d1{transition-delay:.1s!important}
.reveal-d2{transition-delay:.2s!important}
.reveal-d3{transition-delay:.3s!important}
.reveal-d4{transition-delay:.4s!important}
.reveal-left{opacity:0;transform:translateX(-24px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.reveal-left.visible{opacity:1;transform:translateX(0)}
.reveal-right{opacity:0;transform:translateX(24px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.reveal-right.visible{opacity:1;transform:translateX(0)}

/* ── HERO ENTRY ── */
.hero-tag  {animation:fadeUp .6s .05s cubic-bezier(.22,1,.36,1) both}
.hero-h1   {animation:fadeUp .7s .12s cubic-bezier(.22,1,.36,1) both}
.hero-p    {animation:fadeUp .7s .22s cubic-bezier(.22,1,.36,1) both}
.hero-btns {animation:fadeUp .7s .32s cubic-bezier(.22,1,.36,1) both}
.hero-stats{animation:fadeUp .7s .44s cubic-bezier(.22,1,.36,1) both}

/* ── HOVER EFFECTS ── */
.svc-card:hover{transform:translateY(-6px)!important;box-shadow:0 20px 44px rgba(0,0,0,.1)!important;border-color:rgba(0,0,0,.15)!important}
.car-card:hover{transform:translateY(-8px)!important;box-shadow:0 28px 56px rgba(0,0,0,.12)!important}
.car-card:hover .car-book-btn{background:#111!important;color:#fff!important;border-color:#111!important}
.why-card:hover{transform:translateY(-5px)!important;box-shadow:0 16px 36px rgba(0,0,0,.09)!important;border-color:rgba(0,0,0,.2)!important}
.spot-pill:hover{background:#F5C800!important;border-color:#F5C800!important;transform:translateY(-2px)!important;color:#111!important}
.nav-lnk:hover{color:#111!important}
.wa-fab:hover{transform:scale(1.1)!important}
.book-btn-main:hover{transform:translateY(-2px)!important;box-shadow:0 14px 32px rgba(22,101,52,.35)!important}
.tel-btn:hover{background:#1A1A1A!important;color:#fff!important;transform:translateY(-2px)!important}
.tel-btn:hover .phone-icon{
  stroke:#fff !important;
}
.review-card:hover{border-color:rgba(245,200,0,.28)!important;transform:translateY(-4px)!important;box-shadow:0 16px 36px rgba(0,0,0,.08)!important}
.est-btn:hover{background:#333!important;transform:translateY(-2px)!important;box-shadow:0 10px 28px rgba(0,0,0,.18)!important}

/* ── LAYOUT ── */
.wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 20px}
.sec{padding:35px 0}
.stag{
  font-family:'Inter',sans-serif;
  font-size:11px;
  font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  color:#767676;
  margin-bottom:12px;
  display:flex;
  align-items:center;
  gap:10px;
}
.stag::before{content:'';display:block;width:24px;height:3px;background:#F5C800;border-radius:2px}
.sh2{
  font-family:'Playfair Display',serif;
  font-size:clamp(28px,5vw,50px);
  font-weight:700;
  line-height:1.1;
  letter-spacing:-.5px;
  color:#1A1A1A;
}
.sp{font-size:16px;color:#666;line-height:1.75;margin-top:12px;font-weight:400}

/* ── MOBILE LAYOUT ── */
.hero-layout{display:flex;flex-direction:column;gap:0;padding-top:24px;padding-bottom:32px}
.hero-text{text-align:center;order:1}
.hero-visual{order:2;margin:0 auto;width:100%;max-width:480px}
.btn-row{display:flex;flex-direction:column;gap:10px;width:100%;margin-bottom:32px}
.btn-row a{justify-content:center!important;width:100%}
.stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid #E5E5E5;border-radius:20px;overflow:hidden;background:#fff}
.stat-cell{padding:20px 12px;text-align:center;border-right:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5}
.stat-cell:nth-child(2n){border-right:none}
.stat-cell:nth-child(3),.stat-cell:nth-child(4){border-bottom:none}
.svc-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:32px}
.svc-card{transition:transform .3s cubic-bezier(.22,1,.36,1),border-color .3s,box-shadow .3s}
.cars-grid{display:grid;grid-template-columns:1fr;gap:24px;margin-top:36px}
.car-card{transition:transform .3s cubic-bezier(.22,1,.36,1),box-shadow .3s}
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:36px}
.why-card{transition:transform .3s cubic-bezier(.22,1,.36,1),border-color .3s,box-shadow .3s}
.foot-grid{display:grid;grid-template-columns:1fr;gap:32px}
.review-grid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:32px}
.review-card{transition:transform .3s,border-color .3s,box-shadow .3s}
.spots-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}
.spot-pill{transition:all .25s cubic-bezier(.22,1,.36,1)}
.est-inputs{display:grid;grid-template-columns:1fr;gap:14px}
.tl-center{display:flex;justify-content:center}
.sec-head{text-align:center}
@media (max-width: 768px){
  .book-now-btn{
    display:none !important;
  }
}
  /* ── PREMIUM MOBILE FOOTER ── */
@media (max-width:768px){

  .foot-grid{
    display:flex !important;
    flex-direction:column;
    gap:34px !important;
    text-align:center;
  }

  .foot-grid > div{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }

  .foot-grid p{
    max-width:100% !important;
    font-size:14px !important;
    line-height:1.9 !important;
  }

  .foot-grid a{
    text-align:center;
    font-size:14px !important;
  }

  .foot-grid img{
    width:120px !important;
    height:120px !important;
  }

  .footer-brand{
    justify-content:center;
    align-items:center;
    margin-bottom:18px !important;
  }

  .footer-brand-title{
    font-size:20px !important;
  }

  .footer-brand-sub{
    font-size:10px !important;
    letter-spacing:3px !important;
  }

  .footer-heading{
    font-size:12px !important;
    margin-bottom:18px !important;
    color:rgba(255,255,255,.45) !important;
  }

  .footer-contact{
    font-size:20px !important;
  }

  .footer-bottom{
    flex-direction:column;
    justify-content:center !important;
    align-items:center !important;
    text-align:center;
    gap:14px !important;
    padding-top:24px !important;
  }

}

/* ── TABLET ── */
@media(min-width:640px){
  .wrap{padding:0 32px}
  .svc-grid{grid-template-columns:1fr 1fr 1fr}
  .cars-grid{grid-template-columns:1fr 1fr}
  .stat-grid{grid-template-columns:repeat(4,1fr)}
  .stat-cell{border-bottom:none}
  .stat-cell:nth-child(3){border-right:1px solid #E5E5E5}
  .stat-cell:last-child{border-right:none}
  .review-grid{grid-template-columns:1fr 1fr}
  .est-inputs{grid-template-columns:1fr 1fr}
}

/* ── DESKTOP ── */
@media(min-width:960px){
  .wrap{padding:0 40px}
  .sec{padding:100px 0}
  .hero-layout{flex-direction:row;align-items:center;gap:56px;padding-top:40px;padding-bottom:64px}
  .hero-text{text-align:left;order:1;flex:1}
  .hero-visual{order:2;flex:1;max-width:none;margin:0}
  .btn-row{flex-direction:row;width:auto}
  .btn-row a{width:auto}
  .svc-grid{grid-template-columns:repeat(5,1fr)}
  .svc-card{text-align:left}
  .cars-grid{grid-template-columns:repeat(3,1fr)}
  .why-grid{grid-template-columns:repeat(4,1fr)}
  .why-card{text-align:left}
  .foot-grid{grid-template-columns:2fr 1fr 1fr 1fr}
  .sec-head{text-align:left}
  .tl-center{justify-content:flex-start}
  .stag,.sh2,.sp{text-align:left}
  nav .nav-area{display:flex!important}
  .nav-lnk:hover{color:#F5C800 !important;}
  .review-grid{grid-template-columns:repeat(3,1fr)}
  .est-inputs{grid-template-columns:1fr 1fr 1fr}
}

/* ── INPUT STYLES ── */
.est-select{
  width:100%;
  padding:13px 16px;
  background:#fff;
  border:1.5px solid #DCDCDC;
  border-radius:10px;
  color:#1A1A1A;
  font-family:'Inter',sans-serif;
  font-size:14px;
  font-weight:500;
  outline:none;
  transition:border-color .2s,box-shadow .2s;
  cursor:pointer;
  appearance:none;
  -webkit-appearance:none;
}
.est-select option{background:#fff;color:#1A1A1A}
.est-select:focus{border-color:#F5C800;box-shadow:0 0 0 3px rgba(245,200,0,.14)}

/* ── TRIP TYPE BTN ── */
.trip-type-btn{
  flex:1;
  padding:10px 18px;
  border:1.5px solid #DCDCDC;
  border-radius:8px;
  background:transparent;
  color:#888;
  font-family:'Inter',sans-serif;
  font-size:13px;
  font-weight:600;
  cursor:pointer;
  transition:all .2s;
}
.trip-type-btn.active{
  background:#F5C800;
  border-color:#F5C800;
  color:#111;
}

/* ── PROGRESS BAR ── */
.est-bar{height:5px;border-radius:3px;background:#EFEFEF;overflow:hidden}
.est-bar-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,#F5C800,#F5C800);transition:width .6s cubic-bezier(.22,1,.36,1)}

/* ── TABS ── */
.tab-btn{
  padding:8px 20px;
  border-radius:50px;
  border:none;
  font-family:'Inter',sans-serif;
  font-size:13px;
  font-weight:600;
  cursor:pointer;
  transition:all .2s;
}
.tab-btn.active{background:#F5C800;color:#111;box-shadow:0 6px 18px rgba(0,0,0,.15)}
.tab-btn:not(.active){background:transparent;color:#999}

/* ── NAV DESKTOP HIDE HAMBURGER ── */
@media(min-width:960px){
  .hamburger-btn{display:none!important}
}
`;

/* ── CONSTANTS ── */
const PH = "918007909460";
const wa = (m) => `https://wa.me/${PH}?text=${encodeURIComponent(m)}`;
const GM = "Hi Pravin 👋 I found Prime Route Taxi and would like to book a ride in Goa!";
const GRN = "#15803D";
const ORG = "#F5C800";

/* ── DATA ── */
const SERVICES = [
  { icon: "✈", name: "Airport Pickup & Drop", desc: "Flight tracked. Zero waiting." },
  { icon: "⬡", name: "City Rides", desc: "Any corner of Goa, anytime." },
  { icon: "◷", name: "Full Day Rental", desc: "Your schedule, your pace." },
  { icon: "⛱", name: "Sightseeing Tours", desc: "Best of North & South Goa." },
  { icon: "⇒", name: "Outstation Trips", desc: "Mumbai, Pune & beyond." },
  { icon: "☾", name: "Night Rides", desc: "Safe late-night taxi service across Goa." },
];

// Real Unsplash car images
const CARS = [
  {
    name: "Toyota Innova Crysta",
    type: "Premium SUV",
    seats: 7,
    price: "₹2,500",
    perKm: "₹14/km",
    tag: "Most Popular",
    tagBg: "#111",
    accent: "#111",
    features: ["AC", "7 Seats", "Luggage", "Music"],
    desc: "Spacious & powerful. Ideal for families, group tours and VIP airport runs.",
    rating: 4.9,
    trips: 340,
    img: "https://cf.autodeft2.pw/uploads/images/2016/Press%20Event/Toyota%20Innova/Mainshot%20cover%20page.png",
  },
  {
    name: "Maruti Swift Dzire",
    type: "Executive Sedan",
    seats: 4,
    price: "₹1,400",
    perKm: "₹10/km",
    tag: "Best for Airports",
    tagBg: "#1D6DB5",
    accent: "#1D6DB5",
    features: ["AC", "4 Seats", "Luggage", "USB"],
    desc: "Smooth and fuel efficient. Perfect for quick city rides and transfers.",
    rating: 4.8,
    trips: 210,
    img: "https://d3az1m1mjm1nrq.cloudfront.net/undefinedhome-dzire_1744276735831.jpg",
  },
  {
    name: "Toyota Etios",
    type: "Classic Sedan",
    seats: 4,
    price: "₹1,200",
    perKm: "₹9/km",
    tag: "Budget Pick",
    tagBg: "#15803D",
    accent: "#15803D",
    features: ["AC", "4 Seats", "Luggage", "WiFi"],
    desc: "Reliable, clean and great value for solo travellers and short trips.",
    rating: 4.7,
    trips: 180,
    img: "https://wallpapercave.com/wp/wp9332432.jpg",
  },
];

const STATS = [
  { n: "500+", l: "Happy Rides" },
  { n: "3", l: "Premium Cars" },
  { n: "24/7", l: "Available" },
  { n: "5 ★", l: "Top Rated" },
];

const WHY = [
  { t: "Safe & Verified", d: "Licensed, background checked professional drivers." },
  { t: "Always Punctual", d: "We track your flight you never wait." },
  { t: "24/7 WhatsApp", d: "Instant reply from Pravin any time." },
  { t: "No Hidden Costs", d: "Transparent pricing pay what's quoted." },
];

const WHY_ICONS = [
  // Shield
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  // Clock
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  // Message
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  // Tag
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
];

const REVIEWS = [
  { name: "Ananya S.", loc: "Mumbai", text: "Pravin was waiting at the airport before we landed. Impeccable service and spotlessly clean Innova. 10/10!", stars: 5, trip: "Airport → Hotel Marriott" },
  { name: "James W.", loc: "UK Tourist", text: "Best taxi experience in Goa by far. Did a full North Goa tour and he knew every hidden gem. Already recommended to 5 friends.", stars: 5, trip: "North Goa Sightseeing" },
  { name: "Rohan M.", loc: "Bangalore", text: "Booked on WhatsApp and got confirmation in 2 mins. Price exactly as quoted. Will definitely use again next trip.", stars: 5, trip: "City Rides" },
  { name: "Priya K.", loc: "Delhi", text: "Pravin went beyond to ensure we got to the ferry on time despite traffic. Very professional and friendly.", stars: 5, trip: "Panaji → Divar Island" },
  { name: "Vikram T.", loc: "Pune", text: "Used for outstation trip to Mumbai. Comfortable ride and transparent billing. Highly recommend the Innova!", stars: 5, trip: "Goa → Pune" },
  { name: "Sarah L.", loc: "Australia", text: "Solo female traveler felt completely safe. Very courteous driver who knew every restaurant worth visiting.", stars: 5, trip: "South Goa Tour" },
];

const GOA_SPOTS = [
  { name: "Calangute Beach", dist: "18km" },
  { name: "Dudhsagar Falls", dist: "60km" },
  { name: "Old Goa Churches", dist: "9km" },
  { name: "Anjuna Market", dist: "22km" },
  { name: "Goa Airport", dist: "29km" },
  { name: "Panaji City", dist: "4km" },
  { name: "Baga Beach", dist: "16km" },
  { name: "Spice Plantations", dist: "42km" },
];

const ROUTES = [
  { from: "Goa Airport (GOI)", to: "Calangute Beach", innova: "₹1,200", dzire: "₹800", etios: "₹700", km: 28 },
  { from: "Goa Airport (GOI)", to: "Panaji City", innova: "₹900", dzire: "₹600", etios: "₹500", km: 29 },
  { from: "Panaji", to: "Dudhsagar Falls", innova: "₹3,000", dzire: "₹2,200", etios: "₹1,900", km: 60 },
  { from: "Calangute", to: "Anjuna Market", innova: "₹600", dzire: "₹400", etios: "₹350", km: 8 },
  { from: "Panaji", to: "Old Goa", innova: "₹500", dzire: "₹350", etios: "₹300", km: 9 },
  { from: "Goa", to: "Mumbai (Outstation)", innova: "₹12,000", dzire: "₹9,000", etios: "₹8,000", km: 600 },
];

const TICKER = [
  "Airport Transfers", "City Rides", "Sightseeing Tours", "Outstation Trips",
  "500+ Happy Riders", "Available 24/7", "WhatsApp Booking", "Explore Goa"
];

/* ═══════════════════════════════════════
   LOADER
═══════════════════════════════════════ */
function FirstVisitLoader({ visible }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#fff",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden"
    }}>
      {/* Hero photo background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://www.pexels.com/photo/back-view-of-vintage-taxis-on-street-in-india-27091047/')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: .08
      }} />
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(245,200,0,.12)", border: "1px solid rgba(0,0,0,.15)",
          borderRadius: 50, padding: "6px 18px", marginBottom: 24,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 700, color: "#111",
          letterSpacing: 3, textTransform: "uppercase"
        }}>Prime Route Taxi · Goa</div>
        <h2 style={{
          fontFamily: "'Playfair Display',serif", fontWeight: 700,
          fontSize: "clamp(32px,7vw,64px)", lineHeight: 1.06, color: "#1A1A1A", marginBottom: 12
        }}>
          Your Goa Ride<br />
          <span style={{ background: "#F5C800", color: "#111", padding: "2px 8px", borderRadius: 4 }}>is arriving...</span>
        </h2>
        <p style={{ color: "#888", fontSize: 15, lineHeight: 1.7, maxWidth: 360, margin: "0 auto 32px" }}>
          Fast booking · verified drivers · smooth rides across Goa.
        </p>
        <div style={{ width: 200, height: 3, background: "#EFEFEF", borderRadius: 2, overflow: "hidden", margin: "0 auto" }}>
          <div style={{ height: "100%", background: "#F5C800", borderRadius: 2, animation: "loaderBar 2s cubic-bezier(.4,0,.2,1) forwards" }} />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   TICKER STRIP
═══════════════════════════════════════ */
function TickerStrip() {
  return (
    <div style={{ overflow: "hidden", padding: "10px 0", background: "#1A1A1A" }}>
      <div style={{ display: "flex", animation: "marquee 30s linear infinite", width: "max-content" }}>
        {[...TICKER, ...TICKER].map((t, i) => (
          <span key={i} style={{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 600,
            color: "rgba(255,255,255,.6)", padding: "0 20px", whiteSpace: "nowrap",
            display: "flex", alignItems: "center", gap: 8, letterSpacing: "1px", textTransform: "uppercase"
          }}>
            {t}
            <span style={{ color: "rgba(255,255,255,.3)", marginLeft: 8 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
function Navbar() {
  const [sc, setSc] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      background: "#111",
      backdropFilter: "blur(20px)",
      borderBottom: sc ? "1px solid #E5E5E5" : "1px solid rgba(232,228,220,.5)",
      boxShadow: sc ? "0 2px 20px rgba(0,0,0,.07)" : "none",
      transition: "all .35s",
    }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden"
          }}>
            <img
              src="/logo.png"
              alt="Prime Taxi Logo"
              style={{
                width: "108px",
                height: "108px",
                objectFit: "contain",
                marginBottom: "-10px",
              }}
            />
          </div>
          <div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "-.3px", marginLeft: "-10px" }}>
              Prime Route Taxi
            </div>
            <div style={{ fontSize: 9, color: "#1a1a1a", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 600, background: "#F5C800", padding: "1px 5px", marginLeft: "-10px", borderRadius: 2 }}>
              GOA · EST. 2019
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="nav-area" style={{ display: "none", gap: 32 }}>
          {[["services", "Services"], ["cars", "Fleet"], ["reviews", "Reviews"], ["contact", "Contact"]].map(([id, l]) => (
            <span key={id} className="nav-lnk" onClick={() => go(id)}
              style={{ fontSize: 14, fontWeight: 500, color: "#fff", cursor: "pointer", transition: "color .2s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
              {l}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div className="book-now-btn">
            <a href={wa(GM)} target="_blank" rel="noreferrer"
              style={{
                background: "#15803D",
                color: "#fff", padding: "10px 20px", borderRadius: 50, fontWeight: 600,
                fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 7,
                boxShadow: "0 4px 16px rgba(21,128,61,.3)", transition: "all .25s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              <span>Book Now</span>
            </a>
          </div>
          <button className="hamburger-btn" onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "transparent", border: "none", color: "#fff", cursor: "pointer",
              padding: 4, lineHeight: 1, display: "flex", flexDirection: "column", gap: 5
            }}>
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "all .25s", transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, opacity: mobileOpen ? 0 : 1, transition: "all .25s" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#fff", borderRadius: 2, transition: "all .25s", transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{
          background: "rgba(255,255,255,.99)", backdropFilter: "blur(20px)",
          borderTop: "1px solid #E5E5E5",
          padding: "12px 20px 20px", animation: "fadeIn .2s ease"
        }}>
          {[["services", "Services"], ["cars", "Fleet"], ["reviews", "Reviews"], ["contact", "Contact"]].map(([id, l]) => (
            <div key={id} onClick={() => go(id)}
              style={{ padding: "13px 0", borderBottom: "1px solid #EFEFEF", color: "#333", fontSize: 15, fontWeight: 500, cursor: "pointer", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
              {l}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ═══════════════════════════════════════
   HERO PHOTO CARD
═══════════════════════════════════════ */
function HeroPhotoCard() {
  return (
    <div
    // style={{
    //   position:"relative",
    //   borderRadius:24,
    //   overflow:"hidden",
    //   boxShadow:"0 32px 80px rgba(0,0,0,.16)"
    // }}
    >
      {/* Main taxi photo */}
      <img
        src="https://cf.autodeft2.pw/uploads/images/2016/Press%20Event/Toyota%20Innova/Mainshot%20cover%20page.png"
        alt="Premium taxi in Goa"
        style={{
          width: "100%",
          height: 340,
          objectFit: "contain",
          display: "block"
        }}
      />

      {/* Feature chips */}
      <div
        style={{
          background: "#fff",
          padding: "14px 18px",
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          justifyContent: "center",
          borderTop: "1px solid #EFEFEF"
        }}
      >
        {[["❄", "Full AC"], ["👥", "7 Seats"], ["🧳", "Luggage"], ["★", "5-Star"], ["📍", "GPS"]].map(([ic, l]) => (
          <div
            key={l}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: "#FAFAFA",
              border: "1px solid #E5E5E5",
              borderRadius: 50,
              padding: "5px 12px",
              fontSize: 11,
              color: "#444",
              fontWeight: 600
            }}
          >
            <span style={{ fontSize: 10 }}>{ic}</span>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
function Hero() {
  return (
    <motion.section initial="hidden" animate="visible" variants={fadeUp} style={{
      paddingTop: 70,
      background: "#FAFAFA",
      overflow: "hidden", position: "relative",
    }}>
      {/* Subtle texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px,rgba(0,0,0,.04) 1px,transparent 0)",
        backgroundSize: "32px 32px", pointerEvents: "none", opacity: .5
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-layout">
          <div className="hero-text">
            {/* Badge */}
            {/* <div className="hero-tag tl-center" style={{ marginBottom: 20 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(245,200,0,.1)", border: "1px solid rgba(245,200,0,.28)",
                borderRadius: 50, padding: "7px 18px",
              }}>
                <span style={{
                  width: 7, height: 7, background: "#22C55E", borderRadius: "50%", display: "block",
                  boxShadow: "0 0 0 3px rgba(34,197,94,.2)", animation: "pulseGlow 2s infinite"
                }} />
                <span style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 700,
                  color: "#111", letterSpacing: "2px", textTransform: "uppercase"
                }}>Available Now · Goa</span>
              </div>
            </div> */}

            <h1 className="hero-h1" style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(38px,6.5vw,68px)", fontWeight: 700, lineHeight: 1.08,
              color: "#1A1A1A", letterSpacing: "-1px", marginBottom: 18,
            }}>
              Your Ride,<br />
              <span style={{ background: "#F5C800", color: "#111", padding: "0 8px", borderRadius: 4 }}>Your Way</span><br />
              <span style={{ fontSize: "clamp(26px,4.5vw,48px)", color: "#888", fontWeight: 400 }}>Across Goa.</span>
            </h1>

            <p className="hero-p" style={{
              fontSize: 16, color: "#666", lineHeight: 1.8, marginBottom: 32, maxWidth: 420
            }}>
              Airport pickups · sightseeing tours · outstation trips with professional, verified drivers you can trust.
            </p>

            <div className="hero-btns btn-row">
              <a href={wa(GM)} target="_blank" rel="noreferrer"
                className="book-btn-main"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#15803D",
                  color: "#fff", padding: "15px 26px", borderRadius: 12,
                  fontWeight: 600, fontSize: 15, textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(21,128,61,.3)",
                  transition: "all .28s cubic-bezier(.22,1,.36,1)",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
                }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                Book on WhatsApp
              </a>

              <a href="tel:+918007909460" className="tel-btn"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    border: "1.5px solid #DCDCDC",
    color: "#1A1A1A",
    padding: "15px 26px",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    textDecoration: "none",
    transition: "all .28s cubic-bezier(.22,1,.36,1)",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,.06)"
  }}>

  <svg
    className="phone-icon"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1A1A1A"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>

  +91 80079 09460
</a>
            </div>

            {/* Stats */}
            <div className="hero-stats stat-grid">
              {STATS.map((s, i) => (
                <div key={i} className="stat-cell">
                  <div style={{
                    fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700,
                    color: "#111", lineHeight: 1
                  }}>{s.n}</div>
                  <div style={{
                    fontSize: 10, color: "#999", textTransform: "uppercase",
                    letterSpacing: "1.5px", fontWeight: 600, marginTop: 5, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" style={{ paddingTop: 16 }}>
            <HeroPhotoCard />
          </div>
        </div>
      </div>

      <TickerStrip />
    </motion.section>
  );
}

/* ═══════════════════════════════════════
   SERVICES
═══════════════════════════════════════ */

// Service icon SVGs
const SVC_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
  </svg>,
];

function Services() {
  return (
    <motion.section id="services" className="sec" style={{ background: "#fff" }} initial="hidden" animate="visible" variants={fadeUp}>
      <div className="wrap">
        <div className="reveal sec-head" style={{ marginBottom: 0 }}>
          <div className="stag">What We Offer</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 14 }}>
            <h2 className="sh2">Our Services</h2>
            <a href={wa(GM)} target="_blank" rel="noreferrer"
              style={{
                background: "#F5C800",
                color: "#1a1a1a", padding: "11px 24px", borderRadius: 50,
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                boxShadow: "0 6px 20px rgba(0,0,0,.15)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
              }}>
              Book Now →
            </a>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((sv, i) => (
            <a key={i} href={wa(`Hi Pravin! I'm interested in ${sv.name}. Please share details.`)}
              target="_blank" rel="noreferrer"
              className={`svc-card reveal reveal-d${Math.min(i + 1, 4)}`}
              style={{
                background: "#FAFAFA",
                border: "1px solid #E5E5E5",
                borderRadius: 18, padding: "24px 18px",
                textDecoration: "none", display: "block",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)"
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, marginBottom: 16,
                background: "rgba(245,200,0,.15)", border: "1px solid #F5C800",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#111",
                marginLeft: "auto", marginRight: "auto",
              }}>
                <div style={{ width: 22, height: 22 }}>{SVC_ICONS[i]}</div>
              </div>
              <div style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 700,
                color: "#1A1A1A", marginBottom: 6, lineHeight: 1.3
              }}>{sv.name}</div>
              <div style={{ fontSize: 12, color: "#999", lineHeight: 1.7 }}>{sv.desc}</div>
            </a>
          ))}
        </div>

        {/* Goa Spots */}
        <div className="reveal" style={{ marginTop: 56 }}>
  <div className="stag">Popular Destinations</div>

  <h3 style={{
    fontFamily:"'Playfair Display',serif",
    fontSize:24,
    fontWeight:700,
    color:"#1A1A1A",
    marginBottom:6
  }}>
    Quick Spot Bookings
  </h3>

  <p style={{
    fontSize:14,
    color:"#888",
    marginBottom:24
  }}>
    Tap a destination to instantly book your ride
  </p>

 <div style={{
  display:"flex",
  gap:16,
  overflowX:"auto",
  paddingBottom:8,
  scrollbarWidth:"none"
}}>
  {GOA_SPOTS.map((s, i) => (
    <a
      key={i}
      href={wa(`Hi Pravin! I'd like a ride to ${s.name} (approx ${s.dist}). Please share pricing & availability 🙏`)}
      target="_blank"
      rel="noreferrer"
      style={{
        minWidth:190,
        position:"relative",
        background:"#fff",
        border:"1px solid #ECECEC",
        borderRadius:"28px 28px 10px 28px",
        padding:"20px 18px",
        textDecoration:"none",
        boxShadow:"0 10px 24px rgba(0,0,0,.06)",
        overflow:"hidden",
        transition:"all .25s ease"
      }}
    >

      {/* top glow */}
      {/* <div style={{
        position:"absolute",
        top:-40,
        right:-40,
        width:100,
        height:100,
        background:"rgba(245,200,0,.18)",
        borderRadius:"50%",
        filter:"blur(10px)"
      }}/> */}

      {/* location icon */}
      <div style={{
  width:48,
  height:48,
  borderRadius:"18px 18px 8px 18px",
  background:"#fff",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  marginBottom:18
}}>
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#f5c800"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
</div>

      {/* place */}
      <div style={{
        fontSize:17,
        fontWeight:700,
        color:"#111",
        marginBottom:6,
        fontFamily:"'Inter',sans-serif"
      }}>
        {s.name}
      </div>

      {/* distance */}
      <div style={{
        fontSize:13,
        color:"#777",
        marginBottom:18
      }}>
        Approx {s.dist}
      </div>

      {/* bottom row */}
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
      }}>
        <span style={{
          fontSize:12,
          fontWeight:600,
          color:"#999",
          letterSpacing:".5px",
          textTransform:"uppercase"
        }}>
          Book Ride
        </span>

        <div style={{
          width:34,
          height:34,
          borderRadius:"50%",
          background:"#f5c800",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          color:"#fff",
          fontWeight:700
        }}>
          →
        </div>
      </div>

    </a>
  ))}
</div>
</div>
      </div>
    </motion.section>
  );
}

/* ═══════════════════════════════════════
   FLEET
═══════════════════════════════════════ */
function Fleet() {
  const bm = (c) => `Hi Pravin! I'd like to book the ${c.name}. Please share availability & pricing. 🙏`;

  return (
    <section id="cars" className="sec" style={{ background: "#F4F4F4" }}>
      <div className="wrap">
        <div className="reveal sec-head" style={{ marginBottom: 0 }}>
          <div className="stag">Our Fleet</div>
          <h2 className="sh2">Choose Your Ride</h2>
          <p className="sp">All vehicles are AC, well maintained, and GPS tracked.</p>
        </div>

        <div className="cars-grid">
          {CARS.map((car, i) => (
            <motion.div key={i} className={`car-card reveal reveal-d${Math.min(i + 1, 3)}`} whileHover={{ scale:1.03 }} transition={{ type:"spring", stiffness:300 }}
              style={{
                background: "#fff",
                border: "1px solid #E5E5E5",
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,.06)"
              }}>
              {/* Car Photo */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={car.img}
                  alt={car.name}
                  style={{ width: "100%", height: 200, objectFit: "cover", display: "block", transition: "transform .4s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                {/* Tag */}
                <div style={{
                  position: "absolute", top: 14, left: 14,
                  background: car.tagBg, color: "#fff", fontSize: 10, fontWeight: 700,
                  padding: "4px 12px", borderRadius: 50, letterSpacing: "1px", textTransform: "uppercase",
                  boxShadow: `0 4px 14px ${car.tagBg}66`
                }}>{car.tag}</div>
                {/* Rating */}
                <div style={{
                  position: "absolute", top: 14, right: 14,
                  background: "rgba(255,255,255,.95)", borderRadius: 50, padding: "5px 12px",
                  display: "flex", alignItems: "center", gap: 4,
                  boxShadow: "0 2px 8px rgba(0,0,0,.12)"
                }}>
                  <span style={{ color: "#F5C800", fontSize: 11 }}>★</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#1A1A1A", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{car.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "20px 22px 24px" }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 700, color: "#1A1A1A", marginBottom: 3 }}>
                  {car.name}
                </div>
                <div style={{
                  fontSize: 11, color: car.tagBg, fontWeight: 700,
                  letterSpacing: "2px", textTransform: "uppercase", marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                }}>{car.type}</div>

                <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                  {car.features.map((f, fi) => (
                    <span key={fi} style={{
                      fontSize: 11, color: "#666",
                      background: "#F4F4F4", border: "1px solid #E5E5E5",
                      borderRadius: 50, padding: "4px 10px", fontWeight: 500, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                    }}>{f}</span>
                  ))}
                </div>

                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, marginBottom: 6, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{car.desc}</p>
                <div style={{ fontSize: 11, color: "#BBB", marginBottom: 18, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{car.trips} trips completed</div>

                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  paddingTop: 16, borderTop: "1px solid #EFEFEF"
                }}>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", lineHeight: 1 }}>
                      {car.price}
                    </div>
                    <div style={{ fontSize: 11, color: "#AAA", marginTop: 2, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>/day · {car.perKm}</div>
                  </div>
                  <a href={wa(bm(car))} target="_blank" rel="noreferrer"
                    className="car-book-btn"
                    style={{
                      background: "transparent", border: `1.5px solid ${car.tagBg}`,
                      color: car.tagBg, padding: "11px 20px", borderRadius: 10,
                      fontWeight: 600, fontSize: 13, textDecoration: "none",
                      transition: "all .25s cubic-bezier(.22,1,.36,1)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                    }}>Book →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
                gap: "8px 16px", padding: "13px 20px", alignItems: "center",
                borderBottom: i < ROUTES.length - 1 ? "1px solid #EFEFEF" : "none",
              }}>
                <div style={{ minWidth: 0 }}>
                  <span style={{ fontSize: 12, color: "#333", fontWeight: 500, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{r.from}</span>
                  <span style={{ color: "#111", margin: "0 7px", fontSize: 11 }}>→</span>
                  <span style={{ fontSize: 12, color: "#333", fontWeight: 500, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{r.to}</span>
                </div>
                <div style={{ textAlign: "right", fontSize: 12, color: "#111", fontWeight: 700, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", whiteSpace: "nowrap" }}>{r.innova}</div>
                <div style={{ textAlign: "right", fontSize: 12, color: "#1D6DB5", fontWeight: 700, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", whiteSpace: "nowrap" }}>{r.dzire}</div>
                <div style={{ textAlign: "right", fontSize: 12, color: "#15803D", fontWeight: 700, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", whiteSpace: "nowrap" }}>{r.etios}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   WHY US
═══════════════════════════════════════ */
function WhyUs() {
  return (
    <section id="why" className="sec" style={{ background: "#1A1A1A", position: "relative", overflow: "hidden" }}>
      {/* Background photo overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=60&auto=format&fit=crop')",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: .1
      }} />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 52 }}>
          <div className="stag" style={{ justifyContent: "center" }}>Why Choose Us</div>
          <h2 className="sh2" style={{ textAlign: "center", color: "#fff" }}>
            Hundreds of Happy<br />
            <span style={{ color: "#F5C800" }}>Travellers Trust Us</span>
          </h2>
        </div>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <div key={i} className={`why-card reveal reveal-d${Math.min(i + 1, 4)}`}
              style={{
                background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)",
                borderRadius: 18, padding: "28px 22px",
              }}>
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: "rgba(245,200,0,.16)", border: "1px solid rgba(0,0,0,.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#F5C800", marginBottom: 18
              }}>
                <div style={{ width: 22, height: 22 }}>{WHY_ICONS[i]}</div>
              </div>
              <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{w.t}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{w.d}</div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="reveal" style={{
          marginTop: 52,
          background: "rgba(255,255,255,.04)",
          border: "1px solid rgba(255,255,255,.1)", borderRadius: 16,
          padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: 28, justifyContent: "center"
        }}>
          {[
            { t: "Licensed & Insured", d: "All vehicles legally registered & insured" },
            { t: "Flight Tracking", d: "We monitor your flight so you're never stranded" },
            { t: "Digital Receipts", d: "Get billing summary on WhatsApp after every trip" },
            { t: "Clean Every Ride", d: "Sanitized & deep cleaned before each booking" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 12,
                flex: "1 1 220px",
                maxWidth: 260
              }}
            >
              <div style={{
                width: 8, height: 8, borderRadius: "50%", background: "#F5C800", flexShrink: 0,
                boxShadow: "0 0 0 3px rgba(245,200,0,.22)"
              }} />
              <div>
                <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>{item.t}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.45)", lineHeight: 1.5, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   REVIEWS
═══════════════════════════════════════ */
function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="sec" style={{ background: "#F4F4F4" }}>
      <div className="wrap">
        <div className="reveal sec-head" style={{ marginBottom: 0 }}>
          <div className="stag">What People Say</div>
          <h2 className="sh2">
            Real Reviews from<br />
            <span style={{ background: "#F5C800", color: "#111", padding: "0 6px", borderRadius: 4 }}>Real Travellers</span>
          </h2>
          <p className="sp">Every review is from a genuine Prime Route Taxi customer.</p>
        </div>

        {/* Featured review */}
        <div className="reveal" style={{
          marginTop: 36,
          background: "#fff",
          border: "1px solid #E5E5E5", borderRadius: 20,
          padding: "clamp(24px,4vw,40px)", position: "relative", overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,.06)"
        }}>
          <div style={{
            position: "absolute", top: -20, right: 24,
            fontFamily: "'Playfair Display',serif", fontSize: 140,
            color: "rgba(212,136,10,.06)", lineHeight: 1, userSelect: "none"
          }}>"</div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#F5C800", fontSize: 18, animation: `starFill .3s ${i * .08}s both` }}>★</span>
              ))}
            </div>
            <p style={{
              fontFamily: "'Playfair Display',serif", fontSize: "clamp(16px,2.8vw,22px)", fontWeight: 400,
              color: "#1A1A1A", lineHeight: 1.65, marginBottom: 24,
              minHeight: 64, transition: "all .4s", fontStyle: "italic"
            }}>
              "{REVIEWS[active].text}"
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "#F5C800",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "#fff"
              }}>{REVIEWS[active].name[0]}</div>
              <div>
                <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>
                  {REVIEWS[active].name}
                </div>
                <div style={{ fontSize: 12, color: "#999", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
                  {REVIEWS[active].loc} · {REVIEWS[active].trip}
                </div>
              </div>
            </div>
          </div>
          {/* Progress dots */}
          <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
            {REVIEWS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 6, height: 6, borderRadius: 3, border: "none", cursor: "pointer",
                  background: i === active ? "#F5C800" : "#DCDCDC",
                  transition: "all .3s", padding: 0
                }} />
            ))}
          </div>
        </div>

        {/* Review grid */}
        <div className="review-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className={`review-card reveal reveal-d${Math.min(i + 1, 4)}`}
              style={{
                background: "#fff", border: "1px solid #E5E5E5",
                borderRadius: 16, padding: "20px 20px",
                boxShadow: "0 2px 8px rgba(0,0,0,.04)"
              }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                {[...Array(r.stars)].map((_, si) => (
                  <span key={si} style={{ color: "#F5C800", fontSize: 12 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.7, marginBottom: 14, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>"{r.text}"</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "#AAA", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>{r.loc}</div>
                </div>
                <div style={{
                  fontSize: 10, color: "#111", fontWeight: 700,
                  background: "#F5C800", border: "1px solid #F5C800",
                  borderRadius: 50, padding: "3px 10px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                }}>{r.trip}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 14, color: "#888", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>Travelled with us? Share your experience!</p>
          <a href={wa("Hi Pravin! I recently travelled with Prime Route Taxi and wanted to share my feedback 😊")}
            target="_blank" rel="noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#fff", border: "1.5px solid #DCDCDC",
              color: "#444", padding: "11px 22px", borderRadius: 50,
              fontWeight: 600, fontSize: 13, textDecoration: "none",
              transition: "all .25s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
              boxShadow: "0 2px 8px rgba(0,0,0,.06)"
            }}>
            Leave a Review on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   CONTACT
═══════════════════════════════════════ */
function Contact() {
  return (
    <section id="contact" className="sec" style={{ background: "#fff" }}>
      <div className="wrap">
        <div className="reveal" style={{
          background: "#1A1A1A",
          borderRadius: 24, padding: "clamp(32px,5vw,64px)",
          textAlign: "center", position: "relative", overflow: "hidden",
        }}>
          {/* Background photo */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('https://i.pinimg.com/originals/6a/1f/fe/6a1ffec4518d9c4481d8f161a354054f.jpg')",
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: .12
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block", background: "rgba(245,200,0,.16)", border: "1px solid rgba(0,0,0,.15)",
              borderRadius: 50, padding: "6px 20px", marginBottom: 20,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 10, fontWeight: 700,
              color: "#F5C800", letterSpacing: "3px", textTransform: "uppercase"
            }}>Get In Touch</div>

            <h2 style={{
              fontFamily: "'Playfair Display',serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 700,
              color: "#fff", lineHeight: 1.1, marginBottom: 14
            }}>
              Ready to <span style={{ color: "#F5C800" }}>Ride?</span>
            </h2>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,.55)", lineHeight: 1.8, maxWidth: 380, margin: "0 auto 24px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
              Call or WhatsApp Pravin for instant booking no apps, no wait, no hassle.
            </p>

            <div style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: "clamp(28px,5vw,52px)", fontWeight: 700, color: "#fff",
              marginBottom: 6
            }}>+91 8007909460</div>

            <div style={{ fontSize: 13, color: "rgba(255,255,255,.35)", marginBottom: 32, fontWeight: 500, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
              Pravin · Prime Route Taxi · Goa · 24/7
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 28 }}>
              <a href={wa(GM)} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "#15803D", color: "#fff",
                  padding: "16px 30px", borderRadius: 12, fontWeight: 600, fontSize: 14,
                  textDecoration: "none", boxShadow: "0 8px 24px rgba(21,128,61,.35)",
                  transition: "all .25s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                }}>
                WhatsApp Now
              </a>
              <a href="tel:+918007909460"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 9,
                  background: "rgba(245,200,0,.16)", border: "1.5px solid rgba(0,0,0,.2)",
                  color: "#F5C800", padding: "16px 30px", borderRadius: 12, fontWeight: 600, fontSize: 14,
                  textDecoration: "none", transition: "all .25s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                }}>
                Call Pravin
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
              {[["Goa, India"], ["24/7 Available"], ["Instant Confirmation"], ["English & Hindi"]].map(t => (
                <div key={t} style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 50, padding: "7px 16px", fontSize: 12, color: "rgba(255,255,255,.5)", fontWeight: 500,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
                }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: "#F5C800", display: "block" }} />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
function Footer() {
  return (
    <footer style={{ background: "#111", padding: "52px 0 24px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="wrap">
        <div className="foot-grid" style={{ marginBottom: 36 }}>
          <div>
            <div className="footer-brand" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                <img
                  src="/logo.png"
                  alt="Prime Taxi Logo"
                  style={{
                    width: "108px",
                    height: "108px",
                    objectFit: "contain",
                    marginBottom: "-10px"
                  }}
                />
              </div>
              <div>
                <div className="footer-brand-title" style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: "#fff", marginLeft: "-10px" }}>Prime Route Taxi</div>
                <div lassName="footer-brand-sub" style={{ fontSize: 9, color: "#F5C800", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", marginRight: "-10px" }}>Goa, India</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.35)", lineHeight: 1.75, maxWidth: 240, marginBottom: 16, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
              Goa's most trusted taxi service professional, punctual & always available.
            </p>
            <a href={wa(GM)} target="_blank" rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                background: "#15803D", color: "#fff", padding: "10px 20px", borderRadius: 50,
                fontSize: 13, fontWeight: 600, textDecoration: "none",
                boxShadow: "0 4px 16px rgba(21,128,61,.3)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
              }}>WhatsApp Us</a>
          </div>

          <div>
            <div className="footer-heading" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(55, 54, 54, 0.3)", marginBottom: 16, letterSpacing: "2px", textTransform: "uppercase" }}>
              Services
            </div>
            {SERVICES.map(s => (
              <a key={s.name} href={wa(`Hi Pravin! I'm interested in ${s.name}. Please share details.`)}
                target="_blank" rel="noreferrer"
                style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,.4)", marginBottom: 9, textDecoration: "none", transition: "color .2s", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
                {s.name}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.3)", marginBottom: 16, letterSpacing: "2px", textTransform: "uppercase" }}>
              Quick Links
            </div>
            {[["#services", "Our Services"], ["#cars", "Fleet & Pricing"], ["#estimator", "Fare Estimator"], ["#reviews", "Reviews"], ["#contact", "Contact"]].map(([href, l]) => (
              <a key={l} href={href}
                style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,.4)", marginBottom: 9, textDecoration: "none", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
                {l}
              </a>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.3)", marginBottom: 16, letterSpacing: "2px", textTransform: "uppercase" }}>
              Contact
            </div>
            <div className="footer-contact" style={{ fontSize: 16, color: "#fff", fontWeight: 700, marginBottom: 4, fontFamily: "'Playfair Display',serif" }}>+91 8007909460</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)", marginBottom: 12, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>Pravin · 24/7</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)", marginBottom: 8, fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>Goa, India</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,.3)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>WhatsApp preferred</div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 20,
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
        }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.2)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>© 2026 Prime Route Taxi · All rights reserved</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.2)", fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
            Crafted by{" "}
            <a href="https://crelante.com" target="_blank" rel="noreferrer"
              style={{ color: "#F5C800", textDecoration: "none", fontWeight: 600 }}>Crelante</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════
   WHATSAPP FLOAT
═══════════════════════════════════════ */
function WAFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return show ? (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 600, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
      <a href="tel:+918007909460"
        style={{
          width: 46, height: 46, borderRadius: "50%", background: "#111",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,.2)",
          animation: "fadeIn .4s .1s both", transition: "transform .22s"
        }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.27 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.54a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      </a>
      <a href={wa(GM)} target="_blank" rel="noreferrer" className="wa-fab"
        style={{
          width: 58, height: 58, borderRadius: "50%", background: GRN,
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 10px 28px rgba(21,128,61,.5)",
          animation: "waPulse 2.5s infinite,fadeIn .4s both", transition: "transform .22s"
        }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
      </a>
    </div>
  ) : null;
}

/* ═══════════════════════════════════════
   ROOT APP
═══════════════════════════════════════ */
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (!document.getElementById("prt-css")) {
      const s = document.createElement("style");
      s.id = "prt-css";
      s.textContent = CSS;
      document.head.appendChild(s);
    }
    const alreadyVisited = sessionStorage.getItem("primeRouteVisited");
    setShowLoader(!alreadyVisited);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [isReady]);

  useEffect(() => {
    if (!isReady || !showLoader) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("primeRouteVisited", "true");
      setShowLoader(false);
    }, 2600);
    return () => clearTimeout(t);
  }, [isReady, showLoader]);

  if (!isReady) return null;

  return (
    <>
      {showLoader && <FirstVisitLoader visible={showLoader} />}
      <Navbar />
      <Hero />
      <Services />
      <Fleet />

      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
      <WAFloat />
    </>
  );
}