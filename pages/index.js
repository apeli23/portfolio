import Head from 'next/head'
import { useState } from "react";
import Topbar from "../components/topbar/Topbar";
import Menu from "../components/menu/Menu";
import Intro from '../components/intro/Intro';
import Potfolio from "../components/potfolio/Potfolio";
import Works from "../components/works/Works";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from '../components/contact/Contact';


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <Head>
        <title>Apeli Brian Potfolio</title>
        <meta name="description" content="Apeli Brian Potfolio" />
        <link rel="icon" href="https://res.cloudinary.com/dlt0f5pvq/image/upload/v1665346240/Screenshot_2022-10-09_at_23.04.41-removebg-preview_kyawnn.png" />
      </Head>

      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Intro />
          <Potfolio />
          <Works />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  )
}
