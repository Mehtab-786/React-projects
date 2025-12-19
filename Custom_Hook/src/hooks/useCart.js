import { useEffect, useMemo, useState } from "react";

export function useCart() {
    const [cart, setCart] = useState(() => {
        try {
            let data = JSON.parse(localStorage.getItem('cart'))
            return data ? data : [];
        } catch (error) {
            console.error("Failed to load cart from storage :: ", error);
            return [];
        }
    })

    // persist cart to local storage
    useEffect(() => {
        try {
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (error) {
            console.log('Failed to save cart', error)
        }
    }, [cart])

    //sync across tabs
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === 'cart') {
                try {
                    const newCart = JSON.parse(e.newValue || '[]')
                    setCart(newCart)
                } catch (error) {
                    console.error('Failed to parse cart :: ', error)
                }
            }
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])

    const addToCart = (product) => {
        setCart(currentOne => {
            const existingItem = currentOne.find(item => item.id === product.id);
            if (existingItem) {
                return currentOne.map(item => item.id === product.id ? { item, quantity: item.quantity + 1 } : item)
            }
            return [...currentOne, { ...product, quantity: 1 }]
        })
    }

    const removeFromCart = (productId) => {
        setCart(currentOne => currentOne.filter(item => item.id !== productId))
    }

    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart(current => current.map(item => item.id == productId ? { ...item, quantity } : item))
    }

    //not required in react 19
    const total = useMemo(() => {
        return Number(cart.reduce((sum, item) => {
            const itemTotal = item.price * (item.quantity || 0)
            return sum + itemTotal
        }, 0).toFixed(2))
    }, [cart])


    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
    }
}