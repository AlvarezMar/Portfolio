import './App.css'
import Navbar from './components/navbar/Navbar'
import Projects from './views/projects/Projects'
import About from './views/about/About'
import Home from './views/home/Home'

function App() {

  return <div>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
  </div>

}

export default App
