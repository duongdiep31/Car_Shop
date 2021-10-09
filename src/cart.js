import product from "./page/product"
export const getCartItem = () => {
    const cartItems = localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) : []
    return cartItems
}
export const setCartItems = cart => {
    localStorage.setItem('cart', JSON.stringify(cart))
}
export const addToCart = (newProudct) => {
    let cartItems = getCartItem();
    console.log(cartItems);
    const existProduct = cartItems.find(product => product.id === newProudct.id);
    if (existProduct) {
        existProduct.quantity++
    } else {
        cartItems = [...cartItems, newProudct]
    }
    setCartItems(cartItems)
}