import { useState } from 'react';
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const fields = signupFields;
let fieldsState = {};
let navigate = useNavigate;
fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);
    const [passwordError, setPasswordError] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false);

    const handleChange = (e) => {
        if (e.target.id === 'password' || e.target.id === 'confirm-password') {
            setPasswordError('');
            if (e.target.id === 'password') {
                setPasswordTouched(true);
            }
        }
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(signupState.password)) {
            setPasswordError("Password must be at least 8 characters long, include at least one uppercase letter, one special character, and one number.");
        } else if (signupState.password !== signupState["confirm-password"]) {
            setPasswordError("The passwords do not match.");
        } else {
            createAccount();
        }
    };

    // Handle Signup API Integration here
    const createAccount = async () => {
        // Password Validation
        try {
            await axios
                .post("http://localhost:4000/signup", {
                    email: signupState["email-address"], password: signupState.password
                })
                .then(function (response) {
                    navigate("/dashboard")
                })
                .catch(function (error) {
                    console.log(error);
                });
            // Proceed with account creation...
        } catch (error) {
            console.log(error)
        }

    }

    // Password Validation Function
    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
        console.log(regex.test(password))
        return regex.test(password);
    }

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="">
                {
                    fields.map(field => (
                        <div key={field.id} className="mb-4">
                            <Input
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
                            {field.id === 'password' && passwordTouched && !validatePassword(signupState.password) && (
                                <p className="text-red-500 text-sm">
                                    Password must be at least 8 characters long, include at least one uppercase letter, one special character, and one number.
                                </p>
                            )}
                            {field.id === 'password' && passwordError && (
                                <p className="text-red-500 text-sm">{passwordError}</p>
                            )}
                            {field.id === 'confirm-password' && passwordError && (
                                <p className="text-red-500 text-sm">{passwordError}</p>
                            )}
                        </div>
                    ))
                }
                <FormAction handleSubmit={handleSubmit} text="Signup" />
            </div>
        </form>
    );
}
