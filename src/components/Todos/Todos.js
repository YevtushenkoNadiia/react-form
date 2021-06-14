import "./Todos.scss";
import {
	Button,
	Checkbox,
	Switch,
	FormControl,
	InputLabel, MenuItem, Select,
	TextField,
} from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { STATUSES } from "../../constants";


const Todos = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
	const [newTodo, setNewTodo] = useState('');
	const [switchTodo, setSwitchTodo] = useState(false);
	const [editTodo, setEditTodo] = useState(false);

	const editChangeHandler = (e) => {
		setTodos(e.target.value);
	};

	const handleEdit = () => {
		setEditTodo(!editTodo);
	};

	const switchHandler = ({ target: { checked } }) => {
		setSwitchTodo(checked);
	};

	const inputChange = (e) => {
		setNewTodo(e.target.value);
	};

	const addTodo = (e) => {
		e.preventDefault();
		const newTodoItem = {
			id: Date.now(),
			text: newTodo,
			status: 'new',
		}

		setTodos((prevState) => [newTodoItem, ...prevState])
		setNewTodo('')

	};

	function statusHandler (id) {
		const newTodos = todos.map(todo => {
			if(todo.id === id) {
				if (todo.status !== 'done'){
					return {...todo, status:'done'}
				}
				return {...todo, status:'new'}
			}
			return todo
		})
		setTodos(newTodos)
	}

	function changeStatus (e, id) {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return {...todo, status: e.target.value}
			}
			return todo
		})

		setTodos(newTodos)
	}

	function deleteTodo (id) {
		setTodos(todos.filter(todo=>todo.id !== id))
	}

	function saveTodos () {
		localStorage.setItem('todos', JSON.stringify(todos))
	}

	useEffect(()=>{
		console.log('useEffect')

		return ()=>{
			// ...
		}
	},[todos])

	return (
		<div className="todos">
			<form className="todos__form"
				  onSubmit={addTodo}>
				<TextField label="Your new todo..."
						   type="text"
						   size="small"
						   name="todo"
						   value={newTodo}
						   onChange={inputChange}
						   variant="outlined" />
				<Button variant="contained"
						type="submit"
						color="primary">Add todo</Button>
			</form>
			{todos.length ? <Button variant="outlined"
									color="primary"
									className="todos__save"
									onClick={saveTodos}>Save todos</Button> : null}
			<div className="todos__autosave">
				<Switch
					color="primary"
					checked={switchTodo}
					onChange={switchHandler}
				/>
				Autosave
			</div>
			<div className="todos__list">
				{todos.length
					? (todos.map(({id, text, status}) => {
						return (
							<div className="todos__item"
								 key={id}>
								<Checkbox
									color='defaults'
									checked={status === 'done'}
									onChange={() => statusHandler(id)}
								/>
								{!editTodo ? (<TextField
												type="text"
												value={text}
												name="todo"
												onChange={editChangeHandler}/>)
									: <p className='todos__text'>{text}</p>}
								<div className="todos__actions">
									<FormControl className="todos__select">
										<InputLabel>Status</InputLabel>
										<Select
											value={status}
											onChange={function (e) {
											return changeStatus(e,id)
										}}
										>
											{STATUSES.map(status => (
												<MenuItem value={status} key={status}>{status}</MenuItem>
												))}
										</Select>
									</FormControl>
									<Button className="todos__edit" startIcon={<Edit />}
											variant="contained"
											color="primary"
											size="small"
											onClick={handleEdit}>Edit</Button>
									<Button className="todos__delete" startIcon={<Delete />}
											variant="contained"
											color="secondary"
											size="small"
											onClick={() => deleteTodo(id)}>Delete</Button>

								</div>
							</div>
						);
					}))
					: <h2>No todos...</h2>}
			</div>
		</div>
	);
};

export default Todos;
















// import './Todos.scss';
// import { useState } from "react";

// const Todos = () => {

// const [todos, setTodos] = useState([
// 	{
// 	  id:1,
// 	  text:"first todo",
// 		status: 'new'
//   },
// 	{
// 		id:2,
// 		text:"second todo",
// 		status: 'new'
// 	},
// 	{
// 		id:3,
// 		text:"third todo",
// 		status: 'new'
// 	},
// ]);

// const [todos, setTodos] = useState([]);

// const [newTodo, setNewTodo] = useState('');

// const inputChange = (e) => {
// 	setNewTodo(e.target.value);
// };

// const addTodo = (e) => {
//   e.preventDefault();
// 	const newTodoItem = {
// 		id: Date.now(),
// 		text: newTodo,
// 		status: 'new'
// 	}

// 	setTodos((prevState) => [newTodoItem, ...prevState])
// 	setNewTodo('')
// 	console.log('newTodoItem', newTodoItem)
// };

// const [tests, setTests] = useState({
// 	value1: '',
// 	value2: '',
// });

// const testHandler = (e) => {
// 	setTests(prevState =>({
// 		...prevState,
// 		[e.target.name]: e.target.value,
// 	}))
// }

// console.log(tests)

// 	return (
// 		<div className="todos">
// 		<form className="todos__form" 
// 					onSubmit={addTodo}>
// 			<input 
// 				type="text" 
// 				value={newTodo}
// 			 	onChange={inputChange}
// 			  placeholder="Your new todo..." 
// 			/>
// 			<input 
// 				type="text" 
// 				value={tests.value1}
// 				name="value1"
// 			 	onChange={testHandler}
// 			  placeholder="Your new todo...222" 
// 			/>
// 			<input 
// 				type="text" 
// 				value={tests.value2}
// 				name="value2"
// 			 	onChange={testHandler}
// 			  placeholder="Your new todo...333" 
// 			/>
// 			<button type="submit">Add todo</button>
// 		</form>
// 		<div className="todos__list">
// 			{todos.length 
// 				? (todos.map(({ id, text:other }) => {
// 					const finalText = other + 1;
// 					return (
// 						<div className="todos__item" key={id}>
// 						{other}
// 						</div>
// 					);
// 				})) 
// 				: <h2>No todos...</h2>}
// 		</div>
// 		</div>
// 	);
// };

// export default Todos;







