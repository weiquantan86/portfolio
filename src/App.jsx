
import { Routes, Route, Link} from 'react-router-dom'
//importing my pages
import Home from'./pages/Home.jsx'
import Projects from'./pages/Projects.jsx'
import About from'./pages/About.jsx'
import Contact from'./pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import { initTheme } from './utils/theme.js'

initTheme();

function Header(){
  return (
    <nav style ={{ padding: '1rem', display: 'flex', gap: '1rem'}}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}


