import { useEffect, useReducer } from "react";
import {
  globalState,
  reducer,
  changeTextAC,
  addTodoAC,
  getTodoAC,
} from "./store";
import "./App.css";
import { API } from "./api";
import InputTodo from "./InputTodo/InputTodo";

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  useEffect(() => {
    API.getTodo(dispatch);
  }, []);
  console.log(state.todos);
  return (
    <div className="app">
      <h2>YOUR TODO LIST</h2>
      <div className="add-block">

      <input
        value={state.text}
        onChange={(e) => dispatch(changeTextAC(e.target.value))}
        />
      <button onClick={() => dispatch(addTodoAC())}>Add</button>
        </div>

      <InputTodo todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
