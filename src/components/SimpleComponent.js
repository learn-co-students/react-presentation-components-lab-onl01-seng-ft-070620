import React, { Component } from "react";

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };

  handleClick = () => {
    this.setState(prevState => {
      const mood = prevState.mood === "happy" ? "sad" : "happy";
      return { mood };
    });
  };

  render() {
    return <div onClick={this.handleClick}> {this.state.mood} </div>;
  }
}

export default SimpleComponent;
