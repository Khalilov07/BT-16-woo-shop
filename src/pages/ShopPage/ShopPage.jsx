import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './shoppage.css'
import productServices from '../../servicese/product';
import { CustomContext } from '../../utils/Context';
import { FadeLoader } from 'react-spinners';

const ShopPage = () => {

    const { clothes } = useContext(CustomContext)
    const [status, setStatus] = useState('all')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    return (
        <div className='shop__wrapper'>


            <ul className='shop__lists'>
                <li className={`${status === 'all' && 'active'}`} onClick={() => setStatus('all')}>Все</li>
                <li className={`${status === 'пальто' && 'active'}`} onClick={() => setStatus('пальто')}>Пальто</li>
                <li className={`${status === 'свитшот' && 'active'}`} onClick={() => setStatus('свитшот')}>Свитшоты</li>
                <li className={`${status === 'кардиган' && 'active'}`} onClick={() => setStatus('кардиган')}>Кардиганы</li>
                <li className={`${status === 'толстовка' && 'active'}`} onClick={() => setStatus('толстовка')}>Толстовки</li>
            </ul>
            <p>Показано: 9 из 12 товаров</p>
            {loader ?
                <div className='fadeLoader' style={{ display: "flex", justifyContent: "center" }}>
                    <FadeLoader />
                </div>
                :
                <>
                    <div className="cards">
                        {clothes.filter((item) => {
                            if (status === 'all') {
                                return item
                            } else {
                                return item.category === status
                            }

                        }).map(item =>
                        (
                            <Card item={item} key={item.id} />
                        )
                        )}
                    </div>
                </>
            }
        </div>
    );
};

export default ShopPage;