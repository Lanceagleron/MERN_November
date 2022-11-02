import React, {useState} from 'react'

const Forms = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
        <form action="">
            <div>
                <label >First Name: </label>
                <input onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
        </form>
        <h4>Your Form Data</h4>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
    </>
  )
}

export default Forms