import React, {Component, useEffect, useState } from 'react'
import {Row, Col, Image, Button, Container, Nav} from 'react-bootstrap';
import GuideSideBar from "./GuideSideBar";
import ReactMarkdown from 'react-markdown'
import Disqus from "disqus-react";

const MarkdownContent = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("Markdowns/Guide.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="post">
            <ReactMarkdown children={content} />
        </div>
    );
};

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
                            <MarkdownContent />
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