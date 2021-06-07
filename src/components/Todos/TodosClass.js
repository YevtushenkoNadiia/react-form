import React, { Component } from 'react';

class TodoClass extends Component {

	state = {
		newTodo: '',
		todos: [],
	}
	
	addTodo = (e) => {
		e.preventDefault();

		const newTodoItem = {
			id: Date.now(),
			text: this.state.newTodo,
			status: 'new'
	}

		this.setState((prevState) => (
			{
				newTodo: '',
				todos: [newTodoItem, ...prevState.todos]
			}
		))
	}

	inputChange = (e) => {
		this.setState({newTodo: e.target.value}, () => {
			console.log(this.state.newTodo)
		})
	}
	
	render () {
		const {newTodo, todos} = this.state
		
		return (
			<div className="todos">
		<form className="todos__form" 
					onSubmit={this.addTodo}>
			<input 
				type="text" 
				value={newTodo}
			 	onChange={this.inputChange}
			  placeholder="Your new todo..." 
			/>
			<button type="submit">Add todo</button>
		</form>
		<div className="todos__list">
			{todos.length 
				? (todos.map(({ id, text:other }) => {
					return (
						<div className="todos__item" key={id}>
						{other}
						</div>
					);
				})) 
				: <h2>No todos...</h2>}
		</div>
		</div>
		);
	}
}

export default TodoClass;