import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './create.css'
import productServices from '../../servicese/product';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const CreateCard = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [img, setImg] = useState("")
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState('');
    const navigate = useNavigate()

    const handleClouse = () => {
        setOpen(false)
    }

    const addCard = (e) => {
        e.preventDefault()
        const newPost = {
            title,
            price,
            category,
            img
        }
        productServices
            .createProduct(newPost)
            .then((res) => {
                setPrice("")
                setTitle("")
                setImg("")
                setCategory("")
                setOpen(true)
                navigate("/shop")
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <form onSubmit={addCard}>

                <h1>Create Product</h1>

                <TextField
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    id='outlined-basic'
                    variant="outlined"
                    label='Введите название...' />

                <TextField
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    type="text"
                    label='Введите цену...'
                    id='outlined-basic' variant="outlined"
                    style={{ margin: "20px 0" }}
                />

                <TextField
                    value={img}
                    onChange={e => setImg(e.target.value)}
                    type="text"
                    label='Путь картинки...'
                    id='outlined-basic'
                    variant="outlined" />

                <Box sx={{ minWidth: 120 }} style={{ marginTop: "20px" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Category"
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <MenuItem value={"Пальто"}>Пальто</MenuItem>
                            <MenuItem value={"Свитшоты"}>Свитшоты</MenuItem>
                            <MenuItem value={"Кардиганы"}>Кардиганы</MenuItem>
                            <MenuItem value={"Толстовки"}>Толстовки</MenuItem>
                            <MenuItem value={"Футболки"}>Футболки</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button variant="contained" type='submit' style={{ marginTop: "20px" }}>Отправить</Button>
            </form>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClouse}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Продукт создан!
                </Alert>
            </Snackbar>
        </>

    );
};

export default CreateCard;