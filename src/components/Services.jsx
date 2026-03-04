import styles from "../styles/Services.module.css";

const SERVICES = [
  {
    num: "01",
    title: "Sécurité Commerciale",
    desc: "Protection de vos locaux, centres commerciaux et boutiques. Filtrage d'accès, prévention des vols et gestion des situations conflictuelles avec sang-froid.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="20" width="32" height="22" rx="2" />
        <path d="M16 20v-5a8 8 0 0116 0v5" />
        <circle cx="24" cy="31" r="3" />
        <path d="M24 34v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Surveillance de Nuit",
    desc: "Rondes nocturnes et gardiennage statique ou mobile. Protection continue de vos actifs industriels, entrepôts et sites sensibles pendant les heures creuses.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 6C15 6 8 13 8 22c0 11 16 24 16 24s16-13 16-24c0-9-7-16-16-16z" />
        <circle cx="24" cy="22" r="5" />
        <path d="M34 8l4 4" strokeLinecap="round" />
        <path d="M40 20h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    highlight: true,
    title: "Sécurité Événementielle",
    desc: "Galas, concerts, conférences et événements d'entreprise. Contrôle d'accès, filtrage VIP, coordination des flux et gestion des foules avec élégance.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 20h32l-4 20H12L8 20z" />
        <path d="M18 20v-6a6 6 0 0112 0v6" />
        <path d="M20 30h8M24 28v6" />
        <path d="M6 16h36" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Interventions sur Alarme",
    desc: "Levée de doute et intervention rapide sur déclenchement d'alarme. Nos équipes mobiles certifiées interviennent en moins de 20 minutes sur votre zone.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="22" r="12" />
        <path d="M24 14v4M24 26v4M14 22h4M28 22h4M24 22l-4-4" />
        <path d="M16 38l2-4M32 38l-2-4M14 38h20" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Installation Caméras",
    desc: "Audit, conception et installation de systèmes de vidéosurveillance haute définition. Solutions IP intelligentes, stockage sécurisé et télésurveillance 24h/24.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="4" y="14" width="26" height="20" rx="2" />
        <path d="M30 20l14-6v20l-14-6" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="17" cy="24" r="2" />
        <path d="M8 40h32" />
      </svg>
    ),
  },
  {
    num: "—",
    title: "Audit & Conseil en Sûreté",
    desc: "Diagnostic de vulnérabilités, plan de sécurisation et recommandations personnalisées. Un expert conçoit votre dispositif sur-mesure.",
    icon: (
      <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4L44 12v16c0 10-8 19-20 22C12 47 4 41 4 28V12L24 4z" />
        <path d="M16 24l5 5 10-10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div>
          <div className="section-label reveal">
            <div className="section-label__line" />
            <span className="section-label__text">Nos Prestations</span>
          </div>
          <h2 className="section-title reveal reveal-d1">
            Une gamme complète<br />de <em>protection</em>
          </h2>
        </div>
        <p className={`${styles.intro} reveal reveal-d2`}>
          Chaque mission est conçue sur-mesure. Nos agents, hautement qualifiés et certifiés
          CNAPS, interviennent avec discrétion, professionnalisme et une éthique irréprochable
          — au service de votre tranquillité.
        </p>
      </div>

      <div className={styles.grid}>
        {SERVICES.map((svc, i) => (
          <div
            key={i}
            className={`${styles.card} ${svc.highlight ? styles.cardHighlight : ""} reveal reveal-d${(i % 3) + 1}`}
          >
            <span className={styles.num}>{svc.num}</span>
            {svc.icon}
            <h3 className={styles.title}>{svc.title}</h3>
            <p className={styles.desc}>{svc.desc}</p>
            <a href="#contact" className={styles.more}>
              En savoir plus
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 6h8M6 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
