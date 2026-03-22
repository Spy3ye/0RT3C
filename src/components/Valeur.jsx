import React from "react";

const valeurs = [
  {
    id: "01",
    titre: "Sérieux",
    desc: "Chaque mission est traitée avec le plus grand professionnalisme. Nos agents sont formés, certifiés et rigoureux dans l'exécution de leurs fonctions.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="18" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 34c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 10l3 3-8 8-4-4 2-2 2 2 6-7z" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: "02",
    titre: "Confidentialité",
    desc: "Toutes les informations relatives à nos clients et à nos interventions sont traitées avec une discrétion absolue et une confidentialité totale.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="10" y="18" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 18v-5a7 7 0 0114 0v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="27" r="2.5" fill="currentColor" />
        <line x1="22" y1="29.5" x2="22" y2="33" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "03",
    titre: "Excellence opérationnelle",
    desc: "Nous visons l'efficacité maximale à chaque intervention. Notre organisation rigoureuse garantit une réactivité et une qualité de service irréprochables.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <polygon points="22,6 27,17 39,17 30,25 33,37 22,30 11,37 14,25 5,17 17,17" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <polygon points="22,13 25,20 33,20 27,25 29,33 22,28 15,33 17,25 11,20 19,20" fill="currentColor" opacity="0.25" />
      </svg>
    ),
  },
  {
    id: "04",
    titre: "Intégrité",
    desc: "Nous agissons avec honnêteté et transparence. La confiance que vous nous accordez est notre bien le plus précieux — nous la préservons à chaque instant.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M22 8l11 5v9c0 7-5 13-11 15C16 35 11 29 11 22v-9l11-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 22l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Valeurs() {
  return (
    <section
      id="valeurs"
      style={{
        background: "var(--noir)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          width: "1px",
          height: "100%",
          background: "linear-gradient(to bottom, transparent, var(--bordure-r) 30%, var(--bordure-r) 70%, transparent)",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div
            className="section-label reveal"
            style={{ justifyContent: "center" }}
          >
            <span className="section-label__line" />
            <span className="section-label__text">Nos engagements</span>
            <span className="section-label__line" />
          </div>
          <h2
            className="section-title reveal reveal-d1"
            style={{ marginTop: "8px" }}
          >
            Nos valeurs &amp; <em>engagements</em>
          </h2>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2px",
          }}
        >
          {valeurs.map((v, i) => (
            <div
              key={v.id}
              className={`reveal reveal-d${i + 1}`}
              style={{
                background: "var(--noir-3)",
                border: "1px solid var(--bordure-b)",
                padding: "48px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--bordure-r)";
                e.currentTarget.querySelector(".card-top-line").style.transform = "scaleX(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--bordure-b)";
                e.currentTarget.querySelector(".card-top-line").style.transform = "scaleX(0)";
              }}
            >
              {/* Top accent line */}
              <div
                className="card-top-line"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--rouge)",
                  transformOrigin: "left",
                  transform: "scaleX(0)",
                  transition: "transform 0.4s ease",
                }}
              />

              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "var(--rouge)",
                  opacity: 0.6,
                }}
              >
                {v.id}
              </span>

              {/* Icon */}
              <div style={{ color: "var(--rouge)" }}>{v.icon}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "18px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--blanc)",
                  lineHeight: 1.3,
                }}
              >
                {v.titre}
              </h3>

              {/* Separator */}
              <div
                style={{
                  width: "32px",
                  height: "1px",
                  background: "var(--rouge)",
                  opacity: 0.5,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: 1.8,
                  color: "var(--gris-clair)",
                }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 1024px) {
          #valeurs > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #valeurs > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}