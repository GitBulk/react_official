import TodoItem from "components/TodoItem"

export default function TodoList(props) {
  const { todos } = props
  const items = todos.map(todo =>
    <TodoItem key={todo.id} todo={todo} />
  )
  return (
    <ul>
      {items}
    </ul>
  )
}
