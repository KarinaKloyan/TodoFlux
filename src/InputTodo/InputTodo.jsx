import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodoAC } from "../store";
import { API } from "../api";
import "./InputTodo.css";

function InputTodo({ todos }) {
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const editStart = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const saveEdit = (id) => {
    if (editTitle.trim()) {
      API.editTodo(dispatch, id, editTitle);
    }

    setEditId(null);
    setEditTitle("");
  };

  const handleDelete = (id) => {
    API.deleteTodo(dispatch, id);
  };

  return (
    <div className="todo-list">
      {todos?.map((todo) => (
        <div className="todo-item" key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                className="edit-input"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <button className="save-btn" onClick={() => saveEdit(todo.id)}>
                Save
              </button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodoAC(todo.id))}
              />

              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>

              <button className="edit-btn" onClick={() => editStart(todo)}>
                Edit
              </button>
            </>
          )}

          <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default InputTodo;
