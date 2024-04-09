import {NavLink, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import QuickStart from './routes/quick-start'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <nav>
          <NavLink to="/">Home</NavLink> |
          <NavLink to="/about">About</NavLink> |
          <NavLink to="/quick-start">QuickStart</NavLink> |
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/quick-start' element={<QuickStart />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
