import React from "react"

class TodoItem extends React.Component {
  render() {
    
    return <input type="checkbox" /> {this.props.todo.title}
  }
}

export default TodoItem
