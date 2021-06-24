import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const ProfilePhoto = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="./img/photoprofile.jpg" roundedCircle style={{ width: 250 }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProfilePhoto
