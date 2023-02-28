import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './registerpage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const postRegister = (e) => {
        e.preventDefault()
        const newUser = {
            email,
            login,
            password
        }
        axios
            .post('http://localhost:3004/user', newUser)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div className='form__wrapper'>
            <form onSubmit={postRegister}>
                <h1>Register</h1>
                <h2>{user.login}</h2>
                <TextField value={email} onChange={e => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                <TextField value={login} onChange={e => setLogin(e.target.value)} style={{ margin: "20px 0" }} id="outlined-basic" label="Login" variant="outlined" />
                <TextField value={password} onChange={e => setPassword(e.target.value)} style={{ marginBottom: "20px" }} id="outlined-basic" label="Password" variant="outlined" type="password" />
                <Button type='submit' variant="contained">Войти</Button>
                <Link style={{marginTop: "20px"}} to='/login'>Если у вас уже есть аккаунт...</Link>
            </form>
        </div>
    );
};

export default RegisterPage;