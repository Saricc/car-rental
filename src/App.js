import { Carousel } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer/Footer';
import PageWrapper from './components/PageWrapper';


function App() {

  return (
    <PageWrapper>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.atcdn.co.uk/vms/media/5131cf5afd34459f86f165d5258bcf29.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://m.atcdn.co.uk/vms/media/5131cf5afd34459f86f165d5258bcf29.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>

    </PageWrapper>
  );
}

export default App;


