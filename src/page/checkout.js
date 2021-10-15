import { addcheckout } from "../api/orders";
import { getCartItem } from "../cart"
import listCheckout from "../component/Cart/checkout";
import { reRender } from "../utils";
import homepage from "./home";

const checkout = {
    render(){
                    
        return /*html*/ `
       
            <form id="checkout" >
            <div class="col-xs-12  col-sm-12  mt-10 col-md-12">
            <div class="cart-table table-responsive">
                <table class="table table-bordered">
                    <thead>
                        <tr class="cart-product">
                            <th class="cart-product-item">Product</th>
                            <th class="cart-product-price">Price</th>
                            <th class="cart-product-quantity">Quantity</th>
                            <th class="cart-product-total">Total</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">


                        ${ listCheckout.render()
                        }


                        <tr class="cart-product-action">
                            <td colspan="4">
                                <div class="row clearfix">
                                    <div class="col-xs-12 col-sm-6 col-md-6">
                                        <form class="form-inline">
                                            <input type="text" class="form-control" id="coupon" placeholder="Coupon Code" />
                                            <button type="submit" class="btn btn-primary">Địa Chỉ</button>
                                        </form>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 col-md-6 text-right">
                                        <a class="btn btn-secondary" href="#">update cart</a>
                                        <a class="btn btn-primary" href="#/checkout">Proceed To Checkout</a>
                                    </div>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
            <span> Địa chỉ </span>
            <input class="form-control" type="text" id = "address" >
            <button class="btn btn-primary">checkout</button>

            </form>
           
        `
    },
    afterRender(){
        const btn = document.querySelector("#checkout");
        btn.addEventListener('submit',  (e) => {
          
            e.preventDefault()
            const cart = getCartItem();
            const subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0)
                const tax = cart.length * 30000
                const orderTotal = subtotal + tax;
            const items = cart.map(item => {
                const data = {
               
                    name : item.name,
                    quantity: item.quantity,
                    total : item.price*item.quantity
                
            }
            return data
            })
             const cartCheckout = {
                products: items,
                subtotal: subtotal,
                address: document.querySelector("#address").value
            }
             const comfirm = confirm("bạn có muốn đặt hàng")
            if (comfirm) {
                addcheckout(cartCheckout);
                localStorage.removeItem('cart')
                alert("thành công ")
                reRender(homepage)
                window.location.hash = "/"
            }else{

            }

        })
    }
}
export default checkout