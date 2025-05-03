import styles from "../css/todoitem.module.css";

export default function TodoItem({item, todos, setTodos}) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
    console.log("Delete button is clicked for", item);
  }
  return (
    <div className={styles.listItemContainer}>
      <div className={styles.listItem} key={item}>{item}</div>
      <div className={styles.deleteItem} value="">
        <button onClick={() => handleDelete(item)}>x</button>
      </div>
    </div>
  )
}
