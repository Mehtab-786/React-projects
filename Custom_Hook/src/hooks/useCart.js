import { useEffect, useMemo, useState } from "react";

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
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    //add to cart
    const addToCart = (product) => {
        setCart(cartItems => {
            let existingItem = cartItems.find(item => item.id == product.id)
            if (existingItem) {
                return cartItems.map(item => item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item)
            }
            return [...cartItems, { ...product, quantity: 1 }]
        });
    };

    const removeFromCart = (productId) => setCart(cartItems => cartItems.filter(item => item.id != productId));

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(cartItems => {
            return cartItems.map(item => item.id == productId ? { ...item, quantity } : item)
        })
    }

    const total = useMemo(() => {
        return Number(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)).toFixed(2)
    }, [cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
    }
}