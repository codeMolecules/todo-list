import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from '../actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map((todo) => 
        (todo.id === action.payload)
          ? { ...todo, isDone: !todo.isDone }
          : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todos;
