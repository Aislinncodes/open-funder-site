import React from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap';
import '../App.css';
import heroimg from '../images/heroimage.jpg';

const MainInfo = () => {
    return (
        <div>
            <div className="mainInfo">
            <Container>
                <Jumbotron>
                <Row>
                    <Col><h1>Open Funder Digital Wallet:</h1></Col>
                </Row>
                <Row>
                    <Col><p>Open Source money sending to help individuals "crowd fund" for investment purposes.
                    </p></Col>
                    <Col><p>
                        Designed to allow anyone to fund your account with ease and no commitment to us!
                    </p></Col>
                    <Col><p>
                        Used to purchase mutual funds, stocks, bonds and cryptocurrency. Simply link your current broker account and transfer funds!</p></Col>
                </Row>
                <Row>
                <Col>
                <h2>Funders:</h2>
                <p>Only your debit card, funder's id and PIN is needed to invest in someone you care about's future!</p> 
                </Col>
                <Col>
                <img src={heroimg} alt="man with gold coins" className="mainImage" />  
                </Col>
                </Row>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        </div>
        </div>
    )
}

export default MainInfo
