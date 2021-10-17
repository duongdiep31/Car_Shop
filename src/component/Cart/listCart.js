import { getCartItem } from "../../cart";
const cartMini = {
    render() {
        const data = getCartItem();
        const noti = data.length
        const subtotal = data.reduce((a, b) => a + b.price * b.quantity, 0)
        

        function sub() {
            const data = getCartItem();
            const nf = Intl.NumberFormat();

            const subtotal = data.reduce((a, b) => a + b.price * b.quantity, 0)
            if (data) {
                return /*html*/ `
                    <div class="total-price mb-4" >
                    <h5>${nf.format(subtotal)} VND</h5>
                </div>`
            } else {
                return /*html*/ `
                <div class="total-price mb-4" >
                <h5>0 VND</h5>
            </div>`
            }
        }
        const result = data.map(item => {

            const totalPrice = item.quantity * item.price
            const nf = Intl.NumberFormat();
            return /*html*/ ` <li>
            <img class="img-responsive" src="${item.image}" style="width:70px;height:70px;" alt="product" />
            <div class="product-meta">
                <h5 class="product-title">${item.name}</h5>
                <p class="product-price">Price: ${nf.format(totalPrice)} </p>
                <p class="product-quantity">Quantity: ${item.quantity}</p>
            </div>
        </li>`
        }).join("")
        return /*html*/ `<div class="module module-cart pull-left">
        <div class="cart-icon">
            <i class="fa fa-shopping-cart"></i>
            <span class="title">shop cart</span>
            <span class="cart-label"> ${noti}</span>
        </div>
        <div class="cart-box">
            <div class="cart-overview">
                <ul class="list-unstyled">
                    ${result}
                   
                </ul>
            </div>
            <div class="cart-total">
                <div class="total-desc">
                    <h5>SUBTOTAL :</h5>
                </div>
                <div class="total-price mb-4" >
                ${sub()}
                </div>
            </div>
            <div class="clearfix">
            </div>
            <div class="cart-control">
                <a class="btn btn-primary btn-block" href="/cart">view cart</a>
                <a class="btn btn-secondary btn-block" href="#">check out</a>
            </div>
        </div>
    </div>`
    }
}
export default cartMini