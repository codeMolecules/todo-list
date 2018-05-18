import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { toggleTodo, removeTodo } from '../actions';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  renderHeading() {
    const { todos } = this.props;
    return (todos.length)
      ? `Your tasks`
      : 'You have "nothing" to do...';
  }

  renderTodoList() {
    const { todos, toggleTodo, removeTodo } = this.props;
    return todos.map((todo) => 
      <Todo
        { ...todo }
        key={ `todo-${ todo.id }` }
        toggleTodo={ () => toggleTodo(todo.id) }
        removeTodo={ () => removeTodo(todo.id) }
      />
    );
  }

  render() {
    const { todos, toggleTodo, removeTodo } = this.props;
    return (
      <div className="TodoList">
        <h3 className="text-center">
          { this.renderHeading() }
        </h3>
        <ul className="list-group">
          { this.renderTodoList() }
        </ul>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = {
  toggleTodo,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
