import React from 'react';
import './App.css';

export default class Drum extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <div className="drum">
        <div className="drumpad">
        <div className="pad" id="q">Q</div>
        <div className="pad" id="w">W</div>
        <div className="pad" id="e">E</div>
        <div className="pad" id="a">A</div>
        <div className="pad" id="s">S</div>
        <div className="pad" id="d">D</div>
        <div className="pad" id="z">Z</div>
        <div className="pad" id="x">X</div>
        <div className="pad" id="c">C</div>
        </div>
        <div className="display"></div>
      </div>
    )
  }
  
}