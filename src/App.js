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

            src="https://mytukar.com/blog/wp-content/uploads/2021/12/22222.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>CONTACT US FOR THE LUXURIOUS EXPERIENCE</h3>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://vid.alarabiya.net/images/2023/04/12/c1ef10d4-525a-47ea-822c-2d9f75dd0343/c1ef10d4-525a-47ea-822c-2d9f75dd0343_16x9_1200x676.JPG"

            alt="First slide"
          />
          <Carousel.Caption>
            <h3>CONTACT US FOR THE LUXURIOUS EXPERIENCE</h3>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>

    </PageWrapper>
  );
}

export default App;


