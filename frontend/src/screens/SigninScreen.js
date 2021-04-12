import React, { useState } from 'react'
export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter Email" required
                        onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="Password" id="Password" placeholder="Enter Password" required
                        onChange={(e) => setPassword(e.target.value)}>

                    </input>
                </div>

                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>

            </form>
        </div>
    )
}