import styles from "../styles/Approche.module.css";
import shieldWatermark from "../assets/logo-shield.png";

const PILIERS = [
  {
    num: "01",
    h: "Agents Certifiés CNAPS",
    p: "Chaque agent est sélectionné, habilité et formé selon les plus hauts standards réglementaires français.",
  },
  {
    num: "02",
    h: "Approche Préventive",
    p: "Analyse des risques en amont, dispositifs adaptés et présence dissuasive pour éviter tout incident.",
  },
  {
    num: "03",
    h: "Réactivité & Excellence",
    p: "Un coordinateur dédié, des rapports en temps réel et une ligne directe disponible à toute heure.",
  },
  {
    num: "04",
    h: "Confidentialité Absolue",
    p: "Discrétion et éthique irréprochable. Vos informations et actifs restent strictement protégés.",
  },
];

export default function Approche() {
  return (
    <div className={styles.wrapper} id="approche">
      {/* Visual */}
      <div className={styles.visual}>
        <div className={styles.visualBg} />
        <img
          src={shieldWatermark}
          alt="Aegis shield emblem"
          className={styles.shieldImg}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className="section-label reveal">
          <div className="section-label__line" />
          <span className="section-label__text">Notre Philosophie</span>
        </div>

        <h2 className="section-title reveal reveal-d1">
          La prévention<br />avant <em>tout</em>
        </h2>

        <p className={`${styles.contentDesc} reveal reveal-d2`}>
          Chez ORTEC Sécurité, nous croyons que la meilleure intervention est celle qui n'a
          jamais lieu. Notre approche repose sur l'anticipation, la formation continue et la
          présence humaine qualifiée.
        </p>

        <div className={styles.piliers}>
          {PILIERS.map((p, i) => (
            <div key={i} className={`${styles.pilier} reveal reveal-d${i + 1}`}>
              <span className={styles.pilierNum}>{p.num}</span>
              <div>
                <h4 className={styles.pilierH}>{p.h}</h4>
                <p className={styles.pilierP}>{p.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
