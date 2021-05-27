import { useContext, useState, useRef, useEffect } from "react";
import { TodoContext } from "./DataProvider";
export const FormInput = () => {
  const [todos, setTodo] = useContext(TodoContext);
  const [todoInput, setTodoInput] = useState("");
  const todoFocus = useRef();
  useEffect(() => {
    todoFocus.current.focus();
  });
  const addTodo = (e) => {
    e.preventDefault();
    setTodo([...todos, { name: todoInput, status: "active" }]);
    setTodoInput("");
  };
  return (
    <form autoComplete="off" onSubmit={addTodo}>
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="What need to be done?"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        ref={todoFocus}
      />
      <button type="submit">Add</button>
    </form>
  );
};
