import './App.css'
import Projects from './views/projects/Projects'
import About from './views/about/About'
import Home from './views/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import { Experience } from './views/experience/Experience'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const handleScroll = (e, targetId) => {
      e?.preventDefault();

      const targetElement = document.getElementById(targetId);

      if(!targetElement) return;

      const navHeight = document.getElementById('navbar').offsetHeight
      const targetPosition = targetElement.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }

    const anchors = document.querySelectorAll('#links a')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
  
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        handleScroll(e, targetId)
      })
    })

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function(e){
          const targetId = e.currentTarget.getAttribute('href').substring(1)
          handleScroll(e, targetId);
        })
      })

    }

  }, [])


  return <div>
    <Navbar/>
    <Home/>
    <Experience/>
    <Projects/>
    <About/>
    <Footer/>
  </div>

}

export default App
