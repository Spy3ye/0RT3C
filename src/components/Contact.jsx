import styles from "../styles/Contact.module.css";

const CONTACTS = [
  {
    label: "Email",
    val: "Larsecpro@gmail.com",
    icon: (
      <svg className={styles.cardIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 6h24l-2 18H6L4 6z" />
        <path d="M4 6L16 18 28 6" />
      </svg>
    ),
  },
  {
    label: "Téléphone",
    val: "0650477911",
    icon: (
      <svg className={styles.cardIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 5h6l2 7-4 2a16 16 0 007 7l2-4 7 2v6a1 1 0 01-1 1C9 28 3 18 3 6a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    label: "Couverture",
    val: "9 rue sigismond brissy bron 69500 ,lyon",
    icon: (
      <svg className={styles.cardIcon} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="16" cy="14" r="5" />
        <path d="M16 3C10 3 5 8 5 14c0 9 11 17 11 17s11-8 11-17c0-6-5-11-11-11z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <section className={styles.section} id="contact">
        <div className={styles.inner}>
          <div className={`section-label ${styles.sectionLabel} reveal`}>
            <div className="section-label__line" />
            <span className="section-label__text">Nous Contacter</span>
          </div>

          <h2 className="section-title reveal reveal-d1">
            Parlons de <em>votre</em><br />sécurité
          </h2>

          <p className={`${styles.desc} reveal reveal-d2`}>
            Notre équipe d'experts est à votre disposition pour évaluer vos besoins et vous
            proposer une solution entièrement personnalisée. Devis gratuit sous 24 heures.
          </p>

          <div className={`${styles.ctas} reveal reveal-d3`}>
            <a href="Larsecpro@gmail.com" className="btn-primary">
              Demander un devis
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="tel:+33650477911" className="btn-ghost">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 2h3l1.5 4L6 7.5a9 9 0 004.5 4.5L12 10l4 1.5V15a1 1 0 01-1 1C6 15 1 10 1 3a1 1 0 011-1z" />
              </svg>
              Appel direct
            </a>
          </div>

          <div className={`${styles.grid} reveal reveal-d4`}>
            {CONTACTS.map((c) => (
              <div key={c.label} className={styles.card}>
                {c.icon}
                <span className={styles.cardLabel}>{c.label}</span>
                <span className={styles.cardVal}>{c.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerLogo}>ORTEC</span>
        <span className={styles.footerCopy}>© 2025 ORTEC Sécurité — Tous droits réservés</span>
        <div className={styles.footerBadges}>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M7 1l6 2.5v4.5C13 12 10.5 14 7 15 3.5 14 1 12 1 8V3.5L7 1z" />
            </svg>
            <span className={styles.badgeText}></span>
          </div>
          <div className={styles.badge}>
            <svg className={styles.badgeIcon} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="1" y="1" width="12" height="12" rx="2" />
              <path d="M4 7l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={styles.badgeText}></span>
          </div>
        </div>
      </footer>
    </>
  );
}
