import Navigo from "navigo";
import { $ } from "./utils";
import header from "./component/header";
import homepage from "./page/home";
import footer from "./component/footer";
import product from "./page/product";
import productdetails from "./page/product-details";
import categorydetails from "./page/category-details";
import productManagerPage from "./page/admin/list";
const router = new Navigo("/", { hash: true, linksSelector: "a" });
const render = async(page, afterRender) => {

    $('header').innerHTML = header.render(), header.afterRender;

    $('#container').innerHTML = await page;

    $('#footer').innerHTML = footer.render();
    if (afterRender) {
        await afterRender();
    }
}

const renderadmin = async(page) => {

    $('#container').innerHTML = await page;

    if (afterRender) {
        await afterRender();
    }
}

const routes = () => {
    router
        .on("/", () => render(homepage.render(), homepage.afterRender))
        .on("/products", () => render(product.render(), product.afterRender))
        .on("/products/:id", ({ data }) => {
            render(productdetails.render(data), productdetails.afterRender)
        })
        //admin
        .on("/list", () => renderadmin(productManagerPage.render()))

    .on("/category/:id", ({ data }) => {
        const id = data.id;
        render(categorydetails.render(id), categorydetails.afterRender)
    })

    .notFound(() => {
            console.log("Not Found Page");
        })
        .resolve();
}
export default routes