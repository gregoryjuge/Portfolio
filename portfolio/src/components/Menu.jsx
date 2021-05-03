import React, { Component } from "react";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.handleMenuOnClick = this.handleMenuOnClick.bind(this);
    this.handleMenuOffClick = this.handleMenuOffClick.bind(this);
    this.state = { isMenuOn: false };
  }

  handleMenuOnClick() {
    this.setState({ isMenuOn: true });
  }

  handleMenuOffClick() {
    this.setState({ isMenuOn: false });
  }

  render() {
    const isMenuOn = this.state.isMenuOn;
    console.log("this.state.isMenuOn");
    let button;

    if (isMenuOn) {
      button = <MenuOn onClick={this.handleisMenuOffClick} />;
    } else {
      button = <MenuOff onClick={this.handleisMenuOnClick} />;
    }

    return <div>{button}</div>;
  }
}

function MenuOff(props) {
  return <button onClick={props.onClick}>lignes</button>;
}

function MenuOn(props) {
  return <button onClick={props.onClick}>croix</button>;
}
