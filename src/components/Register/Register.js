import { useState } from "react";

const Register = () => {

	const [reg, setReg] = useState([]);

	// const [type, setType] = useState(
	// 	{
	// 		username: '',
	// 		email: '',
	// 		password: ''
	// 	}
	// )

	const handler = (e) => {
		setReg(e.target.value);
		console.log(reg)
	};

	const handlerNext = (e) => {
		setReg('');
		console.log(reg)
	};

const addReg = (e) => {
  e.preventDefault();
	const newRegItem = {
		username: '',
		email: '',
		password: ''
	}

	console.log('newRegItem', newRegItem)
};
	
	return (
		<div className="Register">

			<button onClick={handlerNext}>Next step</button>
			<form className="register__form"
						onSubmit={addReg}>
				<input 
					className="register__input" 
					onChange={handler}
					value={reg}
					type="text"
					placeholder="Enter your name"
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
