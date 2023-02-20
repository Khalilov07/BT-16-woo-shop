import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCard from '../../components/SingleCard/SingleCard';
import './singlepage.css'

const SinglePage = () => {

    const { id } = useParams()

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => setProduct(res.data))
    }, []) 

    return (
        <>
            <SingleCard setProduct={setProduct} title={product.title} price={product.price} img={`.${product.img}`} key={product.id} />    
        </>
    );
};

export default SinglePage;