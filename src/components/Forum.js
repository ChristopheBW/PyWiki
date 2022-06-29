import React, { Component } from "react"
import Disqus from "disqus-react"
import {Container} from "react-bootstrap";

export default class Forum extends Component {
    render() {
        const disqusShortname = "PyWiki"
        const disqusConfig = {
            url: "http://localhost:3000",
            identifier: "article-id",
            title: "Title of Your Article"
        }

        return (
            <Container className="article-container">

                <h1>Page Title</h1>

                <p>Page content.</p>

                <Disqus.DiscussionEmbed
                    shortname="pywiki"
                    config={disqusConfig}
                />
            </Container>
        )
    }
}