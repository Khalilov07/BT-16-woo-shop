import React, { useState } from 'react';
import productService from "../../servicese/product"
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './singlecard.module.css'


const SingleCard = ({ title, price, img, setProduct }) => {

    const { id } = useParams();
    const [editMode, setEditMode] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newImg, setNewImg] = useState("")
    const [newPrice, setNewPrice] = useState(0)
    const navigate = useNavigate()

    const handleEditMode = (e) => {
        setEditMode(true)
        setNewTitle(title)
        setNewPrice(price)
        setNewImg(img)
    }

    const changeProduct = () => {
        axios.put(`http://localhost:3004/posts/${id}`, {
            title : newTitle,
            price : newPrice,
            img : newImg
        })
        .then(res => {
            setProduct(res.data)
            setEditMode(false)
        })
    }

    const deleteHandler = (e) => {
        // e.preventDefault()
        axios.delete(`http://localhost:3004/posts/${id}`)
            .then(res => {
                navigate("/shop")
            })
            .catch(err => console.log(err))
    }

    // нужно при нажатии на кнопку edit отображать поле для ввода

    return (
        <div className='single__card'>
            <div className="card__img">
                <img src={img} alt="" />
                <div className={styles.shopWrapper}>
                        <h1>jdiawdaw</h1>
                    </div>
            </div>
            <div className="card__descr">
                <h1>{title}</h1>
                <h1>{price} $</h1>
                <div className={styles.buttons}>
                    {editMode ?
                        <div className={styles.links}>
                            <TextField
                                type="text"
                                value={newTitle}
                                id='outlined-basic'
                                variant="outlined"
                                label='Введите название...' 
                                onChange={e => setNewTitle(e.target.value)}
                                />
                            <TextField
                                type="text"
                                value={newPrice}
                                style={{margin: "20px 0"}}
                                label='Введите цену...'
                                onChange={e => setNewPrice(e.target.value)}
                                id='outlined-basic' variant="outlined"
                            />
                             <TextField
                                type="text"
                                value={newImg}
                                style={{margin: "20px 0"}}
                                label='Введите цену...'
                                onChange={e => setNewImg(e.target.value)}
                                id='outlined-basic' variant="outlined"
                            />
                            <Button
                                variant="contained"
                                color="success"
                                onClick={changeProduct}
                            >
                                SAVE
                            </Button>
                        </div>
                        :
                        <>
                            <Button
                                variant="contained"
                                onClick={deleteHandler}
                                style={{ background: "red" }}
                            >
                                DELETE
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                onClick={handleEditMode}
                            >
                                EDIT
                            </Button>
                        </>

                    }
                  
                </div>

            </div>
        </div>
    );
};

export default SingleCard;