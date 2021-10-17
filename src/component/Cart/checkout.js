import { getCartItem } from "../../cart";

const listCheckout = {
    render(){
        const cart = getCartItem();
        const subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0)
            const nf = Intl.NumberFormat();
            const tax = cart.length * 30000
            const orderTotal = subtotal + tax;
        const items = cart.map(item => {
            const totalPrice = item.quantity*item.price
        

            return `
            <tr class="cart-product">
            <td class="cart-product-item">
              
                <div style="width:20%" class="cart-product-img">
                    <img src="${item.image}" style="width:100%;height:30%;" alt="product" />
                </div>
                <div class="cart-product-name">
                    <h6>${item.name}</h6>
                </div>
            </td>
            <td class="cart-product-price">${nf.format(item.price)} VND</td>
            <td class="cart-product-quantity">
                <div class="product-quantity">
                    <a href="#"><i class="fa fa-minus"></i></a>
                    <input type="text" value="${item.quantity}" id="pro1-qunt" readonly>
                    <a href="#"><i class="fa fa-plus"></i></a>
                </div>
            </td>
            <td class="cart-product-total">${nf.format(totalPrice)}</td>
        </tr>

            `
        })   
        return items
    }
}
export default listCheckout