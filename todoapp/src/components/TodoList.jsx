import TodoItem from "./TodoItem";
import styles from "../css/todolist.module.css";

export default function TodoList({ todo, todos, setTodos }) {
  return (
    <div className={styles.todosContainer}>
      <div className={styles.todosWrapper}>
        {todos.map((item) => (
          <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
        ))}
      </div>
      <br />
    </div>
  );
}
