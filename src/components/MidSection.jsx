import { useContext, useState } from "react";
import { TodoContext } from "./DataProvider";
export const MidSection = () => {
  const [todos, setTodo] = useContext(TodoContext);
  const [toggleAll, setToggleAll] = useState(false);
  const handleToggleAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      if (toggleAll) {
        todo.status = "active";
      } else {
        todo.status = "done";
      }
    });
    setTodo(newTodos);
    setToggleAll(!toggleAll);
  };
  const deleteToggled = () => {
    const newTodos = todos.filter((todo, index) => todo.status === "active");
    setTodo(newTodos);
  };
  return (
    <>
      {todos.length === 0 ? (
        <h2 style={{ color: "red" }}>You have finished all of your tasks</h2>
      ) : (
        <div className="row">
          <button id="btnToggleAll" onClick={handleToggleAll}>
            Toggle All
          </button>
          <p style={{ marginTop: "10px" }}>
            You have {todos.filter((todo) => todo.status === "active").length}{" "}
            to do
          </p>
          <button id="btnDeleteToggled" onClick={deleteToggled}>
            Delete Toggled
          </button>
        </div>
      )}
    </>
  );
};
