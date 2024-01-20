import Image from "next/image";
import Header from "./components/Header";
import HomePics from "./components/HomePics";
import About from "./About/page";

export default function Home() {
  return (
    <>
      <Header />
      <HomePics/>
      <About/>
    </>
  );
}
