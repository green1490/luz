'use client';

import { useState } from "react";
import Snackbar from '@mui/material/Snackbar'
import Button from '@mui/material/Button'
import TextField  from "@mui/material/TextField"
import Alert from '@mui/material/Alert'

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(false)

    const handleErrorClose = () => {
        setError(false)
    }
    const handleOpenClose = () => {
        setOpen(false)
    }

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
            setError(true)
        }
        else {
            setOpen(true)
        }
    }
    
    return (
        <>
            <div 
                className="h-screen grid place-items-center bg-black">
                <div 
                    className="font-['Times_New_Roman'] text-7xl">
                    Luz
                </div>
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <div 
                    className="text-center">
                    <TextField
                        variant="outlined"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    <p 
                        className="row-start-4">
                        Dont have an account? 
                        <a className="pl-2 text-blue-700/80" href="/registration">
                            Sign Up
                        </a>
                    </p>
                </div>
                <Button 
                    variant="outlined" 
                    color="success"
                    className=""
                    onClick={login}>
                        Log in
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleOpenClose}>
                    <Alert>
                        Succesful login
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={error}
                    autoHideDuration={3000}
                    onClose={handleErrorClose}>
                    <Alert
                        severity="error">
                        Unsuccessful login
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}