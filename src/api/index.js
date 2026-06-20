import axios from "axios";
import { getTodoAC, deleteTodoAC, updateTodoAC } from "../store";

export const API = {
  getTodo(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => dispatch(getTodoAC(res.data)));
  },
  deleteTodo(dispatch, id) {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => dispatch(deleteTodoAC(id)));
  },
  editTodo(dispatch, id, title) {
    axios
      .patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: title,
      })
      .then((res) => dispatch(updateTodoAC(id, title)));
  },
};
