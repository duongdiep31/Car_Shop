import { getCartItem, removeItemFromCart } from "../cart";
import Ccart from "../component/Cart/Ccart";
import { clickLogout, reRender, search } from "../utils";

const Cart = {
   async render() {
        const data = getCartItem();
        const subtotal = data.reduce((a, b) => a + b.price * b.quantity, 0)
        const nf = Intl.NumberFormat();
        const tax = data.length * 30000
        const orderTotal = subtotal + tax;
    
        return /*html*/ `<section id="page-title" class="page-title">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h1>shop cart</h1>
                </div>

                <div class="col-xs-12 col-sm-12 col-md-6">
                    <ol class="breadcrumb text-right">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="active">shop cart</li>
                    </ol>
                </div>

            </div>

        </div>

    </section>


    <section id="shopcart" class="shop shop-cart">
        <div class="container">
            <div class="row">
                <div class="col-xs-12  col-sm-12  mt-10 col-md-12">
                    <div class="cart-table table-responsive">
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


                                ${ await Ccart.render()
                                }


                                <tr class="cart-product-action">
                                    <td colspan="4">
                                        <div class="row clearfix">
                                            <div class="col-xs-12 col-sm-6 col-md-6">
                                                <form class="form-inline">
                                                    <input type="text" class="form-control" id="coupon" placeholder="Coupon Code" />
                                                    <button type="submit" class="btn btn-primary">Apply Coupon</button>
                                                </form>
                                            </div>

                                            <div class="col-xs-12 col-sm-6 col-md-6 text-right">
                                                <a class="btn btn-secondary" href="#/products">update cart</a>
                                                <a class="btn btn-primary" href="#/checkout">Proceed To Checkout</a>
                                            </div>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div class="col-xs-12  col-sm-12  col-md-6 mb-30-xs mb-30-sm">
                   

                </div>

                <div class="col-xs-12  col-sm-12  col-md-6">
                    <div class="cart-total-amount">
                        <h6>Cart Totals :</h6>
                        <ul class="list-unstyled">
                            <li>Cart Subtotal :<span class="pull-right text-right">${nf.format(subtotal)}</span></li>
                            <li>Shipping :<span class="pull-right text-right">${nf.format(tax)}</span></li>
                            <li>Order Total :<span class="pull-right text-right">${nf.format(orderTotal)}</span></li>
                        </ul>
                        
                    </div>
                </div>

            </div>

        </div>

    </section>`
    },
    afterRender() {
        clickLogout()
        search()
      
        Ccart.afterRender()
        
    }
}
export default Cart