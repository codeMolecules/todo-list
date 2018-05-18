import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ value, isDone, toggleTodo, removeTodo }) => (
  <li className="Todo list-group-item">
    <div className="form-check ellipsis">
      <input
        type="checkbox"
        checked={ isDone }
        className="form-check-input"
        onChange={ toggleTodo }
      />
      <label
        className="task-content form-check-label"
        style={{
          textDecoration: isDone ? 'line-through' : 'none'
        }}
      >
        { value }
      </label>
    </div>
    <button
      type="button"
      onClick={ removeTodo }
      className="btn btn-outline-danger btn-sm"
    >
      Delete
    </button>
  </li>
);

Todo.propTypes = {
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default Todo;
