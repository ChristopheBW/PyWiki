import React, {Component} from 'react'
import {Row, Col, Button, Container, Form, Card} from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className="text-center bg-primary text-light">
                    <br/><br/><br/>
                    <h1>Welcome to PyWiki</h1>
                    <br/>
                    <Container>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search our contents, e.g. recursion"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button href="/search" variant="outline-light">Search</Button>
                        </Form>
                    </Container>
                    <br/><br/><br/>
                </Container>

                <Container className="">
                    <br/><br/><br/>
                    <Row>
                        <Col>
                            <Card style={{height: '24rem'}} className="shadow">
                                <Card.Img variant="top" style={{height: "12rem"}} src="assets/python-variable.png"/>
                                <Card.Body>
                                    <Card.Title>Variable and Value</Card.Title>
                                    <Card.Text>
                                        You can think of a variable as a label that has a name on it, which you tie onto
                                        a value.
                                    </Card.Text>
                                    <Button href="/guide-variable" variant="primary" className="float-end">Read
                                        More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{height: '24rem'}} className="shadow">
                                <Card.Img variant="top" style={{height: "12rem"}} src="assets/python-expression.jpg"/>
                                <Card.Body>
                                    <Card.Title>Expression and Operators</Card.Title>
                                    <Card.Text>
                                        Operators are used to perform operations on variables and values.
                                    </Card.Text>
                                    <Button href="/guide-expression" variant="primary" className="float-end">Read
                                        More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{height: '24rem'}} className="shadow">
                                <Card.Img variant="top" style={{height: "12rem"}} src="assets/python-list.png"/>
                                <Card.Body>
                                    <Card.Title>List</Card.Title>
                                    <Card.Text>
                                        Lists are used to store multiple items in a single variable. List, Dictionary
                                        and Tuple.
                                    </Card.Text>
                                    <Button href="/guide-list" variant="primary" className="float-end">Read
                                        More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <Card style={{height: '24rem'}} className="shadow">
                                <Card.Img variant="top" style={{height: "14rem"}} src="assets/python-string.png"/>
                                <Card.Body>
                                    <Card.Title>String</Card.Title>
                                    <Card.Text>
                                        These conditions can be used in several ways, most commonly in "if statements"
                                        <code>if else</code>.
                                    </Card.Text>
                                    <Button href="/guide-string" variant="primary" className="float-end">Read
                                        More</Button>
                                </Card.Body>
                            </Card>
                        </Col> <Col>
                        <Card style={{height: '24rem'}} className="shadow">
                            <Card.Img variant="top" style={{height: "14rem"}} src="assets/python-if.webp"/>
                            <Card.Body>
                                <Card.Title>Conditions</Card.Title>
                                <Card.Text>
                                    These conditions can be used in several ways, most commonly in "if statements"
                                    <code>if else</code>.
                                </Card.Text>
                                <Button href="/guide-conditions" variant="primary" className="float-end">Read
                                    More</Button>
                            </Card.Body>
                        </Card>
                    </Col> <Col>
                        <Card style={{height: '24rem'}} className="shadow">
                            <Card.Img variant="top" style={{height: "14rem"}} src="assets/python-while.gif"/>
                            <Card.Body>
                                <Card.Title>Loop</Card.Title>
                                <Card.Text>
                                    These loop can be used in several ways, most commonly in <code>while</code> and
                                    <code>for</code>.
                                </Card.Text>
                                <Button href="/guide-loop" variant="primary" className="float-end">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
                    <br/>
                </Container>
            </>
        )
    }
}
