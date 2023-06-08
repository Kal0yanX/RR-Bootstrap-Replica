import Card from 'react-bootstrap/Card';
import banner from './banner.webp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
  return (
<Container style={{ backgroundColor: '#deedd6'}}>
    <Row style={{ padding: 10}}><Col><p></p><h1>Order groceries for delivery or pickup today</h1>
    <p>Wherever you want from local stores, brought to your door.</p>
    <p>   Enter your address</p>
    </Col>
    <Card style={{ width: '13rem', margin: 0, padding: 0 }} className="text-black">
      <Card.Img src={banner} alt="Card Image" />
      <Card.ImgOverlay >
        <Card.Title>
            {/* <h1>Old use of coding with text over banner</h1> */}
            </Card.Title>
        <Card.Text>
            {/* <h1>Old use of coding with text over banner</h1> */}
        </Card.Text>
        <Card.Text>
            {/* <h1>Old use of coding with text over banner</h1> */}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>

    </Row>
</Container>
  );
}

export default Banner;