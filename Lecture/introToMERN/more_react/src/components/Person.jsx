import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myPerson: this.props.p
        }
    }
  render() {

    return (
      <fieldset>
        <legend>Person.jsx</legend>
        <p>Person coming from props: {this.props.p.name}</p>
        <hr />
        <p>
            Our Person from state: {this.state.myPerson.name}
        </p>

      </fieldset>
    )
  }
}
