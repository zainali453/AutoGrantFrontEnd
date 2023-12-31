import { useState } from "react";
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({ handleLogin, isLoggedIn }) {
  const [loginState, setLoginState] = useState(fieldsState);
  const [loginError, setLoginError] = useState('');
  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('')
    await authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async () => {
    await axios
      .post("http://localhost:4000/signin", {
        email: loginState["email-address"],
        password: loginState.password,
      })
      .then(function (response) {
        const { email, roles, accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        const value = localStorage.getItem('accessToken')
        console.log(value)
        if (roles) {
          handleLogin(true, roles[0]);
          isLoggedIn = true;
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoginError('Email or Password is incorrect');
      });
  };
  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
