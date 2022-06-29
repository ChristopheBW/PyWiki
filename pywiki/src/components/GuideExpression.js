import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import GuideSideBar from "./GuideSideBar";

export default class GuideExpression extends Component {
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
                            <h2>Expression</h2>
                            <p>This is how to build a development environment in linux with vim as editor</p>
                        </Container>
                    </Col>
                </Row>

            </>
        )
    }
}