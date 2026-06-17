import { useState } from "react";
import { deleteTodoAC, updateTodoAC } from "../store";
import "./InputTodo.css";

function InputTodo({ todos, dispatch }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const editStart = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const saveEdit = (id) => {
    if (editTitle.trim()) {
      dispatch(updateTodoAC(id, editTitle));
    }

    setEditId(null);
    setEditTitle("");
  };
  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id} className="todo-item">
          <input type="checkbox" checked={todo.completed} readOnly />

          {editId === todo.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button onClick={() => saveEdit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.title}</span>

              <button onClick={() => editStart(todo)}>Edit</button>
            </>
          )}

          <button onClick={() => dispatch(deleteTodoAC(todo.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputTodo;
