import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class Exercise extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
      </div>
    )
  }
}
