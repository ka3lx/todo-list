import styles from "./styles.module.css";
import Item from "../Item/Item";

import { Todo } from "../../types/todo";
import Footer from "../Footer/Footer";
import { useMemo } from "react";

type TodoListProps = {
  todos: Todo[];
  updateTodo: (todoList: Todo[]) => void;
};

function TodoList({ todos, updateTodo }: TodoListProps) {
  function toggleDone(todo: Todo) {
    const list: Todo[] = [...todos];
    const index = list.findIndex((t) => t.id === todo.id);
    list[index].isDone = !list[index].isDone;
    updateTodo(list);
  }

  function deleteTodo(id: string) {
    const filteredList = todos.filter((t) => t.id !== id);
    updateTodo(filteredList);
  }

  function clearCompleted() {
    const inCompleteItems = todos.filter((t) => t.isDone !== true);
    updateTodo(inCompleteItems);
  }

  const remainingTodos = useMemo(
    () => todos.filter((t) => t.isDone === false).length,
    [todos]
  );

  return (
    <div className={styles.container}>
      {todos.map(({ isDone, description, id }) => (
        <Item
          id={id}
          isDone={isDone}
          description={description}
          key={id}
          deleteItem={deleteTodo}
          markItemDone={toggleDone}
        />
      ))}
      {todos.length > 0 && (
        <Footer remaining={remainingTodos} clearCompleted={clearCompleted} />
      )}
    </div>
  );
}

export default TodoList;
