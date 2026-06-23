import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3000/login",
                {
                    email,
                    password,
                },
                { withCredentials: true }
            );
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className="flex justify-center my-10">
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Login to DevTinder</h2>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email ID</legend>
                            <input type="text" className="input" placeholder="Your Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Password</legend>
                            <input type="password" className="input" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </fieldset>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login