'use client';

import { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'
export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [failedLogin,setFailedLogin] = useState(false)

    const login = async () => {
        let result = await fetch('http://localhost:5246/login/?' + new URLSearchParams({
            Email:email,
            Password: password
        }), {
            method:'GET',
            mode:'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        if (!result.ok) {
            setFailedLogin(true)
        }
    }
    
    return (
        <>
            <div 
                className="h-screen grid place-items-center bg-gradient-to-r from-slate-500 to-green-500">
                <p 
                    className="font-['Times_New_Roman'] text-7xl">
                    Luz
                </p>
                <input 
                    autoComplete="off" 
                    className="rounded px-2 outline outline-1 bg-transparent h-10" 
                    placeholder="Email" 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    name="email">
                </input>
                <div 
                    className="text-center">
                    <input 
                        autoComplete="off" 
                        className="rounded px-2 outline outline-1 bg-transparent h-10" 
                        placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={p => setPassword(p.target.value)} 
                        name="password">
                    </input>
                    <p 
                        className="row-start-4">
                        Dont have an account? 
                        <a className="pl-2 text-blue-700/80" href="/registration">
                            Sign Up
                        </a>
                    </p>
                </div>
                <button 
                    onClick={login} 
                    className="rounded row-start-6 w-64 outline outline-offset-2 outline-1 text-xl">
                        Log in
                </button>
                <div 
                    className="rounded-full flex justify-center items-center bottom-3 h-10 w-80 fixed bg-red-500"
                    style={{visibility: failedLogin ? 'visible' :  'hidden'}}>
                    <span>
                        Wrong email or password 
                        <div
                            className="absolute top-0 right-0"
                            onClick={_ => setFailedLogin(false)}>
                            <AiFillCloseCircle size={20}/>
                        </div>
                    </span>
                </div>
            </div>
        </>
    )
}