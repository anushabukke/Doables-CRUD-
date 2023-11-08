import React from "react";
import TodoItem from "./TodoItem";

const Todolist = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {/* above short circuting and returning if stmt is true */}
        {todos.map((todo) => {
          return (
            //assign a diff key for every element in list in react, so it will easy to modify,delete....
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;
