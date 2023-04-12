import {BrowserRouter } from 'react-router-dom'
import { About, Contact,Experience,Hero,
  Navbar,Tech,Works,StarsCanvas,HeroTwo} from './components'
  
const App = () =>{
  return (
    <BrowserRouter>
      <div className="relative z-[0] bg-primary">
        <div className="relative z-10"> 
          {/* className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-[0] */}
          <Navbar />
          {/* <Hero /> */}
          <StarsCanvas />
          <HeroTwo />
        </div>
        <About />
        <Experience/>
        <Tech />
        <Works/>
        <div className="relative z-0">
            <Contact />
            <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
