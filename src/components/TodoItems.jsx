import { useState } from "react";
export const TodoItems = ({
  todo,
  id,
  checkComplete,
  handleEditTodo,
  handleDelete
}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);
  const handleOnEdit = () => {
    setOnEdit(true);
  };
  const handleSave = (id) => {
    setOnEdit(false);
    if (editValue) {
      handleEditTodo(editValue, id);
    } else {
      setEditValue(todo.name);
    }
  };
  if (onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          name="editValue"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <div className="btnActions">
          <button
            onClick={() => {
              handleSave(id);
            }}
          >
            Save
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.status === "done" ? "done" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.status === "done" ? true : false}
            onChange={() => {
              checkComplete(id);
            }}
          />
          {todo.name}
        </label>
        <div className="btnActions">
          <button
            disabled={todo.status === "done" ? true : false}
            id="btnEdit"
            onClick={handleOnEdit}
          >
            Edit
          </button>
          <button
            disabled={todo.status === "done" ? true : false}
            id="btnDelete"
            onClick={() => {
              handleDelete(id);
            }}
          >
            X
          </button>
        </div>
      </li>
    );
  }
};
