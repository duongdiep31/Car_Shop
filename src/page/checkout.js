import { addcheckout } from "../api/orders";
import { getCartItem } from "../cart"
import listCheckout from "../component/Cart/checkout";
import { reRender } from "../utils";
import homepage from "./home";

const checkout = {
    render(){
                    const data = getCartItem();
                    const nf = Intl.NumberFormat();
                    const subtotal = data.reduce((a, b) => a + b.price * b.quantity, 0)
                    const tax = 300000
                    const orderTotal = subtotal + tax

        return /*html*/ `
            <div style="margin:auto; padding:40px 40px"  class="cart-table table-responsive  ">
                <table class="table table-bordered">
                    <thead>
                        <tr class="cart-product">
                            <th style="width:50%" class="cart-product-item">Product</th>
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
                                    <ul class="list-unstyled">
                                        <li>Cart Subtotal :<span class="pull-right text-right">${nf.format(subtotal)}</span></li>
                                        <li>Shipping :<span class="pull-right text-right">${nf.format(tax)}</span></li>
                                        <li>Order Total :<span class="pull-right text-right">${nf.format(orderTotal)}</span></li>
                                    </ul>
                                    </div>

                                    <div class="col-xs-12 col-sm-6 col-md-6 text-right">
                                        <form id="checkout" class="form-inline">
                                        <div>

                                               <label style="padding-right:10px;" for="name">Name  :</label>
                                              <input style="width:350px;height:30px;border:1px solid #e5e5e5;" type="text" id="name" placeholder=" Name"/>
                                            </div>
                                            <div>

                                               <label style="padding-right:10px;" for="number">Phone  :</label>
                                              <input style="width:350px;height:30px;border:1px solid #e5e5e5;margin: 20px 0" type="text" id="number" placeholder=" Phone"/>
                                            </div>
                                                <div>

                                               <label style="padding-right:10px;" for="address">Address  :</label>
                                              <input style="width:350px;height:30px;border:1px solid #e5e5e5;margin-bottom:20px" type="text" id="address" placeholder=" Address"/>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Confirm</button>
                                        </form>
                                    </div>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
             </div>

                            
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
                const tax = 300000
                const data = {
               
                    name : item.name,
                    quantity: item.quantity,
                    total : item.price*item.quantity + tax
                
            }
            return data
            })
             const cartCheckout = {
                name: document.querySelector("#name").value,
                phone : document.querySelector("#number").value,
                status : "Đặt Hàng Thành Công",
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