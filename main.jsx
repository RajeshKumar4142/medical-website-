import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/home/Home.jsx';
import Layout from './layout.jsx';
import Solutions from './components/solutions/Solutions.jsx';
import Casestudies from './components/casestudies/Casestudies.jsx';
import Medicalcoding from './components/medicalcoding/Medicalcoding';
import Denial from './components/denial/Denial.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="casestudies" element={<Casestudies />} />
          <Route path="/medicalcoding" element={<Medicalcoding />} />
          <Route path="/denial" element={<Denial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes here if needed */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
