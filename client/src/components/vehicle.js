/*jshint esversion: 6 */
import React, { Component } from 'react';
import '../styles/Map.css';
//import car_image from '../images/car.png';
//import bus_image from '../images/bus.png';

class Vehicle extends Component {
    
  render() {
    var style = {
        top: (this.props.y),// - this.getVehicleDimensions(this.props.type).height / 2) + 'px',
        left: (this.props.x),// - this.getVehicleDimensions(this.props.type).width / 2) + 'px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        width: this.getVehicleDimensions(this.props.type).width + 'px',
        height: this.getVehicleDimensions(this.props.type).height + 'px'
    };
    let labelStyle = {};
    if(this.props.highlight) {
      style.backgroundColor = 'deeppink';
      style.zIndex = 2;
      labelStyle.backgroundColor = 'green';
    }
    let speed = null;
    if(this.props.showSpeed && this.props.speed) {
      speed = (
        <span style={labelStyle}>speed: {this.props.speed.toFixed(2)} m/s</span>
      );
    }
    let ttc = null;
    if(this.props.showTTC) {
      if(this.props.ttc && this.props.ttc > -1) {
        ttc = (
          <span style={labelStyle}>ttc: {this.props.ttc.toFixed(2)} s</span>
        );
      }
      else {
        ttc = (
          <span style={labelStyle}>ttc: -</span>
        );
      }
    }
    let distance = null;
    if(this.props.showDistance && this.props.distance) {
      distance = (
        <span style={labelStyle}>dis: {this.props.distance.toFixed(2)} m</span>
      );
    }
    let label = (
      <div className="vehicle-label">
           {speed} &nbsp;&nbsp; {ttc} &nbsp;&nbsp; {distance}
      </div>
    );

    return (
      <div className="vehicle" style={style}>
        {label}
      </div>
    );
  }

  getVehicleDimensions = type => {
    switch(type) {
      case 'bus':
      return {
        width: 9,
        height: 9
      };
      case 'car':
      default:
        return {
          width: 6,
          height: 6
        };
    }
  }
}

export default Vehicle;
