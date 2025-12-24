import { useEffect, useState } from "react";

export function useCart() {
    // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])   
    const [cart, setCart] = useState(() => {
        try {
            let data = localStorage.getItem('cart');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Failed to load cart :: ', error);
            return [];
        }
    })

    //local sync storage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (error) {
            console.error('Failed to save cart :: ', error);
        }
    }, [cart]);

    //sync across tabs
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key == 'cart') {
                try {
                    const newCart = JSON.parse(e.newValue || '[]')
                    setCart(newCart)
                } catch (error) {
                    console.log('Failed to parse cart ::', error)
                }
            }
        }
        window.addEventListener('storage',handleStorage)
        return () =>  window.removeEventListener('storage',handleStorage)
    }, [])


}