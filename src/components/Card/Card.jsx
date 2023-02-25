import React, { useContext } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { CustomContext } from '../../utils/Context';

const Card = ({ item }) => {
    const { addBasket, basket, plusBasket, minusBasket } = useContext(CustomContext)


    return (
        <div className='card'>
            <Link to={`/product/${item.id}`}>
                <img src={item.img} alt="" />
            </Link>

            <Link to={`/product/${item.id}`} style={{margin: "24px 0 7px", textDecoration: "none"}}>{item.title}</Link>
            <p>{item.price}$</p>

            {basket.findIndex(product => product.id === item.id) > -1

                ? <div>
                    <button type='button' onClick={() => plusBasket(item.id)}>+</button>
                    <button type='button' onClick={() => minusBasket(item.id)}>-</button>
                    <div className='count'>
                        {basket.find(product => product.id === item.id).count}
                    </div>
                </div>
                : <button className="button__card" onClick={() => addBasket(item)} type='button'>В корзину</button>
            }
        </div >
    );
};

export default Card;