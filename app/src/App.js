import React, { Component } from "react";
import DashBoard from "./components/Dashboard";
import Display from "./components/Display";

class App extends Component {
  state = {
    playerName: "Enter Players Name",
    strikes: 0,
    balls: 0
  };

  handleName = () => {
    this.setState({
      playerName: prompt("What is the players name?")
    })
  }

  handleStrikes = () => {
    const value = this.state.strikes;
    if (value === 2) {
      this.setState({ balls: 0, strikes: 0 });
      alert(`${value + 1} Strikes YOUR OUT ${this.state.playerName}!!`)
    } else {
      this.setState({ strikes: value + 1 });
    }
  };

  handleBalls = () => {
    const value = this.state.balls;
    if (value === 3) {
      this.setState({ balls: 0, strikes: 0 });
      alert(`${value + 1} Balls Your Out!`)
    } else {
      this.setState({ balls: value + 1 });
    }
  };

  handleFoul = () => {
    const value = this.state.strikes;
    if (value >= 2) {
      return value;
    } else {
      this.setState({ strikes: value + 1 });
    }
  };

  handleHit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Score Board Display</h1>
          <button data-testid='player' onClick={this.handleName}>Enters Players Name Here</button>
          <h2>Player: {this.state.playerName}</h2>
          <Display strikes={this.state.strikes} balls={this.state.balls}/>
          <DashBoard
            strikes={this.state.strikes}
            balls={this.state.balls}
            handleStrikes={this.handleStrikes}
            handleBalls={this.handleBalls}
            handleFoul={this.handleFoul}
            handleHit={this.handleHit}
          />
        </header>
      </div>
    );
  }
}

export default App;