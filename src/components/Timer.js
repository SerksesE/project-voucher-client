import React from "react";



export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '30'
    }
    this.handleChange = this.handleChange.bind(this);
    // this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    
    // this.startCountDown();
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
      this.setState({
        timerDone: true
      })
    }


    this.secondsRemaining--
  }

  // startCountDown() {
  //   this.intervalHandle = setInterval(this.tick, 1000);
  //   let time = this.state.value;
  //   this.secondsRemaining = time * 60;
  // }

  render() {
    if (this.state.timerDone) {
      return (
        <div>Coupon is expired!</div>
      );
    } else {
      return (
        <div>
          {/* <button onClick={this.startCountDown}>Activate</button> */}
          <h1 style={{ fontSize: 100, marginLeft: 100 }}>{this.state.value}:{this.state.seconds}</h1>
        </div>
      );
    }
  }
}


