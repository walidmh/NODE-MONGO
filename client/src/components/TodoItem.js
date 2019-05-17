import React from "react";

class TodoItem extends React.Component{
    render(){
        const {text, checked, ...rest} = this.props;
        console.log(rest);
        return <li style={{
            opacity: checked ? 0.5 : 1,
            backgroundColor: "red"
        }}>{text}</li>
    }
}

export default TodoItem;