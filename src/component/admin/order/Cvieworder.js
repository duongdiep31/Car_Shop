import { getorder } from "../../../api/orders"
import { parseRequestUrl } from "../../../utils"

const Cvieworder = {
    async render(){
            const {id} = parseRequestUrl()
            const {data} = await getorder(id)
            const result = data.products.map((item) => {
                const price = item.total / item.quantity
                const nf = Intl.NumberFormat();
                
                return /*html*/ `<tr class="cart-product">
                <td class="cart-product-item">
                  

                    <div class="cart-product-name">
                        <h6>${item.name}</h6>
                    </div>
                </td>
                <td class="cart-product-price"> ${nf.format(price)} VND</td>
                <td class="cart-product-quantity">
                    <div class="product-quantity">
                        <input type="text" value="${item.quantity}"  >
                    </div>
                </td>
                <td class="cart-product-total"> ${nf.format(item.total)}    </td>
            </tr>`
            }).join("")
        return result
    }
}
export default Cvieworder