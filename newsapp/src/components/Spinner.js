import React, { Component } from "react";
import loading from './spinner.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        {this.props.loading && <div className="container text-center">
            <img src={loading} alt="" height="40px" width="40px"/>
        </div>}
      </div>
    );
  }
}
