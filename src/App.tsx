import {NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
