
import React, { useContext } from 'react';
import { CustomContext } from '../../utils/Context';
import Card from '../../components/Card/Card';
import styles from './homepage.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HomePage = () => {
    const { clothes, addBasket } = useContext(CustomContext)
    return (
        <>
            <div className={styles.newAdmission}>
                <div className={styles.leftAdmission}>
                    <h1>Новые поступления
                        в этом сезоне</h1>
                    <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                    <button>Открыть магазин</button>
                </div>
                <div className={styles.rightAdmission}>
                    <img src='/images/homePageImg.png' alt="" />
                </div>
            </div>
            <div className='shop__wrapper'>
                <h1>Новая коллекция</h1>
                <Swiper
                    slidesPerView={3}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        clothes.map(el => (
                            <SwiperSlide className='cards'>
                                <Card item={el} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>



            </div>
        </>


    );
};

export default HomePage;