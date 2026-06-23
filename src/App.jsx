import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextAC, addTodoAC } from "./store";
import "./App.css";
import { API } from "./api";
import InputTodo from "./InputTodo/InputTodo";

function App() {
  const dispatch = useDispatch();

  const text = useSelector((state) => state.text);
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    API.getTodo(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <h2>YOUR TODO LIST</h2>

      <div className="add-block">
        <input
          value={text}
          onChange={(e) => dispatch(changeTextAC(e.target.value))}
        />

        <button className="add-btn" onClick={() => dispatch(addTodoAC())}>
          Add
        </button>
      </div>

      <InputTodo todos={todos} />
    </div>
  );
}

export default App;
