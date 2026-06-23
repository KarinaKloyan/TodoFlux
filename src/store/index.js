import { createStore } from "redux";
const CHANGE_TEXT = "changeText";
const ADD_TODO = "addTodo";
const GET_TODO = "getTodo";
const DELETE = "deleteTodo";
const UPDATE_TODO = "updateTodo";
const TOGGLE_TODO = "toggleTodo";

export const globalState = {
  text: "",
  todos: [],
};

export const reducer = (state=globalState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: state.text, completed: false },
        ],
      };
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
              }
            : todo,
        ),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
};

export const changeTextAC = (text) => ({
  type: CHANGE_TEXT,
  payload: text,
});

export const addTodoAC = () => ({ type: ADD_TODO });

export const getTodoAC = (data) => ({ type: GET_TODO, payload: data });

export const deleteTodoAC = (id) => ({ type: DELETE, payload: id });

export const updateTodoAC = (id, title) => ({
  type: UPDATE_TODO,
  payload: { id, title },
});

export const toggleTodoAC = (id) => ({type : TOGGLE_TODO, payload: id})


export const store = createStore(reducer);
