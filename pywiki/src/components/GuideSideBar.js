import React, {Component} from 'react';
import {Nav, Container} from "react-bootstrap";
import {BiHome, BiBook, BiTask, BiChat,} from "react-icons/bi";
import {IoLogoPython} from "react-icons/io5";

export default class GuideSideBar extends Component {
    render() {
        return (
            <Nav className="col-md-12 d-none d-md-block sidebar-default sidebar" >
                <Container>
                    <Nav.Item><Nav.Link href="/guide">Getting Started</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-variable">Variable and Value</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-expression">Expression and Operators</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-list">List</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-string">Strings</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-conditions">Conditions and If statement</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/guide-loop">Loop</Nav.Link></Nav.Item>
                </Container>
            </Nav>
        )
    }
}
