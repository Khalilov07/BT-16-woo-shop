import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './loginform.module.css'

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")

    const postLogin = (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        axios
            .post('http://localhost:3004/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={postLogin} className={styles.form}>
                <h1>Login</h1>
                <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    id="outlined-basic"
                    label="Login"
                    variant="outlined"
                />
                <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{margin: "20px 0"}}
                />
                <Button type='submit' variant="contained">Войти</Button>
                <Link  to="/reg">Если вы ещё не зарегестрированы...</Link>
            </form>
        </div>
    );
};

export default LoginForm;