import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props)
        this.state = {
            user : this.props.p,
            age : this.props.a
        }
    }

    increaseAgeBy1 = () =>{
        console.log("Clicked!")
        this.setState({
            age : this.state.age + 1
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.user.lastName}, {this.state.user.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>hair Color: {this.state.user.hairColor}</p>
        <button onClick={() => this.increaseAgeBy1()}>
            Birthday Button for {this.state.user.firstName} {this.state.user.lastName}
            </button>
        </div>
    )
  }
}
