import { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();
export const DataProvider = (props) => {
  const [todos, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todoData"));
    if (todoData) setTodo(todoData);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={[todos, setTodo, filter, setFilter]}>
      {props.children}
    </TodoContext.Provider>
  );
};
