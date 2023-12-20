import {NavBar}  from "./NavBar/Navbar"
import { Intro } from "./Intro/Intro"
import { About } from "./About/About"
import { Expreineces } from "./Exp.tsx/Exp"
import { Projects } from "./Projects/Project"
import { Footer } from "./Footer/Footer.tsx"

import './index.css'
export function App() {

  return (
    <div>
      <NavBar />
      <Intro />
      <About />
      <Expreineces />
      <Projects />
      <Footer />
    </div>
  )
}

