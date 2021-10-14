import { getCartItem, removeItemFromCart } from "../../cart";
import { reRender } from "../../utils";

const Ccart = {
    render(){
                               const data = getCartItem();
                        const nf = Intl.NumberFormat();
                                    const result = data.map(item => {
                                            const totalPrice = item.quantity * item.price
                                            const nf = Intl.NumberFormat();

                                            return /*html*/ ` <tr class="cart-product">
                                        <td class="cart-product-item">
                                            <div  data-id = "${item.id}" class="cart-product-remove">
                                                <i class="fa fa-close"></i>
                                            </div>
                                            <div class="cart-product-img">
                                                <img src="${item.image}" style="width:20%;height:30%;" alt="product" />
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
                                        }

                        ).join("")
        return result

    },
    afterRender(){
        const btns = document.querySelectorAll(".cart-product-remove")
        btns.forEach(item => {
            console.log(item);
            const id = item.dataset.id
            item.addEventListener('click', async (e) =>  {
                e.preventDefault();
                console.log(123);
                const comfirm = confirm("Bạn có muốn xoá không");
                if(comfirm){
                    removeItemFromCart(id);
                    reRender(Ccart, "#tbody");
                   window.location.hash = "/cart"
                }else{
                    reRender(Ccart, "#tbody")
                    window.location.hash = "#/cart"
                }
            })

        })
    }
}
export default Ccart