import { useState } from 'react';
import { signupFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";

const fields = signupFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

export default function Signup() {
    const [signupState, setSignupState] = useState(fieldsState);

    const handleChange = (e) => setSignupState({ ...signupState, [e.target.id]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(signupState);
        createAccount();
    }

    // Handle Signup API Integration here
    const createAccount = () => {
        // Password Validation
        const password = signupState.password; // Assuming 'password' is the id for the password field
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long, include at least one uppercase letter, one special character, and one number.");
            return;
        }
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
