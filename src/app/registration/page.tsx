'use client';

import { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function Registration() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('')
    const [registrationFailed, setRegistrationFailed] = useState(false)
    const [open, setOpen] = useState(false)

    const handleOpenClose = () => {
        setOpen(false)
    }

    const handleregistrationFailedClose = () => {
        setRegistrationFailed(false)
    }

    const registration = async () => {
        let result = await fetch('http://localhost:5246/registration', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: userName,
                password: password
            })
        })

        if (!result.ok) {
            setRegistrationFailed(true)
        } else {
            setOpen(true)
        }
    }

    return (
        <>
            <div 
                className="h-screen grid place-items-center">
                <p 
                    className="font-['Times_New_Roman'] text-7xl">
                    Luz
                </p>
                <TextField
                    value={email}
                    variant="outlined"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    label='Email'/>
                <TextField
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    label="Name"/>
                <div 
                    className="text-center">
                    <TextField
                        type="password"
                        value={password}
                        onChange={p => setPassword(p.target.value)}
                        label="Password"/>
                    <p 
                        className="row-start-4">
                        Have an account?
                        <a className="pl-2 text-blue-700/80" href="/login">
                            Login
                        </a>
                    </p>
                </div>
                <Button
                    onClick={registration}
                    variant="outlined"
                    color="primary">
                        Sign Up
                </Button>
                <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleOpenClose}>
                    <Alert>
                        Succesful registration
                    </Alert>
                </Snackbar>
                <Snackbar
                    open={registrationFailed}
                    autoHideDuration={3000}
                    onClose={handleregistrationFailedClose}>
                    <Alert
                        severity="error">
                        Unsuccessful registration
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}