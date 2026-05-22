import React, { useState } from "react";

const FAQ_DATA = [
  {
    q: "How do I book a taxi in Goa with Prime Route Taxi?",
    a: "Booking is instant and easy — just tap 'Book on WhatsApp' or call +91 8007909460. Share your pickup location, destination, date, and preferred vehicle. Pravin confirms your booking within minutes. No app downloads required.",
  },
  {
    q: "What are the taxi fares from Goa Airport (Dabolim) to popular destinations?",
    a: "Fares depend on your destination, vehicle choice, and trip type. To get an accurate quote tailored to your route, simply reach out on WhatsApp or give us a call — Pravin will share the fare within minutes.",
  },
  {
    q: "Do you offer Mopa Airport taxi service in Goa?",
    a: "Yes! We provide dedicated taxi service from Mopa International Airport (GOX) to all North Goa destinations including Calangute, Baga, Anjuna, Vagator, and Panaji. Pre-book at least 4 hours in advance for guaranteed availability.",
  },
  {
    q: "Is your cab service available 24/7 in Goa?",
    a: "Absolutely. Prime Route Taxi operates round the clock — 365 days a year. Whether you need an early-morning airport pickup or a late-night ride back from a Goa beach party, we're always available. WhatsApp is the fastest way to reach us.",
  },
  {
    q: "Which vehicles are available for taxi service in Goa?",
    a: "We operate three well-maintained, fully air-conditioned vehicles: Toyota Innova Crysta (7 seats, ideal for families and groups), Maruti Swift Dzire (4 seats, best for airport transfers), and Toyota Etios (4 seats, budget-friendly option). All cabs are GPS-tracked.",
  },
  {
    q: "Do you provide sightseeing cab packages in Goa?",
    a: "Yes — our full-day sightseeing packages cover the best of North Goa (Calangute, Baga, Anjuna, Fort Aguada, Vagator) and South Goa (Colva, Palolem, Old Goa Churches, Dudhsagar Falls). Custom routes are available on request. WhatsApp or call us to get a personalised quote for your itinerary.",
  },
  {
    q: "Can I book an outstation cab from Goa to Mumbai or Pune?",
    a: "Yes, we offer comfortable outstation trips from Goa to Mumbai, Pune, and other cities. The Innova Crysta is recommended for long-distance comfort. Toll and parking charges are extra. Contact us on WhatsApp or call for the exact fare for your route.",
  },
  {
    q: "Are your drivers verified and professional?",
    a: "All Prime Route Taxi drivers are police-verified, hold a valid commercial vehicle license, and are trained in safe, courteous service. Your safety is our top priority on every ride across Goa.",
  },
  {
    q: "Is there a waiting charge if my flight is delayed?",
    a: "We track your incoming flight in real time. If your flight is delayed, we wait at no extra charge for up to 60 minutes beyond your scheduled arrival. Beyond that, a minimal waiting fee of ₹100 per 30 minutes applies.",
  },
  {
    q: "What is the cancellation policy for Goa cab bookings?",
    a: "Cancellations made more than 4 hours before the scheduled pickup are free of charge. Cancellations within 4 hours may attract a 20% fee. No-shows are charged in full. We recommend cancelling early on WhatsApp to avoid fees.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [search, setSearch] = useState("");

  const filtered = FAQ_DATA.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="faq"
      style={{
        background: "#F9F9F7",
        padding: "80px 0 100px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        .faq-item { border: 1px solid #E8E8E6; border-radius: 14px; background: #fff; margin-bottom: 10px; overflow: hidden; transition: box-shadow .25s, border-color .25s; }
        .faq-item:hover { border-color: #DCDCDA; box-shadow: 0 4px 20px rgba(0,0,0,.07); }
        .faq-item.faq-open { border-color: #E8E3C8; box-shadow: 0 4px 24px rgba(245,200,0,.1); }
        .faq-btn { width: 100%; background: none; border: none; cursor: pointer; padding: 20px 22px; display: flex; align-items: center; justify-content: space-between; gap: 16px; text-align: left; }
        .faq-q { font-size: 14.5px; font-weight: 600; color: #1A1A1A; line-height: 1.45; }
        .faq-icon { width: 28px; height: 28px; border-radius: 50%; border: 1.5px solid #E5E5E5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background .2s, border-color .2s, transform .25s; }
        .faq-open .faq-icon { background: #1A1A1A; border-color: #1A1A1A; transform: rotate(45deg); }
        .faq-body { overflow: hidden; transition: max-height .35s cubic-bezier(.22,1,.36,1), opacity .3s; }
        .faq-a { padding: 0 22px 20px; font-size: 14px; color: #666; line-height: 1.8; }
        .faq-search { width: 100%; padding: 13px 16px 13px 42px; border: 1.5px solid #E5E5E5; border-radius: 10px; font-size: 14px; color: #1A1A1A; outline: none; font-family: inherit; background: #fff; transition: border-color .2s, box-shadow .2s; }
        .faq-search:focus { border-color: #F5C800; box-shadow: 0 0 0 3px rgba(245,200,0,.14); }
        .faq-search::placeholder { color: #BDBDBD; }
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(245,200,0,.1)",
              border: "1px solid rgba(245,200,0,.3)",
              borderRadius: 50,
              padding: "6px 16px",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#7A6800",
              }}
            >
              Got Questions?
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.1,
              marginBottom: 14,
            }}
          >
            Frequently Asked Questions
          </h2>
          <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7 }}>
            Everything you need to know about booking a taxi in Goa.
          </p>
        </div>

        {/* Search */}
        <div style={{ position: "relative", marginBottom: 28 }}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="faq-search"
            type="text"
            placeholder="Search a question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* FAQ Items */}
        <div>
          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "40px 0",
                color: "#999",
                fontSize: 14,
              }}
            >
              No matching questions found. Try a different search term.
            </div>
          )}
          {filtered.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? " faq-open" : ""}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q">{item.q}</span>
                  <span className="faq-icon">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? "#fff" : "#999"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-body"
                  style={{
                    maxHeight: isOpen ? 400 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="faq-a">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: 44,
            paddingTop: 36,
            borderTop: "1px solid #E8E8E6",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "#999",
              marginBottom: 16,
              lineHeight: 1.6,
            }}
          >
            Still have questions? We're happy to help.
          </p>
          <a
            href="https://wa.me/918007909460?text=Hi%20Pravin!%20I%20have%20a%20question%20about%20your%20taxi%20service%20in%20Goa."
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#15803D",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 50,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(21,128,61,.28)",
              transition: "transform .2s",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}