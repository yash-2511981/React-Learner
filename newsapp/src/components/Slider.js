import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    const { first, second,state} = this.props;

    return (
      <div>
        <div
          id="carouselExampleAutoplaying"
          className={`carousel slide my-3 rounded shadow-lg p-3 bg-${state.bg} text-${state.color}`}
          data-bs-ride="carousel"
          style={{height:"80px",width:"100%"}}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
                <h1><b>Abhitak : </b>{first}</h1>
            </div>
            <div className="carousel-item">
                <h1>{second}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
