import axios from "axios";
import { getTodoAC } from "../store";

export const API = {
  getTodo(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => dispatch(getTodoAC(res.data)));
  },
};