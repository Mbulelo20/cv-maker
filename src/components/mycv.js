import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

export default class Mycv extends Component {
    render() {
        return (
            <Container>
                <h2>Your CV</h2> 
                <Row>
                    <Col xs="3" className="personals">
                        <div className="avatar">
                            <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png" alt="avatar" style={{width: '70%'}}/>
                        </div>
                        <div className="det">
                            <h5 className="heading">Name: Mbulelo Pani</h5>
                            <h6>Date of Birth: 29-Aug-1997</h6>
                            <h6>Gender: Male</h6>
                            <h6>Region: Cape Town, Western Cape</h6>
                            <h6>National: SA</h6>
                            <h6>Email: mbulelopani09@gmai.com</h6>
                            <h6>Phone: 077 456 4882</h6>
                            <h6>Website: www.mbulelo20@github.com</h6>
                        </div>
                    </Col>
                    <Col xs="7" className="generic">
                        <br/>
                        <br/>
                        <div style={{textAlign: 'center',}}>
                            <h3  className="heading"> Work Experience </h3>
                        </div>
                        <h5>LC Studio</h5>
                        <hr/>
                        <p>Position: Intern</p>
                        <p>Roles: Web developer: cleanup code, maintain functionality</p>
                        <p>Duration: Dec 2020 - present</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}