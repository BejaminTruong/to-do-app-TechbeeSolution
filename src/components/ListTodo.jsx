import { useContext, useState } from "react";
import { TodoContext } from "./DataProvider";
import { TodoItems } from "./TodoItems";
const FILTER_MAP = {
  all: () => true,
  active: (todo) => todo.status === "active",
  done: (todo) => todo.status === "done"
};
export const ListTodo = () => {
  const [todos, setTodo, filter] = useContext(TodoContext);

  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        if (todo.status === "done") {
          todo.status = "active";
        } else {
          todo.status = "done";
        }
      }
    });
    setTodo(newTodos);
  };
  const handleEditTodo = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue;
      }
    });
    setTodo(newTodos);
  };
  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if (index === id) {
        newTodos.splice(index, 1);
      }
    });
    setTodo(newTodos);
  };
  return (
    <ul>
      {todos.filter(FILTER_MAP[filter]).map((todo, index) => (
        <TodoItems
          todo={todo}
          key={index}
          id={index}
          checkComplete={checkComplete}
          handleEditTodo={handleEditTodo}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
