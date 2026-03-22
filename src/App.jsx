import "./styles/global.css";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approche from "./components/Approche";
import Contact from "./components/Contact";
import Zone from "./components/Zone";
import Valeur from "./components/Valeur";

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approche />
        <Zone />
        <Valeur />
        <Contact />
      </main>
    </>
  );
}
