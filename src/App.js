import React, { useState, useEffect } from "react";

/* ═══════════════════════════════════════
   GLOBAL CSS
═══════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  font-family:'Inter',sans-serif;
  background:#fff;
  color:#111;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
::-webkit-scrollbar{width:4px}
::-webkit-scrollbar-thumb{background:#FF8C00;border-radius:4px}

/* ── KEYFRAMES ── */
@keyframes fadeUp   {from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
@keyframes waPulse  {0%,100%{box-shadow:0 0 0 0 rgba(22,101,52,.55)}65%{box-shadow:0 0 0 16px rgba(22,101,52,0)}}
@keyframes marquee  {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes float    {0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

/* ── LOADER ── */
@keyframes loaderRoad {
  from { transform: translateX(0); }
  to   { transform: translateX(-120px); }
}
@keyframes loaderTaxiDrive {
  0%   { transform: translateX(-180px); }
  100% { transform: translateX(calc(100vw + 220px)); }
}
@keyframes loaderWheelSpin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes loaderFadeOut {
  from { opacity:1; visibility:visible; }
  to   { opacity:0; visibility:hidden; }
}
@keyframes shimmerText{
  0%{background-position:-200% 0}
  100%{background-position:200% 0}
}

/* ── CAR SCENE ANIMATIONS ── */
@keyframes roadStream{from{transform:translateX(0)}to{transform:translateX(-200px)}}
@keyframes carDriveIn{
  0%  {transform:translateX(120%) scaleX(1)}
  60% {transform:translateX(5%) scaleX(1)}
  70% {transform:translateX(5%) scaleX(1.01)}
  80% {transform:translateX(0%) scaleX(.99)}
  100%{transform:translateX(0%) scaleX(1)}
}
@keyframes carIdle{
  0%,100%{transform:translateY(0) rotate(0deg)}
  30%    {transform:translateY(-5px) rotate(-.3deg)}
  70%    {transform:translateY(-3px) rotate(.2deg)}
}
@keyframes wheelSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes dustPuff{
  0%  {opacity:.7;transform:scale(.4) translateY(0)}
  100%{opacity:0;transform:scale(2.2) translateY(-24px)}
}
@keyframes beamPulse{
  0%,100%{opacity:.55}
  50%    {opacity:.85}
}
@keyframes buildSlide{
  from{transform:translateX(80px);opacity:0}
  to  {transform:translateX(0);opacity:1}
}
@keyframes sway{
  0%,100%{transform-origin:bottom center;transform:rotate(-2deg)}
  50%    {transform-origin:bottom center;transform:rotate(2deg)}
}
@keyframes twinkle{
  0%,100%{opacity:.3}
  50%    {opacity:1}
}
@keyframes speedLine{
  from{transform:translateX(0);opacity:.6}
  to  {transform:translateX(-300px);opacity:0}
}
@keyframes textShimmer{
  0%  {background-position:-300px 0}
  100%{background-position:300px 0}
}
@keyframes sunRay{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes exhaust{
  0%  {opacity:.5;transform:translateX(-4px) scale(.5)}
  100%{opacity:0;transform:translateX(-28px) scale(1.8)}
}

/* ── SCROLL REVEAL ── */
.reveal{
  opacity:0;
  transform:translateY(28px);
  transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)
}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal-d1{transition-delay:.1s!important}
.reveal-d2{transition-delay:.2s!important}
.reveal-d3{transition-delay:.3s!important}
.reveal-d4{transition-delay:.4s!important}

/* ── HERO ENTRY ── */
.hero-tag  {animation:fadeUp .6s .05s cubic-bezier(.22,1,.36,1) both}
.hero-h1   {animation:fadeUp .7s .12s cubic-bezier(.22,1,.36,1) both}
.hero-p    {animation:fadeUp .7s .24s cubic-bezier(.22,1,.36,1) both}
.hero-btns {animation:fadeUp .7s .36s cubic-bezier(.22,1,.36,1) both}
.hero-stats{animation:fadeUp .7s .48s cubic-bezier(.22,1,.36,1) both}

/* ── HOVER ── */
.svc-card:hover{
  transform:translateY(-6px)!important;
  border-color:#FF8C00!important;
  box-shadow:0 18px 40px rgba(255,140,0,.12)!important
}
.car-card:hover{
  transform:translateY(-8px)!important;
  box-shadow:0 28px 64px rgba(0,0,0,.12)!important
}
.why-card:hover{
  transform:translateY(-5px)!important;
  background:#1A1A1A!important;
  border-color:#FF8C00!important
}
.book-btn:hover{
  background:#E07800!important;
  transform:translateY(-2px)!important;
  box-shadow:0 8px 24px rgba(255,140,0,.38)!important
}
.grn-btn:hover {
  background:#14532D!important;
  transform:translateY(-2px)!important;
  box-shadow:0 8px 28px rgba(20,83,45,.45)!important
}
.blk-btn:hover {
  background:#111!important;
  color:#fff!important
}
.nav-lnk:hover {color:#FF8C00!important}
.wa-fab:hover  {transform:scale(1.1)!important}

/* ── LAYOUT ── */
.wrap{width:100%;max-width:1160px;margin:0 auto;padding:0 20px}
.sec {padding:68px 0}
.stag{
  font-family:'Outfit',sans-serif;
  font-size:11px;
  font-weight:700;
  letter-spacing:3px;
  text-transform:uppercase;
  color:#FF8C00;
  margin-bottom:10px
}
.sh2 {
  font-family:'Outfit',sans-serif;
  font-size:clamp(26px,6vw,46px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-.5px;
  color:#111
}
.sp  {font-size:15px;color:#777;line-height:1.75;margin-top:10px}

/* ── MOBILE ── */
.hero-layout{display:flex;flex-direction:column;gap:0;padding-top:20px;padding-bottom:32px}
.hero-text{text-align:center;order:1}
.hero-visual{order:2;margin:0 auto;width:100%;max-width:420px}
.btn-row{display:flex;flex-direction:column;gap:10px;width:100%;margin-bottom:28px}
.btn-row a{justify-content:center!important;width:100%}
.stat-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:0;
  border:1.5px solid #F0F0F0;
  border-radius:18px;
  overflow:hidden;
  background:#fff;
  box-shadow:0 12px 30px rgba(0,0,0,.04)
}
.stat-cell{
  padding:16px 12px;
  text-align:center;
  border-right:1.5px solid #F0F0F0;
  border-bottom:1.5px solid #F0F0F0
}
.stat-cell:nth-child(2n){border-right:none}
.stat-cell:nth-child(3),.stat-cell:nth-child(4){border-bottom:none}
.svc-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:28px}
.svc-card{text-align:center;transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease}
.cars-grid{display:grid;grid-template-columns:1fr;gap:18px;margin-top:28px}
.car-card{transition:transform .3s ease,box-shadow .3s ease}
.why-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:32px}
.why-card{text-align:center;transition:transform .28s ease,background .28s ease,border-color .28s ease}
.foot-grid{display:grid;grid-template-columns:1fr;gap:28px}
.sec-head{text-align:center}
.tl-center{display:flex;justify-content:center}

/* ── TABLET ── */
@media(min-width:640px){
  .wrap{padding:0 32px}
  .svc-grid{grid-template-columns:1fr 1fr 1fr}
  .cars-grid{grid-template-columns:1fr 1fr}
  .stat-grid{grid-template-columns:repeat(4,1fr)}
  .stat-cell{border-bottom:none}
  .stat-cell:nth-child(3){border-right:1.5px solid #F0F0F0}
  .stat-cell:last-child{border-right:none}
}

/* ── DESKTOP ── */
@media(min-width:960px){
  .wrap{padding:0 40px}
  .sec{padding:92px 0}
  .hero-layout{flex-direction:row;align-items:center;gap:42px;padding-top:32px;padding-bottom:56px}
  .hero-text{text-align:left;order:1;flex:1}
  .hero-visual{order:2;flex:1;max-width:none;margin:0}
  .btn-row{flex-direction:row;width:auto}
  .btn-row a{width:auto}
  .svc-grid{grid-template-columns:repeat(5,1fr)}
  .svc-card{text-align:left}
  .cars-grid{grid-template-columns:repeat(3,1fr)}
  .why-grid{grid-template-columns:repeat(4,1fr)}
  .why-card{text-align:left}
  .foot-grid{grid-template-columns:2fr 1fr 1fr}
  .sec-head{text-align:left}
  .tl-center{justify-content:flex-start}
  .stag,.sh2,.sp{text-align:left}
  nav .nav-area{display:flex!important}
}
`;

/* ── CONSTANTS ── */
const PH = "918007909460";
const wa = (m) => `https://wa.me/${PH}?text=${encodeURIComponent(m)}`;
const GM = "Hi Pravin 👋 I found Prime Route Taxi and would like to book a ride in Goa!";
const GRN = "#166534";

/* ── DATA ── */
const SERVICES = [
  { icon:"✈️", name:"Airport Pickup & Drop", desc:"Flight-tracked. Zero waiting." },
  { icon:"🚦", name:"City Rides",             desc:"Any corner of Goa, anytime." },
  { icon:"🕐", name:"Full Day Rental",        desc:"Your schedule, your pace." },
  { icon:"🏖️", name:"Sightseeing Tours",      desc:"Best of North & South Goa." },
  { icon:"🛣️", name:"Outstation Trips",       desc:"Mumbai, Pune & beyond." },
];

const CARS = [
  {
    name:"Toyota Innova Crysta",
    type:"Premium SUV",
    seats:7,
    price:"₹2,500",
    tag:"★ Most Popular",
    tagBg:"#FF8C00",
    bg:"#FFF8F0",
    accent:"#FF8C00",
    desc:"Spacious & powerful. Ideal for families, group tours and VIP airport runs."
  },
  {
    name:"Maruti Swift Dzire",
    type:"Executive Sedan",
    seats:4,
    price:"₹1,400",
    tag:"Best for Airports",
    tagBg:"#1E40AF",
    bg:"#F0F6FF",
    accent:"#1E40AF",
    desc:"Smooth and fuel-efficient. Perfect for quick city rides and transfers."
  },
  {
    name:"Toyota Etios",
    type:"Classic Sedan",
    seats:4,
    price:"₹1,200",
    tag:"Budget Pick",
    tagBg:"#15803D",
    bg:"#F0FFF4",
    accent:"#15803D",
    desc:"Reliable, clean and great value for solo travellers and short trips."
  },
];

const STATS = [
  { n:"500+", l:"Happy Rides" },
  { n:"3",    l:"Premium Cars" },
  { n:"24/7", l:"Available" },
  { n:"5 ★",  l:"Top Rated" },
];

const WHY = [
  { icon:"🛡️", t:"Safe & Verified",  d:"Licensed, background-checked professional drivers." },
  { icon:"⏰", t:"Always Punctual",   d:"We track your flight — you never wait." },
  { icon:"💬", t:"24/7 WhatsApp",     d:"Instant reply from Pravin any time." },
  { icon:"💰", t:"No Hidden Costs",   d:"Transparent pricing — pay what's quoted." },
];

const TICKER = [
  "✈️ Airport Transfers",
  "🚕 City Rides",
  "🗺️ Sightseeing Tours",
  "🛣️ Outstation Trips",
  "⭐ 500+ Happy Riders",
  "📞 Available 24/7",
  "💬 WhatsApp Booking",
  "🏖️ Explore Goa"
];

/* ═══════════════ FIRST VISIT LOADER ═══════════════ */
function FirstVisitLoader({ visible }) {
  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background:
          "radial-gradient(circle at top, rgba(255,140,0,.12), transparent 28%), linear-gradient(180deg,#050B15 0%, #0C1730 55%, #101D3C 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* stars */}
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            borderRadius: "50%",
            background: "#fff",
            opacity: 0.7,
            top: `${8 + ((i * 13) % 35)}%`,
            left: `${(i * 7.4) % 95}%`,
            animation: `twinkle ${1.2 + (i % 5) * 0.5}s ease-in-out infinite`,
          }}
        />
      ))}

      <div style={{ textAlign: "center", padding: "0 20px", position: "relative", zIndex: 2 }}>
        <div
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontSize: 13,
            letterSpacing: 4,
            fontWeight: 700,
            color: "#FFB347",
            textTransform: "uppercase",
            marginBottom: 14,
          }}
        >
          Prime Route Taxi
        </div>

        <h2
          style={{
            fontFamily: "'Outfit',sans-serif",
            fontWeight: 900,
            fontSize: "clamp(32px, 7vw, 64px)",
            lineHeight: 1.04,
            letterSpacing: "-1.2px",
            color: "#fff",
            marginBottom: 14,
          }}
        >
          Your Goa Ride
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#FF8C00,#FFD18A,#FF8C00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% 100%",
              animation: "shimmerText 2.6s linear infinite",
            }}
          >
            is arriving...
          </span>
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,.72)",
            fontSize: 14,
            lineHeight: 1.8,
            maxWidth: 420,
            margin: "0 auto 34px",
          }}
        >
          Fast booking, verified drivers, smooth rides across Goa.
        </p>
      </div>

      {/* road */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 95,
          height: 120,
          background: "linear-gradient(180deg,#1A2235 0%, #101723 100%)",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "52%",
            height: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "200%",
              gap: 26,
              animation: "loaderRoad .45s linear infinite",
            }}
          >
            {[...Array(28)].map((_, i) => (
              <span
                key={i}
                style={{
                  width: 54,
                  height: 4,
                  borderRadius: 3,
                  background: "rgba(255,255,255,.42)",
                  display: "block",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* taxi */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 122,
          width: 180,
          height: 80,
          animation: "loaderTaxiDrive 2.4s linear forwards",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          {/* shadow */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 18,
              width: 140,
              height: 12,
              borderRadius: "50%",
              background: "rgba(0,0,0,.25)",
              filter: "blur(3px)",
            }}
          />
          {/* car body */}
          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              width: 136,
              height: 34,
              borderRadius: 12,
              background: "linear-gradient(180deg,#FFD768 0%,#FFB000 100%)",
              boxShadow: "0 8px 18px rgba(255,176,0,.28)",
            }}
          />
          {/* roof */}
          <div
            style={{
              position: "absolute",
              bottom: 46,
              left: 40,
              width: 74,
              height: 22,
              borderRadius: "16px 16px 8px 8px",
              background: "linear-gradient(180deg,#FFE49B 0%, #FFC53D 100%)",
            }}
          />
          {/* windows */}
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 48,
              width: 22,
              height: 12,
              borderRadius: 5,
              background: "rgba(60,110,180,.55)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 50,
              left: 75,
              width: 26,
              height: 12,
              borderRadius: 5,
              background: "rgba(60,110,180,.55)",
            }}
          />
          {/* checkers */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: 34,
                left: 30 + i * 13,
                width: 8,
                height: 8,
                background: i % 2 === 0 ? "#111" : "#fff",
                opacity: .75,
              }}
            />
          ))}
          {/* headlight */}
          <div
            style={{
              position: "absolute",
              bottom: 34,
              left: 149,
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#FFF2B0",
              boxShadow: "0 0 14px rgba(255,240,176,.9)",
            }}
          />
          {/* wheels */}
          {[42, 122].map((left, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: 8,
                left,
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#161616",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 5,
                  borderRadius: "50%",
                  background: "#39455C",
                  animation: "loaderWheelSpin .35s linear infinite",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 26,
          width: "100%",
          textAlign: "center",
          color: "rgba(255,255,255,.62)",
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 1.2,
        }}
      >
        Trusted rides across Goa
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   CINEMATIC CAR SCENE
═══════════════════════════════════════ */
function CarScene() {
  return (
    <div
      style={{
        position:"relative",
        width:"100%",
        borderRadius:24,
        overflow:"hidden",
        background:"linear-gradient(180deg,#0A1628 0%,#0F2040 55%,#1A3A60 100%)",
        boxShadow:"0 24px 80px rgba(0,0,0,.28), 0 4px 20px rgba(0,0,0,.12)",
        border:"1.5px solid rgba(255,255,255,.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(255,140,0,.16), transparent 28%), radial-gradient(circle at bottom right, rgba(255,255,255,.06), transparent 22%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <svg viewBox="0 0 560 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", display:"block", position:"relative", zIndex:2 }}>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#040D1A"/>
            <stop offset="100%" stopColor="#0F2240"/>
          </linearGradient>
          <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C2535"/>
            <stop offset="100%" stopColor="#141C28"/>
          </linearGradient>
          <linearGradient id="cbody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0F4FF"/>
            <stop offset="100%" stopColor="#D0D8F0"/>
          </linearGradient>
          <linearGradient id="croof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0E8F8"/>
            <stop offset="100%" stopColor="#B8C8E8"/>
          </linearGradient>
          <linearGradient id="cglass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7EC8F8" stopOpacity=".65"/>
            <stop offset="100%" stopColor="#4AA8E8" stopOpacity=".35"/>
          </linearGradient>
          <linearGradient id="hbeam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFE080" stopOpacity=".7"/>
            <stop offset="100%" stopColor="#FFE080" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="carGlow" cx="50%" cy="100%" r="50%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity=".18"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <radialGradient id="wglow">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity=".3"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity=".9"/>
            <stop offset="60%" stopColor="#FFF0A0" stopOpacity=".4"/>
            <stop offset="100%" stopColor="transparent"/>
          </radialGradient>
          <linearGradient id="winLit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE580"/>
            <stop offset="100%" stopColor="#FFB820"/>
          </linearGradient>
          <linearGradient id="rstripe" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent"/>
            <stop offset="20%" stopColor="rgba(255,255,255,.45)"/>
            <stop offset="80%" stopColor="rgba(255,255,255,.45)"/>
            <stop offset="100%" stopColor="transparent"/>
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="softShadow">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(0,0,0,.35)"/>
          </filter>
          <clipPath id="sceneClip">
            <rect width="560" height="280"/>
          </clipPath>
        </defs>

        <g clipPath="url(#sceneClip)">
          <rect width="560" height="280" fill="url(#sky)"/>

          {[
            [30,18,2.2],[80,10,1.5],[140,22,1.8],[200,8,2],[260,16,1.6],
            [320,10,2.2],[390,20,1.5],[450,12,1.8],[510,18,2],[50,40,1.4],
            [160,35,1.7],[300,38,1.3],[430,32,2],[520,40,1.6],[100,55,1.4],
            [240,50,1.8],[370,48,1.5],[490,52,1.9],[70,65,1.3],[200,68,1.6],
          ].map(([x,y,r],i)=>(
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill="white"
              style={{ animation:`twinkle ${1.8+i*.3}s ${i*.2}s ease-in-out infinite` }}
            />
          ))}

          <circle cx="480" cy="34" r="28" fill="url(#moonGlow)"/>
          <circle cx="480" cy="34" r="18" fill="#FFF5CC"/>
          <circle cx="480" cy="34" r="14" fill="#FFFADC"/>
          <circle cx="474" cy="30" r="3" fill="#F5E080" opacity=".6"/>
          <circle cx="484" cy="38" r="2" fill="#F5E080" opacity=".5"/>
          <circle cx="476" cy="40" r="1.5" fill="#F5E080" opacity=".4"/>
          <circle
            cx="480"
            cy="34"
            r="22"
            stroke="#FFF0A0"
            strokeWidth=".8"
            fill="none"
            opacity=".3"
            style={{ animation:"sunRay 30s linear infinite", transformOrigin:"480px 34px" }}
          />

          {[
            [10,100,28,80],[42,110,20,68],[66,95,32,83],[102,105,24,73],
            [130,108,18,70],[152,98,26,80],[182,106,22,72],[208,100,30,78],
            [242,104,20,74],[266,96,28,82],[298,108,24,70],[326,102,20,76],
            [350,98,32,80],[386,105,18,73],[408,100,26,78],[438,107,22,71],
            [464,103,20,75],[488,96,30,82],[518,104,18,74],[540,100,16,78],
          ].map(([x,y,w,h],i)=>(
            <rect key={i} x={x} y={y} width={w} height={h} rx="2"
              fill={`rgb(${14+i%4*3},${22+i%3*4},${38+i%5*4})`}/>
          ))}

          {[
            {x:20,y:75,w:38,h:103,color:"#0E1830",wins:[[26,82],[36,82],[26,96],[36,96],[26,110],[36,110]]},
            {x:64,y:68,w:44,h:110,color:"#0C1628",wins:[[70,76],[84,76],[70,92],[84,92],[70,108],[84,108],[70,124],[84,124]]},
            {x:118,y:80,w:36,h:98,color:"#101C34",wins:[[124,88],[134,88],[124,102],[134,102],[124,116]]},
            {x:160,y:64,w:50,h:114,color:"#0D1B30",wins:[[167,72],[181,72],[167,88],[181,88],[167,104],[181,104],[167,120],[181,120]]},
            {x:220,y:72,w:40,h:106,color:"#0F1D32",wins:[[226,80],[240,80],[226,96],[240,96],[226,112],[240,112]]},
            {x:470,y:70,w:42,h:108,color:"#0C1628",wins:[[476,78],[490,78],[476,94],[490,94],[476,110],[490,110]]},
            {x:516,y:78,w:38,h:100,color:"#0E1A30",wins:[[522,86],[532,86],[522,100],[532,100],[522,114]]},
          ].map((b,bi)=>(
            <g key={bi} style={{ animation:`buildSlide .8s ${.3+bi*.08}s cubic-bezier(.22,1,.36,1) both` }}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3" fill={b.color}/>
              <line x1={b.x+b.w/2} y1={b.y} x2={b.x+b.w/2} y2={b.y-8} stroke="#1E3050" strokeWidth="1.5"/>
              <circle cx={b.x+b.w/2} cy={b.y-9} r="2" fill="#FF3333" opacity=".8"
                style={{ animation:`twinkle 1.2s ${bi*.4}s ease-in-out infinite` }}/>
              {b.wins.map(([wx,wy],wi)=>(
                <rect key={wi} x={wx} y={wy} width="8" height="6" rx="1" fill="url(#winLit)" opacity=".75"/>
              ))}
            </g>
          ))}

          <g style={{ animation:"buildSlide .9s .5s cubic-bezier(.22,1,.36,1) both" }}>
            <rect x="290" y="80" width="16" height="98" rx="2" fill="#162038"/>
            <rect x="287" y="76" width="22" height="10" rx="2" fill="#CC1A1A"/>
            <rect x="287" y="118" width="22" height="6" rx="2" fill="#CC1A1A"/>
            {[84,94,104].map(y=>(<rect key={y} x="292" y={y} width="8" height="7" rx="1" fill="#5AB8F8" opacity=".7"/>))}
            <circle cx="298" cy="80" r="4" fill="#FF4444" style={{ animation:`twinkle .8s ease-in-out infinite` }}/>
          </g>

          <g style={{ transformOrigin:"340px 178px", animation:"sway 3s ease-in-out infinite" }}>
            <path d="M340 178 C338 155 334 132 330 108" stroke="#3D2410" strokeWidth="5" strokeLinecap="round"/>
            <path d="M330 108 C330 108 310 94 302 78" stroke="#2D1A0C" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M330 108 C330 108 350 90 358 74" stroke="#2D1A0C" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M330 108 C330 108 308 108 296 108" stroke="#2D1A0C" strokeWidth="3.5" strokeLinecap="round"/>
            <ellipse cx="302" cy="80" rx="14" ry="7" fill="#1A6B26" transform="rotate(-30 302 80)"/>
            <ellipse cx="358" cy="76" rx="14" ry="7" fill="#1F8030" transform="rotate(25 358 76)"/>
            <ellipse cx="296" cy="107" rx="13" ry="6" fill="#228B2A" transform="rotate(-5 296 107)"/>
            <ellipse cx="330" cy="96" rx="16" ry="6" fill="#2A9E34" transform="rotate(-88 330 96)"/>
            <circle cx="332" cy="112" r="4" fill="#D4872A" opacity=".8"/>
          </g>

          <g style={{ transformOrigin:"520px 178px", animation:"sway 3.8s .5s ease-in-out infinite" }}>
            <path d="M520 178 C522 158 526 138 528 116" stroke="#3D2410" strokeWidth="4" strokeLinecap="round"/>
            <path d="M528 116 C528 116 546 102 552 88" stroke="#2D1A0C" strokeWidth="3" strokeLinecap="round"/>
            <path d="M528 116 C528 116 510 100 504 86" stroke="#2D1A0C" strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="551" cy="90" rx="12" ry="6" fill="#1A6B26" transform="rotate(20 551 90)"/>
            <ellipse cx="504" cy="88" rx="12" ry="6" fill="#228B2A" transform="rotate(-25 504 88)"/>
          </g>

          <rect x="0" y="178" width="560" height="102" fill="url(#road)"/>
          <line x1="0" y1="178" x2="560" y2="178" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
          <line x1="0" y1="255" x2="560" y2="255" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
          <g style={{ animation:"roadStream .5s linear infinite" }}>
            {[0,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750].map(x=>(
              <rect key={x} x={x} y="213" width="32" height="4" rx="2" fill="rgba(255,255,255,.35)"/>
            ))}
          </g>
          {[30,110,190,270,350,430,510].map(x=>(
            <circle key={x} cx={x} cy="177" r="3" fill="#FF8C00" opacity=".7"/>
          ))}

          <g style={{ animation:"carDriveIn 1.4s cubic-bezier(.22,1,.36,1) both" }}>
            <ellipse cx="235" cy="218" rx="110" ry="18" fill="url(#carGlow)"/>
            <g style={{ animation:"beamPulse 1.8s ease-in-out infinite" }}>
              <path d="M390 170 L560 148 L560 196 L390 183Z" fill="url(#hbeam)" opacity=".5"/>
              <path d="M390 174 L520 160 L520 190 L390 179Z" fill="url(#hbeam)" opacity=".35"/>
            </g>

            {[158,164,170,176].map((y,i)=>(
              <line key={i} x1="50" y1={y} x2="180" y2={y}
                stroke="rgba(255,255,255,.18)" strokeWidth="1"
                style={{ animation:`speedLine .4s ${i*.06}s ease-out both` }}/>
            ))}

            <g filter="url(#softShadow)">
              <rect x="60" y="158" width="330" height="68" rx="14" fill="url(#cbody)"/>
            </g>

            <path d="M118 158 C132 118 165 102 235 100 C305 102 338 118 352 158Z" fill="url(#croof)"/>
            <path d="M130 158 C142 124 168 108 235 106 C302 108 328 124 340 158Z"
              fill="url(#cglass)" stroke="#80BEE0" strokeWidth="1.2"/>
            <line x1="235" y1="107" x2="235" y2="158" stroke="#80BEE0" strokeWidth="1.5"/>
            <rect x="66" y="164" width="46" height="34" rx="7" fill="url(#cglass)" stroke="#80BEE0" strokeWidth="1"/>
            {[120,235,350].map((x,i)=>(
              <line key={i} x1={x} y1="158" x2={x} y2="222" stroke="rgba(0,0,0,.07)" strokeWidth="1.3"/>
            ))}
            {[148,255].map((x,i)=>(
              <rect key={i} x={x} y="190" width="22" height="5" rx="2.5" fill="#A8BCDA"/>
            ))}
            <rect x="60" y="198" width="330" height="5" rx="2.5" fill="url(#rstripe)"/>
            <rect x="380" y="178" width="12" height="32" rx="4" fill="#C8D4EC"/>
            <rect x="374" y="182" width="18" height="24" rx="5" fill="#D4DEEE"/>
            {[0,7,14].map(y=>(
              <rect key={y} x="376" y={184+y} width="14" height="4" rx="2" fill="#B8C8DC"/>
            ))}

            <ellipse cx="390" cy="172" rx="11" ry="7" fill="#FF8C00" opacity=".95"
              style={{ filter:"drop-shadow(0 0 6px #FF8C00)" }}/>
            <ellipse cx="390" cy="172" rx="5.5" ry="3.5" fill="#FFD060"/>
            <ellipse cx="390" cy="185" rx="8" ry="5" fill="#FFD060" opacity=".7"/>
            <ellipse cx="390" cy="185" rx="4" ry="2.5" fill="#FFEA90"/>
            <rect x="58" y="166" width="8" height="22" rx="3.5" fill="#FF2222" opacity=".9"/>

            <circle cx="318" cy="186" r="8" fill="#FF8C00"/>
            <text x="314.5" y="190" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="sans-serif">T</text>

            {[116, 344].map((cx,wi)=>(
              <g key={wi}>
                <circle cx={cx} cy="222" r="28" fill="#111C2E"/>
                <circle cx={cx} cy="222" r="28" fill="url(#wglow)"/>
                <g style={{ animation:`wheelSpin .3s linear infinite`, transformOrigin:`${cx}px 222px` }}>
                  <circle cx={cx} cy="222" r="19" fill="#1E2C44"/>
                  {[0,51.4,102.9,154.3,205.7,257.1,308.6].map(a=>(
                    <line key={a}
                      x1={cx+Math.cos(a*Math.PI/180)*8} y1={222+Math.sin(a*Math.PI/180)*8}
                      x2={cx+Math.cos(a*Math.PI/180)*17} y2={222+Math.sin(a*Math.PI/180)*17}
                      stroke="#FF8C00" strokeWidth="3" strokeLinecap="round"/>
                  ))}
                </g>
                <circle cx={cx} cy="222" r="7" fill="#FF8C00"/>
                <circle cx={cx} cy="222" r="3.5" fill="#FFC060"/>
              </g>
            ))}

            {[0,1,2].map(i=>(
              <ellipse key={i} cx="65" cy={212+i*3} rx="6" ry="4"
                fill="rgba(180,190,210,.45)"
                style={{ animation:`exhaust .7s ${i*.18}s ease-out infinite` }}/>
            ))}

            {[0,1,2].map(i=>(
              <circle key={i} cx={116+i*10} cy={238} r={5+i*3}
                fill="rgba(140,150,170,.3)"
                style={{ animation:`dustPuff .6s ${i*.12}s ease-out infinite` }}/>
            ))}
          </g>

          <text
            x="280"
            y="150"
            textAnchor="middle"
            fontFamily="'Outfit',sans-serif"
            fontSize="88"
            fontWeight="900"
            fill="rgba(255,255,255,.03)"
            stroke="rgba(255,255,255,.04)"
            strokeWidth="1"
          >
            GOA
          </text>

          <ellipse cx="235" cy="255" rx="140" ry="8" fill="rgba(255,140,0,.08)"/>
        </g>
      </svg>

      <div
        style={{
          display:"flex",
          gap:8,
          padding:"12px 16px",
          background:"rgba(255,255,255,.03)",
          borderTop:"1px solid rgba(255,255,255,.07)",
          flexWrap:"wrap",
          justifyContent:"center",
        }}
      >
        {[["❄️","Full AC"],["👥","7 Seats"],["🧳","Luggage"],["⭐","5-Star Rated"]].map(([ic,l])=>(
          <div key={l} style={{
            display:"inline-flex",
            alignItems:"center",
            gap:6,
            background:"rgba(255,255,255,.06)",
            border:"1px solid rgba(255,255,255,.1)",
            borderRadius:50,
            padding:"5px 13px",
            fontSize:11,
            color:"rgba(255,255,255,.75)",
            fontWeight:600,
          }}>
            <span>{ic}</span>{l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════ CAR IN FLEET ═══════════════ */
function InnovaStaticSVG() {
  return (
    <svg viewBox="0 0 400 170" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", display:"block" }}>
      <defs>
        <linearGradient id="fib" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#E4EAF6"/>
        </linearGradient>
        <linearGradient id="fir" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EEF2FC"/><stop offset="100%" stopColor="#CDD6EE"/>
        </linearGradient>
        <linearGradient id="fig" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ED4F8" stopOpacity=".7"/><stop offset="100%" stopColor="#5BBDE8" stopOpacity=".35"/>
        </linearGradient>
        <linearGradient id="fis" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent"/><stop offset="12%" stopColor="#FF8C00"/>
          <stop offset="88%" stopColor="#FF8C00"/><stop offset="100%" stopColor="transparent"/>
        </linearGradient>
        <filter id="fcs"><feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="rgba(0,0,0,.1)"/></filter>
        <radialGradient id="ftg"><stop offset="0%" stopColor="#FF8C00" stopOpacity=".2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
      </defs>
      <ellipse cx="200" cy="160" rx="145" ry="9" fill="rgba(0,0,0,.06)"/>
      <g filter="url(#fcs)"><rect x="16" y="76" width="368" height="74" rx="15" fill="url(#fib)"/></g>
      <path d="M88 76 C102 42 136 26 200 24 C264 26 298 42 312 76Z" fill="url(#fir)"/>
      <path d="M100 76 C112 46 138 32 200 30 C262 32 288 46 300 76Z" fill="url(#fig)" stroke="#90C5E5" strokeWidth="1.3"/>
      <line x1="200" y1="31" x2="200" y2="76" stroke="#90C5E5" strokeWidth="1.6"/>
      <rect x="22" y="83" width="58" height="36" rx="8" fill="url(#fig)" stroke="#90C5E5" strokeWidth="1.1"/>
      {[106,200,294].map((x,i)=>(
        <line key={i} x1={x} y1="76" x2={x} y2="146" stroke="rgba(0,0,0,.07)" strokeWidth="1.3"/>
      ))}
      {[126,217].map((x,i)=>(
        <rect key={i} x={x} y="110" width="22" height="5" rx="2.5" fill="#B0C0DA"/>
      ))}
      <rect x="16" y="122" width="368" height="5" rx="2.5" fill="url(#fis)"/>
      {[84,316].map((cx,i)=>(
        <g key={i}>
          <circle cx={cx} cy="143" r="24" fill="#1A2238"/>
          <circle cx={cx} cy="143" r="24" fill="url(#ftg)"/>
          <circle cx={cx} cy="143" r="16" fill="#243050"/>
          {[0,51.4,102.9,154.3,205.7,257.1,308.6].map(a=>(
            <line key={a}
              x1={cx+Math.cos(a*Math.PI/180)*7} y1={143+Math.sin(a*Math.PI/180)*7}
              x2={cx+Math.cos(a*Math.PI/180)*14} y2={143+Math.sin(a*Math.PI/180)*14}
              stroke="#FF8C00" strokeWidth="2.5" strokeLinecap="round"/>
          ))}
          <circle cx={cx} cy="143" r="6" fill="#FF8C00"/>
          <circle cx={cx} cy="143" r="3" fill="#FFC060"/>
        </g>
      ))}
      <rect x="372" y="106" width="12" height="24" rx="4" fill="#C8D4EC"/>
      {[0,7,14].map(y=>(<rect key={y} x="374" y={108+y} width="8" height="4" rx="2" fill="#B8C8DC"/>))}
      <ellipse cx="382" cy="92" rx="11" ry="7" fill="#FF8C00" opacity=".9"/>
      <ellipse cx="382" cy="92" rx="5.5" ry="3.5" fill="#FFC060"/>
      <rect x="14" y="84" width="8" height="22" rx="3.5" fill="#FF2222" opacity=".85"/>
      <circle cx="330" cy="110" r="8" fill="#FF8C00"/>
      <text x="326.5" y="114" fontSize="8" fill="#fff" fontWeight="bold" fontFamily="sans-serif">T</text>
    </svg>
  );
}

function SedanStaticSVG({ accent = "#1E40AF" }) {
  const id = accent.replace("#","");
  return (
    <svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", display:"block" }}>
      <defs>
        <linearGradient id={`ssb${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff"/><stop offset="100%" stopColor="#DDE4F2"/>
        </linearGradient>
        <linearGradient id={`ssg${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity=".4"/>
          <stop offset="100%" stopColor={accent} stopOpacity=".15"/>
        </linearGradient>
        <linearGradient id={`sss${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent"/><stop offset="18%" stopColor={accent}/>
          <stop offset="82%" stopColor={accent}/><stop offset="100%" stopColor="transparent"/>
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="133" rx="128" ry="8" fill="rgba(0,0,0,.05)"/>
      <rect x="10" y="64" width="300" height="62" rx="12" fill={`url(#ssb${id})`}/>
      <path d="M66 64 C78 36 104 22 160 20 C216 22 242 36 254 64Z" fill="#E8EEF8"/>
      <path d="M78 64 C88 42 110 30 160 28 C210 30 232 42 242 64Z" fill={`url(#ssg${id})`} stroke={`${accent}60`} strokeWidth="1.2"/>
      <line x1="160" y1="29" x2="160" y2="64" stroke={`${accent}50`} strokeWidth="1.4"/>
      <rect x="15" y="71" width="54" height="32" rx="6" fill={`url(#ssg${id})`} stroke={`${accent}50`} strokeWidth="1"/>
      <line x1="160" y1="64" x2="160" y2="122" stroke="rgba(0,0,0,.07)" strokeWidth="1.4"/>
      <rect x="10" y="98" width="300" height="4" rx="2" fill={`url(#sss${id})`} opacity=".5"/>
      {[68,252].map((cx,i)=>(
        <g key={i}>
          <circle cx={cx} cy="120" r="20" fill="#1A2238"/>
          <circle cx={cx} cy="120" r="13" fill="#243050"/>
          {[0,60,120,180,240,300].map(a=>(
            <line key={a}
              x1={cx+Math.cos(a*Math.PI/180)*5} y1={120+Math.sin(a*Math.PI/180)*5}
              x2={cx+Math.cos(a*Math.PI/180)*11} y2={120+Math.sin(a*Math.PI/180)*11}
              stroke={accent} strokeWidth="2.2" strokeLinecap="round"/>
          ))}
          <circle cx={cx} cy="120" r="4.5" fill={accent}/>
        </g>
      ))}
      <ellipse cx="309" cy="76" rx="8" ry="5.5" fill="#FF8C00" opacity=".9"/>
      <rect x="8" y="72" width="7" height="16" rx="3" fill="#FF2222" opacity=".85"/>
    </svg>
  );
}

/* ═══════════════ NAVBAR ═══════════════ */
function Navbar() {
  const [sc, setSc] = useState(false);

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <nav
      style={{
        position:"fixed",
        top:0,
        left:0,
        right:0,
        zIndex:500,
        background: sc ? "rgba(255,255,255,.98)" : "rgba(255,255,255,.88)",
        backdropFilter:"blur(20px)",
        borderBottom: sc ? "1px solid #F0F0F0" : "1px solid transparent",
        boxShadow: sc ? "0 2px 20px rgba(0,0,0,.07)" : "none",
        transition:"all .3s",
      }}
    >
      <div className="wrap" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div
            style={{
              width:40,
              height:40,
              borderRadius:12,
              background:"linear-gradient(180deg,#FFA726 0%, #FF8C00 100%)",
              display:"flex",
              alignItems:"center",
              justifyContent:"center",
              fontSize:19,
              boxShadow:"0 8px 18px rgba(255,140,0,.28)",
            }}
          >
            🚕
          </div>
          <div>
            <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, fontWeight:800, color:"#111", letterSpacing:"-.3px" }}>
              Prime Route Taxi
            </div>
            <div style={{ fontSize:9, color:"#AAA", letterSpacing:"2px", textTransform:"uppercase", fontWeight:600 }}>
              GOA
            </div>
          </div>
        </div>

        <div className="nav-area" style={{ display:"none", gap:32 }}>
          {[["services","Services"],["cars","Fleet"],["why","Why Us"],["contact","Contact"]].map(([id,l])=>(
            <span
              key={id}
              className="nav-lnk"
              onClick={()=>go(id)}
              style={{ fontSize:14, fontWeight:500, color:"#555", cursor:"pointer", transition:"color .2s" }}
            >
              {l}
            </span>
          ))}
        </div>

        <a
          href={wa(GM)}
          target="_blank"
          rel="noreferrer"
          style={{
            background:GRN,
            color:"#fff",
            padding:"10px 18px",
            borderRadius:50,
            fontWeight:700,
            fontSize:13,
            textDecoration:"none",
            display:"flex",
            alignItems:"center",
            gap:6,
            boxShadow:"0 6px 18px rgba(22,101,52,.28)",
            transition:"all .25s",
          }}
        >
          <span>💬</span><span>Book Now</span>
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════ HERO ═══════════════ */
function Hero() {
  return (
    <section
      style={{
        paddingTop:64,
        background:
          "radial-gradient(circle at top left, rgba(255,140,0,.08), transparent 18%), radial-gradient(circle at bottom right, rgba(22,101,52,.05), transparent 20%), #fff",
        overflow:"hidden",
        position:"relative",
      }}
    >
      <div style={{ height:3, background:"linear-gradient(90deg,#FF8C00,#FFB347,#FF8C00)" }} />

      <div
        style={{
          position:"absolute",
          top:-120,
          left:-60,
          width:260,
          height:260,
          borderRadius:"50%",
          background:"rgba(255,140,0,.06)",
          filter:"blur(10px)",
          pointerEvents:"none"
        }}
      />
      <div
        style={{
          position:"absolute",
          right:-80,
          top:120,
          width:220,
          height:220,
          borderRadius:"50%",
          background:"rgba(22,101,52,.05)",
          filter:"blur(8px)",
          pointerEvents:"none"
        }}
      />

      <div className="wrap">
        <div className="hero-layout">
          <div className="hero-text">
            <div className="hero-tag tl-center" style={{ marginBottom:18 }}>
              <div
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:8,
                  background:"#FFF3E0",
                  border:"1.5px solid #FFD0A0",
                  borderRadius:50,
                  padding:"6px 16px",
                  boxShadow:"0 8px 24px rgba(255,140,0,.08)"
                }}
              >
                <span
                  style={{
                    width:8,
                    height:8,
                    background:"#16A34A",
                    borderRadius:"50%",
                    boxShadow:"0 0 0 3px rgba(22,163,74,.25)",
                    display:"block"
                  }}
                />
                <span
                  style={{
                    fontFamily:"'Outfit',sans-serif",
                    fontSize:11,
                    fontWeight:700,
                    color:"#B45309",
                    letterSpacing:"1.2px",
                    textTransform:"uppercase"
                  }}
                >
                  Available Now · Goa
                </span>
              </div>
            </div>

            <h1
              className="hero-h1"
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:"clamp(36px,8vw,68px)",
                fontWeight:900,
                lineHeight:1.04,
                color:"#111",
                letterSpacing:"-1.5px",
                marginBottom:16,
              }}
            >
              Your Ride,
              <br />
              <span style={{ color:"#FF8C00" }}>Your Way</span>
              <br />
              <span style={{ fontSize:"clamp(26px,6vw,52px)" }}>Across Goa.</span>
            </h1>

            <p
              className="hero-p"
              style={{
                fontSize:15,
                color:"#666",
                lineHeight:1.8,
                marginBottom:28,
                maxWidth:420
              }}
            >
              Airport pickups · sightseeing tours · outstation trips — with professional, verified drivers you can trust.
            </p>

            <div className="hero-btns btn-row">
              <a
                href={wa(GM)}
                target="_blank"
                rel="noreferrer"
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:9,
                  background:GRN,
                  color:"#fff",
                  padding:"14px 24px",
                  borderRadius:14,
                  fontWeight:700,
                  fontSize:15,
                  textDecoration:"none",
                  boxShadow:`0 10px 28px rgba(22,101,52,.28)`,
                  transition:"all .25s",
                  fontFamily:"'Outfit',sans-serif",
                }}
              >
                <span style={{ fontSize:18 }}>💬</span> Book on WhatsApp
              </a>

              <a
                href="tel:+918007909460"
                className="blk-btn"
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:9,
                  background:"#fff",
                  color:"#111",
                  padding:"14px 24px",
                  borderRadius:14,
                  fontWeight:700,
                  fontSize:15,
                  textDecoration:"none",
                  border:"2px solid #111",
                  transition:"all .25s",
                  fontFamily:"'Outfit',sans-serif",
                }}
              >
                <span>📞</span> +91 80079 09460
              </a>
            </div>

            <div className="hero-stats stat-grid">
              {STATS.map((s,i)=>(
                <div key={i} className="stat-cell">
                  <div
                    style={{
                      fontFamily:"'Outfit',sans-serif",
                      fontSize:24,
                      fontWeight:900,
                      color:"#FF8C00",
                      lineHeight:1
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontSize:10,
                      color:"#AAA",
                      textTransform:"uppercase",
                      letterSpacing:"1px",
                      fontWeight:700,
                      marginTop:4
                    }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" style={{ paddingTop:16, paddingBottom:8 }}>
            <CarScene/>
          </div>
        </div>
      </div>

      <div style={{ borderTop:"1px solid #F0F0F0", background:"#FAFAFA", overflow:"hidden", padding:"11px 0" }}>
        <div style={{ display:"flex", animation:"marquee 24s linear infinite", width:"max-content" }}>
          {[...TICKER,...TICKER].map((t,i)=>(
            <span
              key={i}
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:12,
                fontWeight:600,
                color:"#555",
                padding:"0 22px",
                whiteSpace:"nowrap",
                display:"flex",
                alignItems:"center",
                gap:8,
              }}
            >
              {t}<span style={{ color:"#FF8C00", marginLeft:8 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ SERVICES ═══════════════ */
function Services() {
  return (
    <section id="services" className="sec" style={{ background:"#fff" }}>
      <div className="wrap">
        <div className="reveal sec-head" style={{ marginBottom:0 }}>
          <div className="stag">What We Offer</div>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:14 }}>
            <h2 className="sh2">Our Services</h2>
            <a
              href={wa(GM)}
              target="_blank"
              rel="noreferrer"
              style={{
                background:"#FF8C00",
                color:"#fff",
                padding:"10px 22px",
                borderRadius:50,
                fontSize:13,
                fontWeight:700,
                textDecoration:"none",
                boxShadow:"0 6px 18px rgba(255,140,0,.22)"
              }}
            >
              Book Now →
            </a>
          </div>
        </div>

        <div className="svc-grid">
          {SERVICES.map((sv,i)=>(
            <div
              key={i}
              className={`svc-card reveal reveal-d${Math.min(i+1,4)}`}
              style={{
                background:"linear-gradient(180deg,#fff 0%, #FFFDFC 100%)",
                border:"1.5px solid #F0F0F0",
                borderRadius:20,
                padding:"22px 16px",
                boxShadow:"0 4px 16px rgba(0,0,0,.04)",
              }}
            >
              <div
                style={{
                  width:50,
                  height:50,
                  borderRadius:14,
                  marginBottom:12,
                  background:"#FFF3E0",
                  border:"1.5px solid #FFD0A0",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:21,
                  marginLeft:"auto",
                  marginRight:"auto",
                  boxShadow:"0 8px 16px rgba(255,140,0,.08)"
                }}
              >
                {sv.icon}
              </div>
              <div
                style={{
                  fontFamily:"'Outfit',sans-serif",
                  fontSize:13,
                  fontWeight:700,
                  color:"#111",
                  marginBottom:5,
                  lineHeight:1.3
                }}
              >
                {sv.name}
              </div>
              <div style={{ fontSize:12, color:"#888", lineHeight:1.6 }}>{sv.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ FLEET ═══════════════ */
function Fleet() {
  const bm = (c) => `Hi Pravin! I'd like to book the ${c.name}. Please share availability & pricing.`;

  return (
    <section
      id="cars"
      className="sec"
      style={{
        background:"linear-gradient(180deg,#FAFAFA 0%, #F7F7F7 100%)",
        position:"relative",
        overflow:"hidden"
      }}
    >
      <div
        style={{
          position:"absolute",
          left:-80,
          top:40,
          width:220,
          height:220,
          borderRadius:"50%",
          background:"rgba(255,140,0,.05)",
          filter:"blur(10px)"
        }}
      />
      <div className="wrap">
        <div className="reveal sec-head" style={{ marginBottom:0 }}>
          <div className="stag">Our Fleet</div>
          <h2 className="sh2">Choose Your Ride</h2>
          <p className="sp" style={{ maxWidth:440, margin:"10px auto 0" }}>
            Spotlessly clean · Full AC · Trusted local drivers
          </p>
        </div>

        <div className="cars-grid">
          {CARS.map((car,i)=>(
            <div
              key={i}
              className={`car-card reveal reveal-d${Math.min(i+1,4)}`}
              style={{
                background:"#fff",
                borderRadius:24,
                overflow:"hidden",
                boxShadow:"0 10px 30px rgba(0,0,0,.06)",
                border: i===0 ? "2px solid #FF8C00" : "1.5px solid #E8E8E8",
                position:"relative",
              }}
            >
              <div
                style={{
                  background:car.bg,
                  height:178,
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  padding:"12px 16px",
                  position:"relative",
                  overflow:"hidden",
                }}
              >
                <div
                  style={{
                    position:"absolute",
                    inset:0,
                    backgroundImage:"radial-gradient(rgba(0,0,0,.03) 1px,transparent 1px)",
                    backgroundSize:"16px 16px"
                  }}
                />
                <div
                  style={{
                    position:"absolute",
                    width:160,
                    height:160,
                    borderRadius:"50%",
                    background:`${car.accent}14`,
                    filter:"blur(8px)",
                    top:16,
                    right:-18,
                  }}
                />
                <div
                  style={{
                    position:"absolute",
                    top:12,
                    left:14,
                    background:car.tagBg,
                    color:"#fff",
                    fontSize:10,
                    fontWeight:700,
                    padding:"4px 12px",
                    borderRadius:50,
                    letterSpacing:"1px",
                    textTransform:"uppercase",
                    boxShadow:"0 8px 18px rgba(0,0,0,.12)"
                  }}
                >
                  {car.tag}
                </div>
                <div style={{ animation:`float ${3.4+i*.5}s ease-in-out infinite`, width:"90%", position:"relative", zIndex:1 }}>
                  {i===0 ? <InnovaStaticSVG/> : <SedanStaticSVG accent={car.accent}/>}
                </div>
              </div>

              <div style={{ padding:"18px 20px 22px" }}>
                <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:17, fontWeight:800, color:"#111", marginBottom:2 }}>
                  {car.name}
                </div>
                <div
                  style={{
                    fontSize:11,
                    color:car.accent,
                    fontWeight:700,
                    letterSpacing:"1.8px",
                    textTransform:"uppercase",
                    marginBottom:12
                  }}
                >
                  {car.type}
                </div>

                <div style={{ display:"flex", gap:7, marginBottom:12, flexWrap:"wrap" }}>
                  {[["👥",`${car.seats} Seats`],["❄️","Full AC"],["🧳","Luggage"]].map(([ic,l])=>(
                    <span
                      key={l}
                      style={{
                        fontSize:11,
                        color:"#555",
                        background:"#F5F5F5",
                        borderRadius:50,
                        padding:"4px 10px",
                        fontWeight:600,
                        display:"flex",
                        alignItems:"center",
                        gap:4
                      }}
                    >
                      {ic} {l}
                    </span>
                  ))}
                </div>

                <p style={{ fontSize:13, color:"#888", lineHeight:1.68, marginBottom:16 }}>{car.desc}</p>

                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    paddingTop:14,
                    borderTop:"1px solid #F3F3F3"
                  }}
                >
                  <div>
                    <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:24, fontWeight:900, color:"#111" }}>
                      {car.price}
                    </span>
                    <span style={{ fontSize:12, color:"#AAA" }}>/day</span>
                  </div>

                  <a
                    href={wa(bm(car))}
                    target="_blank"
                    rel="noreferrer"
                    className="book-btn"
                    style={{
                      background:"#FF8C00",
                      color:"#fff",
                      padding:"10px 18px",
                      borderRadius:12,
                      fontWeight:700,
                      fontSize:13,
                      textDecoration:"none"
                    }}
                  >
                    Book →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ WHY US ═══════════════ */
function WhyUs() {
  return (
    <section id="why" className="sec" style={{ background:"#111" }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign:"center", marginBottom:44 }}>
          <div className="stag" style={{ color:"#FF8C00", textAlign:"center" }}>Why Choose Us</div>
          <h2 className="sh2" style={{ color:"#fff", textAlign:"center" }}>
            Hundreds of Happy
            <br />
            <span style={{ color:"#FF8C00" }}>Travellers Trust Us</span>
          </h2>
        </div>

        <div className="why-grid">
          {WHY.map((w,i)=>(
            <div
              key={i}
              className={`why-card reveal reveal-d${Math.min(i+1,4)}`}
              style={{
                background:"rgba(255,255,255,.04)",
                border:"1.5px solid rgba(255,255,255,.08)",
                borderRadius:22,
                padding:"26px 20px",
              }}
            >
              <div style={{ fontSize:34, marginBottom:12 }}>{w.icon}</div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, fontWeight:700, color:"#fff", marginBottom:7 }}>
                {w.t}
              </div>
              <div style={{ fontSize:13, color:"#8A8A8A", lineHeight:1.7 }}>{w.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ CONTACT ═══════════════ */
function Contact() {
  return (
    <section id="contact" className="sec" style={{ background:"#fff" }}>
      <div className="wrap">
        <div
          className="reveal"
          style={{
            background:"linear-gradient(135deg,#111,#1C1C1C)",
            borderRadius:26,
            padding:"clamp(32px,5vw,60px)",
            textAlign:"center",
            position:"relative",
            overflow:"hidden",
            boxShadow:"0 20px 60px rgba(0,0,0,.15)"
          }}
        >
          <div
            style={{
              position:"absolute",
              top:-70,
              right:-70,
              width:260,
              height:260,
              borderRadius:"50%",
              background:"rgba(255,140,0,.08)",
              pointerEvents:"none"
            }}
          />
          <div
            style={{
              position:"absolute",
              bottom:-60,
              left:-60,
              width:180,
              height:180,
              borderRadius:"50%",
              background:"rgba(22,101,52,.08)",
              pointerEvents:"none"
            }}
          />

          <div style={{ position:"relative", zIndex:1 }}>
            <div
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:11,
                fontWeight:700,
                letterSpacing:"3px",
                color:"#FF8C00",
                textTransform:"uppercase",
                marginBottom:10
              }}
            >
              Get In Touch
            </div>

            <h2
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:"clamp(26px,5vw,50px)",
                fontWeight:900,
                color:"#fff",
                letterSpacing:"-1px",
                lineHeight:1.1,
                marginBottom:12
              }}
            >
              Ready to <span style={{ color:"#FF8C00" }}>Ride?</span>
            </h2>

            <p
              style={{
                fontSize:14,
                color:"#9A9A9A",
                lineHeight:1.75,
                maxWidth:360,
                margin:"0 auto 24px"
              }}
            >
              Call or WhatsApp Pravin for instant booking — no apps, no wait.
            </p>

            <div
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:"clamp(26px,5vw,48px)",
                fontWeight:900,
                color:"#fff",
                letterSpacing:"-1px",
                marginBottom:4
              }}
            >
              +91 8007909460
            </div>

            <div style={{ fontSize:13, color:"#707070", marginBottom:28, fontWeight:500 }}>
              Pravin · Prime Route Taxi · Goa
            </div>

            <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
              <a
                href={wa(GM)}
                target="_blank"
                rel="noreferrer"
                className="grn-btn"
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:9,
                  background:GRN,
                  color:"#fff",
                  padding:"14px 28px",
                  borderRadius:14,
                  fontWeight:700,
                  fontSize:14,
                  textDecoration:"none",
                  boxShadow:"0 8px 26px rgba(22,101,52,.32)",
                  transition:"all .25s"
                }}
              >
                💬 WhatsApp Now
              </a>

              <a
                href="tel:+918007909460"
                style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:9,
                  background:"#FF8C00",
                  color:"#fff",
                  padding:"14px 28px",
                  borderRadius:14,
                  fontWeight:700,
                  fontSize:14,
                  textDecoration:"none",
                  boxShadow:"0 8px 24px rgba(255,140,0,.28)",
                  transition:"all .25s"
                }}
              >
                📞 Call Pravin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ FOOTER ═══════════════ */
function Footer() {
  return (
    <footer style={{ background:"#0A0A0A", padding:"44px 0 20px" }}>
      <div className="wrap">
        <div className="foot-grid" style={{ marginBottom:28 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div
                style={{
                  width:36,
                  height:36,
                  borderRadius:10,
                  background:"#FF8C00",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:16
                }}
              >
                🚕
              </div>
              <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:15, fontWeight:800, color:"#fff" }}>
                Prime Route Taxi
              </div>
            </div>

            <p style={{ fontSize:13, color:"#666", lineHeight:1.7, maxWidth:240 }}>
              Goa's most trusted taxi service — professional, punctual & always available.
            </p>

            <a
              href={wa(GM)}
              target="_blank"
              rel="noreferrer"
              style={{
                display:"inline-flex",
                alignItems:"center",
                gap:7,
                marginTop:14,
                background:GRN,
                color:"#fff",
                padding:"9px 18px",
                borderRadius:50,
                fontSize:13,
                fontWeight:700,
                textDecoration:"none"
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>

          <div>
            <div
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:12,
                fontWeight:700,
                color:"#fff",
                marginBottom:14,
                letterSpacing:"1px",
                textTransform:"uppercase"
              }}
            >
              Services
            </div>
            {SERVICES.map(s=>(
              <div key={s.name} style={{ fontSize:13, color:"#666", marginBottom:8 }}>{s.name}</div>
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:12,
                fontWeight:700,
                color:"#fff",
                marginBottom:14,
                letterSpacing:"1px",
                textTransform:"uppercase"
              }}
            >
              Contact
            </div>
            <div style={{ fontSize:14, color:"#fff", fontWeight:700, marginBottom:4 }}>+91 8007909460</div>
            <div style={{ fontSize:13, color:"#666", marginBottom:12 }}>Pravin · 24/7</div>
            <div style={{ fontSize:13, color:"#666" }}>📍 Goa, India</div>
          </div>
        </div>

        <div
          style={{
            borderTop:"1px solid #1A1A1A",
            paddingTop:18,
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            flexWrap:"wrap",
            gap:10
          }}
        >
          <div style={{ fontSize:12, color:"#444" }}>© 2026 Prime Route Taxi</div>
          <div style={{ fontSize:12, color:"#444" }}>
            Crafted by{" "}
            <a
              href="https://crelante.com"
              target="_blank"
              rel="noreferrer"
              style={{ color:"#FF8C00", textDecoration:"none", fontWeight:700 }}
            >
              Crelante
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════ WA FLOAT ═══════════════ */
function WAFloat() {
  return (
    <a
      href={wa(GM)}
      target="_blank"
      rel="noreferrer"
      className="wa-fab"
      style={{
        position:"fixed",
        bottom:20,
        right:20,
        zIndex:600,
        width:54,
        height:54,
        borderRadius:"50%",
        background:GRN,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:22,
        textDecoration:"none",
        boxShadow:`0 10px 30px rgba(22,101,52,.42)`,
        animation:"waPulse 2.5s infinite",
        transition:"transform .22s",
      }}
    >
      💬
    </a>
  );
}

/* ═══════════════ ROOT ═══════════════ */
export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const revealEls = document.querySelectorAll(".reveal");
  revealEls.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [isReady]); // run after component mounts

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
    if (!isReady || !showLoader) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("primeRouteVisited", "true");
      setShowLoader(false);
    }, 2600);

    return () => clearTimeout(timer);
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
      <Contact />
      <Footer />
      <WAFloat />
    </>
  );
}