import { useContext, useState } from "react";
import { TodoContext } from "./DataProvider";
export const Filter = () => {
  const [todos, setTodo, filter, setFilter] = useContext(TodoContext);
  return (
    <div className="row filter">
      <h3>Filter</h3>
      <div>
        <button
          onClick={() => {
            setFilter("all");
          }}
          id="btnAll"
          className={filter === "all" ? "btnClick" : ""}
        >
          All
        </button>
        <button
          onClick={() => {
            setFilter("done");
          }}
          id="btnDone"
          className={filter === "done" ? "btnClick" : ""}
        >
          Done
        </button>
        <button
          onClick={() => {
            setFilter("active");
          }}
          id="btnActive"
          className={filter === "active" ? "btnClick" : ""}
        >
          Active
        </button>
      </div>
    </div>
  );
};
