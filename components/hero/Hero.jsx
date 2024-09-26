import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';

function Hero() {
  return (
    <div className="hero">
      <Carousel controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://ld-wp73.template-help.com/wordpress/prod_13983/v3/wp-content/uploads/2019/03/main-slider-img-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption ">
            <h3>Bringing Health</h3>
            <p>to life for the whole family</p>
            <div className="button-group ">
              <a href="#Solutions" className="btn btn-primary">View Departments</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100 h-100"
            src="https://ld-wp73.template-help.com/wordpress/prod_13983/v3/wp-content/uploads/2019/03/main-slider-img-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption ">
            <h3>Bringing Health</h3>
            <p>to life for the whole family</p>
            <div className="button-group ">
              <a href="#departments" className="btn btn-primary">View Departments</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://ld-wp73.template-help.com/wordpress/prod_13983/v3/wp-content/uploads/2019/03/main-slider-img-3.jpg"
            alt="Third slide"
          />
         <Carousel.Caption className="custom-caption ">
            <h3>Bringing Health</h3>
            <p>to life for the whole family</p>
            <div className="button-group ">
              <a href="#departments" className="btn btn-primary">View Departments</a>
              <a href="/contact" className="btn btn-secondary">Get in Touch</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
