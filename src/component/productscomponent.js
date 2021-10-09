import {get, getAll } from "../api/productsapi";
import { addToCart } from "../cart";

const CProduct = {
        async render() {

            const { data } = await getAll();


            return /*html*/ `
                ${data.map(product => {
                    const nf = Intl.NumberFormat();
                     const coin = product.price;
                      return /*html*/ `
                    <div class="col-xs-12 col-sm-6 col-md-4 product">
                    <div class="product-img">
                        <img src="${product.image}" alt="Product" />
                        <div class="product-hover">
                            <div class="product-action">
                                
                                <button class="btn btn-primary" data-id =${product.id}  id="addtocart" >Add To Cart</button>
                                <a class="btn btn-primary" href="#/products/${product.id}">Item Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="product-bio">
                        <div class="prodcut-cat">
                            <a href="#/category/${product.category.id}">${product.category.name}</a>
                        </div>

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
        
    }
}
export default CProduct