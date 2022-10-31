import React, { Component } from 'react'

export default class OtherComponent extends Component {
    constructor(props) {
        super(props)
        // create state for this component
        this.state = {
            x : 1,
            name: "bob",
            alice : this.props.alice
        }
    }

    increaseNum = () => {
        console.log("Clicked!")
        // this.state.alice++
        // setState is asyncronous function
        this.setState({
            alice : this.state.alice + 1
        }, () => console.log(this.state.alice))

    }

  render() {
    return (
      <fieldset>
        <legend>OtherComponent.jsx</legend>
        <p>
            x is : {this.state.x}
        </p>
        <p>name is : {this.state.name}</p>
        <p>coming from state: {this.state.alice}</p>
        {/* props */}
        <p>coming from props: {this.props.alice}</p>
        <button onClick={() => this.increaseNum()}>Click Me!</button>
        </fieldset>
    )
  }
}
