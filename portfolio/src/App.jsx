
import './App.css'
import About from './components/about/About'
import Header from './components/Header'
import Home from './components/Home/Home'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
function App() {
 

  return (
    <>
     <Header/>
     <main className='main'>

     <Home/>
     <About/>
     <Skills/>
     <Services/>
     </main>
    
        
    </>
  )
}

export default App
