import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <div>
        <p>hello {this.props.name}</p>
      </div>
    );
  }
}
