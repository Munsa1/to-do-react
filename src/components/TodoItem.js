import React from "react"

class TodoItem extends React.Component {
  render() {
    
    return <input
    type="checkbox"
    checked={this.props.todo.completed}
    onChange={() => console.log("clicked")}
  />
  }
}

export default TodoItem
