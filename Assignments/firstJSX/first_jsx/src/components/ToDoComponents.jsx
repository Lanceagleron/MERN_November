import React, {Component} from "react";

class ToDoComponents extends React.PureComponent{
    render() {
        const toDo = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"]
        return (
            <div>
                {
                    toDo.map((element, idx) =>{
                        return <li key={idx}>{element}</li>
                    })
                }
            </div>
        )
    }
}

export default ToDoComponents;