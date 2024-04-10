import React from 'react';
import { NavLink, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Divider } from 'antd';
import Home from './routes/Home';
import About from './routes/About';
import QuickStart from './routes/quick-start';
import ScenesLinks from './routes/scenes/ScenesLinks';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <nav key='1'>
          <NavLink to='/'>Home</NavLink>
          <Divider type='vertical' />
          <NavLink to='/about'>About</NavLink>
          <Divider type='vertical' />
          <NavLink to='/quick-start'>QuickStart</NavLink>
          <Divider type='vertical' />
          {ScenesLinks.map((link) => (
            <React.Fragment key={link.path}>
              <NavLink to={link.path}>{link.name}</NavLink>
              <Divider type='vertical' />
            </React.Fragment>
          ))}
        </nav>
        <Routes key='2'>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/quick-start' element={<QuickStart />} />
          {ScenesLinks.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
