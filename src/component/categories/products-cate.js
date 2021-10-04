import { getAll } from "../../api/productsapi"

const Ccategories = {
    async render(id) {
        const { data } = await getAll();
        // const product = data.filter(item => item.cate === +id)
        console.log(data);
        const cate = data.filter(item => item.cate === +id);
        const result = await cate.map(product => {
            const nf = Intl.NumberFormat();
            const coin = product.price;
            const quanity = product.length;
            return /*html*/ `
                <div class="col-xs-12 col-sm-6 col-md-4 product">
                <div class="product-img">
                    <img src="${product.image}" alt="Product" />
                    <div class="product-hover">
                        <div class="product-action">
                            <a class="btn btn-primary" href="#">Add To Cart</a>
                            <a class="btn btn-primary" href="#/products/${product.id}">Item Details</a>
                        </div>
                    </div>
                </div>
                <div class="product-bio">
                    <div class="prodcut-cat">
                        <a href="#">Toyota</a>
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
        }).join("")

        return /*html*/ result



    }
}
export default Ccategories