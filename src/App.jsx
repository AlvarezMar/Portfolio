import './App.css'
import Projects from './views/projects/Projects'
import About from './views/about/About'
import Home from './views/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'


function App() {

  return <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Footer/>
  </div>

}

export default App
