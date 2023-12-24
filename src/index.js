import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Navigation.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [flash, setFlash] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 900) {
        setShowNav(true);
        setFlash(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={showNav ? 'active' : ''}>
      <ul>
        <li>
          <button
            className={`nav-button ${flash ? 'flash' : ''}`}
            onClick={scrollToTop}><KeyboardArrowUpIcon fontSize="medium" ></KeyboardArrowUpIcon></button>
        </li>
      </ul>
    </nav>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Football"
root.render(
  <React.StrictMode >
    <div >
      <App />
      <Navigation />
    </div>
  </React.StrictMode>
);


reportWebVitals();
