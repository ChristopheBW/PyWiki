import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import GuideSideBar from "./GuideSideBar";

export default class Guide extends Component {
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
                            <h2>Getting Started</h2>
                            <p>This shows how to build a Python3 development environment in linux with vim as
                                editor.</p>
                        </Container>
                    </Col>
                </Row>

            </>
        )
    }
}