import React, { Component } from "react";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isMenuOn: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isMenuOn: !state.isMenuOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isMenuOn ? 'ON' : 'OFF'}</button>
    )
  }
}

// ReactDom.render(
//   <Menu />,
//   document.getElementById('root')
// );