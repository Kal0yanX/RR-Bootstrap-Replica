import Card from 'react-bootstrap/Card';
import banner from './banner.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
  return (
<Container style={{ backgroundColor: '#deedd6'}}>
    <Row><Col><p></p><h1>Order groceries for delivery or pickup today</h1>
    <p>Wherever you want from local stores, brought to your door.</p>
    <p>   Enter your address</p>
    </Col>
    <Card style={{ width: '13rem'}} className="bg-white text-black">
      <Card.Img src={banner} alt="Card Image" />
      <Card.ImgOverlay>
        <Card.Title>
            
            </Card.Title>
        <Card.Text>
            
        </Card.Text>
        <Card.Text>
         
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    </Row>
</Container>
  );
}

export default Banner;