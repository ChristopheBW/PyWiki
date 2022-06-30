import React, {Component} from 'react'
import {Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import GuideSideBar from "./GuideSideBar";
import Disqus from "disqus-react";

export default class Guide extends Component {
    render() {
        const disqusShortname = "pywiki-guide"
        const disqusConfig = {
            url: "http://localhost:3000",
            identifier: "article-id",
            title: "Getting started"
        }
        return (
            <>
                <br/>
                <Row>
                    <Col sm={2}>
                        <GuideSideBar/>
                    </Col>
                    <Col sm={10}>
                        <Container fluid>
                            <h2 id='getting-started'>Getting Started</h2>
                            <p>This shows how to build a Python 3 developing environment in Linux with vim as
                                editor.</p>
                            <Image src="assets/DevelopingEnvironment.png" alt="Developing Environment" width="80%"></Image>
                            <p>&nbsp;</p>
                            <h3 id='setting-up-arch-linux'>Setting up Arch Linux</h3>
                            <p>&nbsp;</p>
                        </Container>
                    </Col>
                </Row>


                <Container className="article-container">
                    <Disqus.DiscussionEmbed
                        shortname={disqusShortname}
                        config={disqusConfig}
                    />
                </Container>
            </>
        )
    }
}