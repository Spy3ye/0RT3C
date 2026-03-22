import styles from "../styles/Hero.module.css";

const STATS = [
  { num: "30+", label: "Années d'expérience" },
  { num: "X%", label: "Satisfaction client" },
  { num: "10+", label: "Agents certifiés" },
  { num: "24/7", label: "Astreinte permanente" },
];

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.scanline} aria-hidden="true" />
      <div className={styles.accent} aria-hidden="true" />
      <div className={styles.bigText} aria-hidden="true">ORTEC</div>
      {/* <div className={styles.background-container} aria-hidden="true" /> */}

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>
            Sécurité Privée
          </span>
        </div>

        <h1 className={styles.h1}>
          <span className={styles.lineWhite}>Protéger.</span>
          <span className={styles.lineRed}>Prévenir.</span>
          <span className={styles.lineOutline}>Rassurer.</span>
        </h1>

        <p className={styles.desc}>
          ORTEC Sécurité met en œuvre des solutions d'excellence en protection humaine, résolument orientées vers la prévention, pour les entreprises, les événements et une clientèle privée exigeante.
        </p>

        <div className={styles.actions}>
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            Demander un devis
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("services")}>
            Nos services
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 3v10M4 9l4 4 4-4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLbl}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
