import React from 'react';
import {Button, Col, Container, Jumbotron, Row} from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import '../App.css';
import stock from '../images/checkstockmarket.jpg';
import heroImg from '../images/trackthemarket.jpg';


const Hero = () => {
    return (
        <div className="hero">
            <Container>
                <Jumbotron>
                <Row>
                    <Col><h1>Welcome to Open Funder!</h1></Col>
                </Row>
                </Jumbotron>
                <Row>
                    <Col>
                    <div>
                        <ul>
                            <li><h5>Fund Digital Wallets quick and easy with an one time debit card payment!</h5></li>
                            <li><h5>Fund Your Investment Account from your contributions with no problem!</h5>
                            </li>
                            <li><h5>No account creation or bank account information needed!</h5></li>
                            <li><h5>Give someone the opportunity to invest in their future!</h5></li>
                        </ul>
                        <Button href="#" size="lg" block>Fund An OF Digital Wallet Today!</Button>
                    </div> 
                    </Col>
                    <Col>
                        <img src={heroImg} className="heroImage"/>
                    </Col>
                </Row>
                <hr />
                

                <MDBRow>
                    <MDBCol md='4'>
                        <MDBCard narrow>
                            <MDBView cascade>
                                <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src={stock}
                                alt='food'
                                />
                            </MDBView>

                            <MDBCardBody>
                                <h5 className='pink-text'>
                                <MDBIcon icon='utensils' /> Culinary
                                </h5>

                                    <MDBCardTitle className='font-weight-bold'>
                                    Cheat day inspirations
                                    </MDBCardTitle>

                                    <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    </MDBCardText>

                                <MDBBtn color='unique'>Open an OF Digital Wallet</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard narrow>
                            <MDBView cascade>
                                <MDBCardImage
                                hover
                                overlay='white-slight'
                                className='card-img-top'
                                src='https://pixabay.com/images/id-544949/'
                                alt='food'
                                />
                            </MDBView>

                            <MDBCardBody>
                                <h5 className='pink-text'>
                                <MDBIcon icon='utensils' /> Culinary
                                </h5>

                                    <MDBCardTitle className='font-weight-bold'>
                                    Cheat day inspirations
                                    </MDBCardTitle>

                                    <MDBCardText>
                                    Sed ut perspiciatis unde omnis iste natus sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam.
                                    </MDBCardText>

                                <MDBBtn color='unique'>Fund an OF Wallet</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                

            </Container>
        </div>
    )
}

export default Hero
