import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import {BiHome, BiBook, BiTask, BiChat,} from "react-icons/bi";
import {IoLogoPython} from "react-icons/io5";

export default class MainNavBar extends Component {
    render() {
        return (
            <Navbar className={"shadow"}>
                <Container>
                    <Navbar.Brand href="/"><IoLogoPython/> PyWiki</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/"><BiHome/> Home</Nav.Link>
                        <Nav.Link href="/guide"><BiBook/> Guide</Nav.Link>
                        <Nav.Link href="/exercise"><BiTask/> Exercise</Nav.Link>
                        <Nav.Link href="/forum"><BiChat/> Forum</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
