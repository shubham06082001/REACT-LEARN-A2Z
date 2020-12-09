import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {/*  <div className={classes.Person}> */}
        <h1 onClick={this.props.click}>{this.props.name}</h1>
        <p>{this.props.age}</p>
        {this.props.children}
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  
};

export default WithClass(Person, classes.Person);
