import { useState } from 'react'

import reactLogo from './assets/react.svg'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Skills from './components/Skills'
import Works from './components/Works'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <HashRouter>
        <Router>
          <Route />
        </Router>
      </HashRouter> */}
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
