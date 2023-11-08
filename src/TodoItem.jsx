import React from "react";

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
          <button
            onClick={() => deleteTodo(id)} //pass function
            className="btn btn-danger"
          >
            Delete
          </button>
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
