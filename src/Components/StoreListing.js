import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreListing() {
  return (
    <>
<h2>Browse stores in North Carolina</h2>
<Container style={{ marginTop: "40px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>ALDI</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Kroger</h5><p>Delivery * Pickup</p></Col>
        </Row>
    </Row>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>BJ's</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Publix</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>CVS</h5><p>Delivery * Pickup</p></Col>
        </Row>
    </Row>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Petco</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Food Lion</h5><p>Delivery * Pickup</p></Col>
            <Col sm={4}><h5 style={{ fontWeight: "bold" }}>Lowes</h5><p>Delivery * Pickup</p></Col>
        </Row>
    </Row>
    </Container>
    </>
  );
}

export default StoreListing;