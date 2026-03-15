import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import logoShield from "../assets/logo-shield.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Urgence Banner */}
      <div className={styles.urgence}>
        <span className={styles.urgenceDot} />
        <span className={styles.urgenceText}>Astreinte & Intervention 24h/24 — 7j/7</span>
        {/* <span className={styles.urgenceNum}>0650477911</span> */}
      </div>

      {/* Main Nav */}
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img src={logoShield} alt="Aegis Sécurité logo" className={styles.logoImg} />
          <div className={styles.logoWords}>
            <span className={styles.logoMain}>ORTEC</span>
            <span className={styles.logoSub}>Protection Humaine Premium</span>
          </div>
        </a>

        <ul className={styles.links}>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services</a></li>
          <li><a href="#approche" onClick={(e) => { e.preventDefault(); scrollTo("approche"); }}>Approche</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a></li>
        </ul>

        <button className={styles.navCta} onClick={() => scrollTo("contact")}>
          Contactez-nous
        </button>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo("services"); }}>Services</a>
        <a href="#approche" onClick={(e) => { e.preventDefault(); scrollTo("approche"); }}>Approche</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Contact</a>
        <button className={styles.navCta} onClick={() => scrollTo("contact")}>Devis Gratuit</button>
      </div>
    </>
  );
}
