import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
var axios = require('axios');

class Monitor extends Component {
  render() {
    this.status = 'green';
    this.check();

    return (
      <Col lg={12}>
        <h1>{this.props.title}</h1>
        {status}
      </Col>
    );
  }

  check() {
    let that = this;
    axios.get(this.props.url)
    .then(function (response) {
        console.log(response);
        that.status = 'green';
    })
    .catch(function (error) {
        console.log(error);
        that.status = 'red';
    });
  }

}

export default Monitor;
