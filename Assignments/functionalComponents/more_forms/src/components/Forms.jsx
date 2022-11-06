import React, {useState} from 'react'

const Forms = (props) => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {

        e.preventDefault()
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }
    
    
    setHasBeenSubmitted( true );
    // props.addToUserState(newUser)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is Required!")
        } else if (e.target.value.length < 2) {
            setFirstNameError("First Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is Required!")
        } else if (e.target.value.length < 2) {
            setLastNameError("Last Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is Required!")
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is Required!")
        } else if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 1) {
            setConfirmPasswordError("ConfirmPassword is Required!")
        } else if (e.target.value.length < 8) {
            setConfirmPasswordError("ConfirmPassword must be 8 characters or longer!");
        } else if (e.target.value != password) {
            setConfirmPasswordError("ConfirmPassword must match Password")
        } else {
            setConfirmPasswordError("");
        }
    }

  return (
    <>
        <form onSubmit={createUser}>
            <div>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }
                <label >First Name: </label>
                
                <input onChange={handleFirstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={handleLastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input onChange={handleEmail}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={handlePassword}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={handleConfirmPassword}/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            
        </form>
    </>
  )
}

export default Forms