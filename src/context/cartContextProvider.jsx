import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, removeFromCart, clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}