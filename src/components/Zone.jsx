import React from "react";

const cities = [
  { name: "Lyon", center: true },
  { name: "Tignes" },
  { name: "Val Thorens" },
  { name: "Chambéry" },
  { name: "Clermont-Ferrand" },
  { name: "Annecy" },
  { name: "Bourg-en-Bresse" },
  { name: "Valence" },
  { name: "Grenoble" },
  { name: "Saint-Étienne" },
  { name: "Bron" },
];

export default function Zone() {
  return (
    <section
      id="zone"
      style={{
        background: "var(--noir-2)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BG decorative ring */}
      <div
        style={{
          position: "absolute",
          right: "-180px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid var(--bordure-r)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid var(--bordure-r)",
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* LEFT — text */}
        <div>
          <div className="section-label reveal">
            <span className="section-label__line" />
            <span className="section-label__text">Déploiement</span>
          </div>
          <h2 className="section-title reveal reveal-d1" style={{ marginBottom: "28px" }}>
            Notre zone<br /><em>d'intervention</em>
          </h2>
          <p
            className="reveal reveal-d2"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--gris-clair)",
              maxWidth: "420px",
              marginBottom: "48px",
            }}
          >
            Agents de sécurité, nous nous déplaçons dans un rayon de{" "}
            <span style={{ color: "var(--rouge)", fontWeight: 700 }}>50 km</span> autour de Lyon
            pour assurer votre protection, où que vous soyez.
          </p>
          <a href="#contact" className="btn-primary reveal reveal-d3">
            Nous contacter
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* RIGHT — city grid */}
        <div className="reveal reveal-d2">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
            }}
          >
            {/* Lyon — full width */}
            <div
              style={{
                gridColumn: "1 / -1",
                background: "var(--rouge)",
                padding: "20px 28px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3.5" fill="#fff" />
                <circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                Lyon — Centre de commandement
              </span>
            </div>

            {/* Other cities */}
            {cities.filter((c) => !c.center).map((city, i) => (
              <div
                key={city.name}
                style={{
                  background: "var(--noir-3)",
                  border: "1px solid var(--bordure-b)",
                  padding: "18px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "background 0.25s, border-color 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1f1f1f";
                  e.currentTarget.style.borderColor = "var(--bordure-r)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--noir-3)";
                  e.currentTarget.style.borderColor = "var(--bordure-b)";
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--rouge)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "13px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--blanc-casse)",
                  }}
                >
                  {city.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #zone > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}