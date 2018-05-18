export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let todoId = 0;
let persistedTodos = null;
const store = JSON.parse(localStorage.getItem('persist:root'));

if (store) {
  persistedTodos = JSON.parse(store.todos);
}

export const addTodo = (value, isDone) => {
  if (persistedTodos
   && persistedTodos.length
   && todoId < persistedTodos[persistedTodos.length - 1].id
  ) {
    todoId = persistedTodos[persistedTodos.length - 1].id + 1;
  }

  return {
    type: ADD_TODO,
    payload: {
      value,
      isDone,
      id: todoId++
    }
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});
