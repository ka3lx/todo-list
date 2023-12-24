import { useState } from "react";
import { v4 as uuid } from "uuid";

import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

import { Todo } from "./types/todo";

import "./App.css";

const getInitialList: () => Todo[] = () => {
  const localList = localStorage.getItem("todos") as unknown as Todo[];
  if (localList) return localList;
  return [];
};

function App() {
  const [todoList, setTodoList] = useState<Todo[]>(getInitialList);

  function handleAdd(description: string) {
    const newItem: Todo = { id: uuid(), description, isDone: false };
    setTodoList((list) => [...list, newItem]);
  }

  function updateTodo(updatedTodoList: Todo[]) {
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <main>
        <div className='container'>
          <AddTodo handleAdd={handleAdd} />
          <TodoList todos={todoList} updateTodo={updateTodo} />
        </div>
      </main>
    </>
  );
}

export default App;
