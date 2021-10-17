import { getorder } from "../../../api/orders"
import Cvieworder from "../../../component/admin/order/Cvieworder"
import { parseRequestUrl } from "../../../utils"

const vieworder = {
    async render(){
         const {id} = parseRequestUrl()
        const {data} = await getorder(id)
        const tax = 300000;
        return /*html*/ `<div style="margin:auto; padding:40px 40px"  class="cart-table table-responsive">

        <div class="" m-auto" style="padding-top:20px" > 
        <a  href="#/admin">Control</a> /<a href="#/admin/listorder">List Ordel</a>/ <span> Order Detail</span>
    </div>
        <table style="margin-top:30px"  class="table table-bordered">
            <thead>
                <tr class="cart-product">
                    <th style="width:50%" class="cart-product-item">Product</th>
                    <th class="cart-product-price">Price</th>
                    <th class="cart-product-quantity">Quantity</th>
                    <th class="cart-product-total">Total</th>
                </tr>
            </thead>
            <tbody id="tbody">


                    ${ await Cvieworder.render()}


                <tr class="cart-product-action">
                    <td colspan="4">
                        <div class="row clearfix">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                            <ul class="list-unstyled">
                                <li>Shipping :<span class="pull-right text-right"> ${tax} </span></li>
                                <li>Order Total :<span class="pull-right text-right">  ${data.subtotal}</span></li>
                            </ul>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 text-right">
                               
                            </div>

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
     </div>`


    },
    afterRender(){}
}
export default vieworder