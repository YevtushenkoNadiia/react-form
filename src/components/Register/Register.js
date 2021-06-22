import { useState } from "react";

const Register = () => {
  const [reg, setReg] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [step, setStep] = useState(1);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setReg((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const stepHandler = () => {
    setStep((prev) => prev + 1);
    // setStep(step + 1);
  };

  const addReg = (e) => {
    e.preventDefault();
    setReg({ username: "", email: "", password: "" });
    setStep(1);
  };

  return (
    <div className="Register">
      {step < 3 ? <button onClick={stepHandler}>Next step</button> : null}
      <form className="register__form" onSubmit={addReg}>
        {step === 1 ? (
          <input
            className="register__input"
            onChange={inputHandler}
            name="username"
            value={reg.username}
            type="text"
            placeholder="Enter your name"
          />
        ) : step === 2 ? (
          <input
            className="register__input"
            onChange={inputHandler}
            name="email"
            value={reg.email}
            type="text"
            placeholder="Enter your email"
          />
        ) : (
          <input
            className="register__input"
            onChange={inputHandler}
            name="password"
            value={reg.password}
            type="password"
            placeholder="Enter your password"
          />
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
