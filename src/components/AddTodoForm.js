import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleOnSubmit(value, isDone, event) {
    event.preventDefault();
    this.setState({ value: '' });
    this.props.addTodo(value, isDone);
  }

  handleOnChange({ target }) {
    this.setState({ value: target.value });
  }

  render() {
    return (
      <form
        noValidate
        className="AddTodoForm"
        onSubmit={ this.handleOnSubmit.bind(this, this.state.value, false) }
      >
        <div className="form-group">
          <input
            autoFocus
            type="text"
            className="form-control"
            value={ this.state.value }
            placeholder="Your next task..."
            onChange={ this.handleOnChange.bind(this) }
          />
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={ !this.state.value.trim() }
          >
            Add todo
          </button>
        </div>
      </form>
    )
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
