import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import GuideSideBar from "./GuideSideBar";

export default class GuideLoop extends Component {
    render() {
        return (
            <>
                <br/>
                <Row>
                    <Col sm={2}>
                        <GuideSideBar/>
                    </Col>
                    <Col>
                        <Container>
                            <h2>Loop</h2>
                            <p>Article will be ready in the final stage</p>
                        </Container>
                    </Col>
                </Row>

            </>
        )
    }
}