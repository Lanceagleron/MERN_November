import React, {Component} from "react";

class SomeClassComponent extends React.PureComponent{

    render() {
        console.log(this.props.x)
        return (
            <fieldset>
                <legend>SomeClassComponent.jsx</legend>
                <p>Hello from SomeComponent</p>
                <p>props are: {JSON.stringify(this.props)}</p>
            </fieldset>
        )
    }
}

//make sure you EXPORT so other files can use it
export default SomeClassComponent;