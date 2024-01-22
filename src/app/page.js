import Image from "next/image";
import Header from "./components/Header";
import HomePics from "./components/HomePics";
import Footer from "./components/Footer";
import ProdCTA from "./components/ProdCTA";
import About from "./components/About";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <>
      <HomePics />
      <About />
      <ProdCTA />
      <Contact />
    </>
  );
}
