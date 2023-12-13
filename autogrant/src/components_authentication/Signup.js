import { useState } from 'react';
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    let navigate = useNavigate();
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState);
        createAccount();
    }

    // Handle Signup API Integration here
    const createAccount = async () => {
        // Password Validation
        const password = signupState.password; 
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long, include at least one uppercase letter, one special character, and one number.");
            return;
        }
        await axios
      .post("http://localhost:4000/signup", {
        email:signupState["email-address"],password:signupState.password
      })
      .then(function (response) {
        navigate("/dashboard")
      })
      .catch(function (error) {
        console.log(error);
      });
        // Proceed with account creation...
    }

    // Password Validation Function
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    )
}
