import { useState, useEffect } from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, useLocation } from 'react-router-dom';

function BasicExample() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const [navbarColor, setNavbarColor] = useState('');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('/solutions')) {
      setNavbarColor('navbar-solutions');
    } else if (location.pathname.includes('/Casestudies')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/medicalcoding')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/denial')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/about')) {
      setNavbarColor('nav-Casestudies');
    } else if (location.pathname.includes('/contact')) {
      setNavbarColor('nav-Casestudies');
    } else {
      setNavbarColor('');
    }
  }, [location]);

  let lastScrollTop = 0;

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    setIsScrolled(currentScrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownClick = () => {
    setDropdownClicked(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className={`container-fluid ${showNavbar ? 'navbar-visible' : 'navbar-hidden'} ${isScrolled ? 'navbar-scrolled' : ''} ${dropdownClicked ? 'dropdown-clicked' : ''} ${navbarColor}`} id='navbar'>
        <div className="navbar-top d-flex">
          <div className="col-md-3 border-bottom">
            <span>Location: Wallstreet Street, NY, USA</span>
          </div>
          <div className="col-md-6 border">
            <span>Email: info@beclinic.com</span>
            <span className='span_nav'>For emergency cases: 800 123 45 67</span>
          </div>
          <div className="col-md-2 border">
            <div id="icon_gap">
              <LinkedInIcon />
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="col-md-2 border-bottom"></div>
        </div>

        <Navbar expand="lg" className={`bg-body-transparent ${isScrolled ? 'navbar-scrolled' : ''} ${dropdownClicked ? 'dropdown-clicked' : ''}`} id='nav'>
          <Container>
            <Navbar.Brand href="#home">
              <div className="logo">
                <img src="https://ld-wp73.template-help.com/wordpress/prod_13983/v3/wp-content/uploads/2021/12/logo.png" alt="Logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto gap-2">
                <Nav.Link as={Link} to="/" onClick={() => setDropdownClicked(false)}>Home</Nav.Link>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#solutions" role="button" aria-expanded="false">
                    Solutions
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/solutions#action/3.1" onClick={handleDropdownClick}>Provider Enrollment Credentialing Services</Link></li>
                    <li><Link className="dropdown-item" to="/medicalcoding#action/3.2" onClick={handleDropdownClick}>Medical Coding Services</Link></li>
                    <li><Link className="dropdown-item" to="/denial#action/3.3" onClick={handleDropdownClick}>Denial Management Services</Link></li>

                  </ul>
                </li>
                <Nav.Link as={Link} to="/Casestudies" onClick={() => setDropdownClicked(false)}>Case Studies</Nav.Link>

                <Nav.Link as={Link} to="/about" onClick={() => setDropdownClicked(false)}>About Us</Nav.Link>
              
                <Nav.Link as={Link} to="/contact" onClick={() => setDropdownClicked(false)}>Contact</Nav.Link>

                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#doctors" role="button" aria-expanded="false">
                    Doctors
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#action/3.1" onClick={handleDropdownClick}>Action</Link></li>
                    <li><Link className="dropdown-item" to="#action/3.2" onClick={handleDropdownClick}>Another action</Link></li>
                    <li><Link className="dropdown-item" to="#action/3.3" onClick={handleDropdownClick}>Something</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#action/3.4" onClick={handleDropdownClick}>Separated link</Link></li>
                  </ul>
                </li> */}

                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#shop" role="button" aria-expanded="false">
                    Shop
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#action/3.1" onClick={handleDropdownClick}>Action</Link></li>
                    <li><Link className="dropdown-item" to="#action/3.2" onClick={handleDropdownClick}>Another action</Link></li>
                    <li><Link className="dropdown-item" to="#action/3.3" onClick={handleDropdownClick}>Something</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="#action/3.4" onClick={handleDropdownClick}>Separated link</Link></li>
                  </ul>
                </li> */}
              </Nav>
              <div className="nav_button">
                <button>Get Appointment</button>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default BasicExample;
