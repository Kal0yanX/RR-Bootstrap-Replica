import Card from 'react-bootstrap/Card';
import banner from './banner.webp';



function Banner() {
  return (

    <Card style={{ width: '13rem'}} className="bg-dark text-black">
      <Card.Img variant="right" src={banner} background-color="#deedd6" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>
            Order groceries for delivery or pickup today
            </Card.Title>
        <Card.Text>
            Wherever you want from local stores, brought to your door.
        </Card.Text>
        <Card.Text>
            Enter your address
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
  );
}

export default Banner;