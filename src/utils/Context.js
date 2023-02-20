import axios from "axios";
import { createContext, useEffect, useState } from "react";
import productServices from '../servicese/product';


export const CustomContext = createContext()
export const Context = (props) => {


    const [clothes, setClothes] = useState([])
    const [basket, setBasket] = useState([])


    const addBasket = (product) => {
        setBasket(prev => [...prev, {
            ...product,
            count: 1
        }])
        localStorage.setItem('basket', JSON.stringify(product))




    }
    const plusBasket = (id) => {
        setBasket(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 }
            }
            return item
        }))
    }
    const minusBasket = (id) => {

        let count = basket.find(item => item.id === id).count


        if (count === 1) {
            setBasket(prev => prev.filter(item => item.id !== id))
        } else {
            setBasket(prev => prev.map(item => {
                if (item.id === id) {
                    return { ...item, count: item.count - 1 }
                }
                return item
            }))
        }
    }


    useEffect(() => {
        productServices
            .getProducts()
            .then(({ data }) => setClothes(data))
    }, [])
    
    const value = {
        clothes,
        addBasket,
        basket,
        plusBasket,
        minusBasket
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}
