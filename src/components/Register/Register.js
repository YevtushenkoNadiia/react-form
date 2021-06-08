import './Register.scss';
import React, { useState } from "react";


const Register = () => {

	const [userData, setUserData] = useState({
			username: '',
			email: '',
			password: ''
	});

	const [step, setStep] = useState(1);
	const [users, setUsers] = useState([]);
	const [nameError, setNameError] = useState(false);

	const inputHandler = (e) => {
		const { name, value } = e.target;

		setUserData((prev) =>({
			...prev,
			[name]: value,
			}));
		};

const registerHandler = (e) => {
  e.preventDefault();
	setUsers(prevState => [...prevState, userData])
	setStep(1);
	if(nameError){
		setNameError(false)
	}
	setUserData({
		username: '',
		email: '', 
		password: '' 
	})
};

const stepHandler = () => {
	const user = users.find(user => user.username === userData.username)

	if (user) {
		return setNameError(true)
	}
	setStep(step + 1);
	// setStep((prev) => prev + 1);
};

console.log('users', users)

return (
		<form className="register"
					onSubmit={registerHandler}>
						{step === 1 ? (
						<input 
								className={`register__input ${nameError ? 'error' : ''}`}
								onChange={inputHandler}
								name="username"
								value={userData.username}
								type="text"
								placeholder="Enter your name"
						/>
						 ) : step === 2 ? (
							<input 
								className="register__input" 
								onChange={inputHandler}
								name="email"
								value={userData.email}
								type="text"
								placeholder="Enter your email"
						/>
						) : (
							<input 
								className="register__input" 
								onChange={inputHandler}
								name="password"
								value={userData.password}
								type="password"
								placeholder="Enter your password"
							/>
						)}
			{step < 3
				? <div className="register__add" style={{
					border: '1px solid red',
					padding: '5px 20px',
					marginTop: 20,
					cursor: 'pointer'
				}}
					   onClick={stepHandler}>Next step</div> : <button type="submit">Register</button>}
		</form>
);

	// return (
	// 	<div className="register">
	// 		{step < 3 ? <button onClick={stepHandler}>Next step</button> : null}
	// 		<form className="register__form"
	// 					onSubmit={registerHandler}>
	// 						{step === 1 ? (
	// 						<input 
	// 								className="register__input" 
	// 								onChange={inputHandler}
	// 								name="username"
	// 								value={userData.username}
	// 								type="text"
	// 								placeholder="Enter your name"
	// 						/>
	// 						 ) : step === 2 ? (
	// 							<input 
	// 								className="register__input" 
	// 								onChange={inputHandler}
	// 								name="email"
	// 								value={userData.email}
	// 								type="text"
	// 								placeholder="Enter your email"
	// 						/>
	// 						) : (
	// 							<input 
	// 								className="register__input" 
	// 								onChange={inputHandler}
	// 								name="password"
	// 								value={userData.password}
	// 								type="password"
	// 								placeholder="Enter your password"
	// 							/>
	// 						)}
				
	// 			<button type="submit">Register</button>
	// 		</form>
	// 	</div>
	// );



};

export default Register;








