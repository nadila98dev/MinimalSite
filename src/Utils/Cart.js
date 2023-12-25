const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(item)
    localStorage.setItem('cart', JSON.stringify(cart))
}

const removeFromCart = (itemId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const updateCart = cart.filter((item) => item.id !== itemId)
    localStorage.setItem('cart', JSON.stringify(updateCart))
}

const clearCart = () => {
    localStorage.removeItem('cart')
}

const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart') || [])
}