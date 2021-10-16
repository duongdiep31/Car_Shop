import {get, getAll, getAllcate } from "../api/productsapi";
import { addToCart } from "../cart";
import { $ } from "../utils";

const CProduct = {
        async render() {

            const { data } = await getAllcate();


            return /*html*/ `
                ${data.map(product => {
                    const nf = Intl.NumberFormat();
                     const coin = product.price;
                     
                      return /*html*/ `
                    <div class="col-xs-12 col-sm-6 col-md-4 product">
                    <div style="height:286px" class="product-img">
                        <img src="${product.image}" alt="Product" />
                        <div class="product-hover">
                            <div class="product-action">
                                
                                <a class="btn btn-primary" data-id =${product.id}  id="addtocart" >Add To Cart</a>
                                <a class="btn btn-primary" href="#/products/${product.id}">Item Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="product-bio">
                   

                        <div class="prodcut-title">
                            <h3>
                                <a href="#">${product.name}</a>
                            </h3>
                        </div>

                        <div class="product-price">
                            <span class="symbole">${nf.format(coin)} VND </span>
                        </div>

                    </div>

                </div>
                    `
                }).join("")}
                `
    },
    afterRender(){
        
        const btns = document.querySelectorAll("#addtocart")
        btns.forEach(item => {
            const id = item.dataset.id
            item.addEventListener('click', async (e) => {
                e.preventDefault();
                var { data } = await get(id)

                const newProduct = {
                    ...data,
                    quantity: 1
                }
                await addToCart(newProduct)
                window.location.hash = `/cart`
            })
        });
    }
}
export default CProduct