import Navigo from "navigo";
import { $, isAuthenticated } from "./utils";
import header from "./component/header";
import homepage from "./page/home";
import footer from "./component/footer";
import product from "./page/product";
import productdetails from "./page/product-details";
import categorydetails from "./page/category-details";
import productManagerPage from "./page/admin/Products/list";
import creatproduct from "./page/admin/Products/create-product";
import changeProduct from "./page/admin/Products/change-product";
import register from "./page/register";
import login from "./page/login";
import Cart from "./page/Cart";
import productSearch from "./page/productsSearch";
import checkout from "./page/checkout";
import admin from "./page/admin/Admin";
import listcate from "./page/admin/categoryAdmin/listCate";
import createCate from "./page/admin/categoryAdmin/create-cate";
import changeCate from "./page/admin/categoryAdmin/change-cate";
import listOrder from "./page/admin/order/listOrder";
import changeStatus from "./page/admin/order/changeStatus";
import vieworder from "./page/admin/order/vieworder";
import listUsers from "./page/user/listUsers";
import missionuser from "./page/user/missionUser";

const router = new Navigo("/", { hash: true, linksSelector: "a" });
const render = async(page, afterRender) => {

    $('header').innerHTML = header.render();

    $('#container').innerHTML = await page;

    $('#footer').innerHTML = footer.render();
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
        .on("/category/:id", ({ data }) => {
            const id = data.id;
            console.log(id);
            render(categorydetails.render(id), categorydetails.afterRender)
        })
       .on("/register", () => render(register.render(), register.afterRender))
        .on("/login", () => {render(login.render(), login.afterRender)})
        .on("/search/:id",() => render(productSearch.render(),productSearch.afterRender))
        .on("/checkout", () => render(checkout.render(),checkout.afterRender))


        //admin
        .on("/admin/list", () => render(productManagerPage.render(), productManagerPage.afterRender))
        .on("/admin/createprd", () => render(creatproduct.render(), creatproduct.afterRender))
        .on("/cart", () => render(Cart.render(), Cart.afterRender))
        
        .on("/admin/changePrd/:id", ({ data }) => {
            const id = data.id;
            render(changeProduct.render(id), changeProduct.afterRender)
        })
        .on("/admin/changecate/:id", ({ data }) => {
            const id = data.id;
            render(changeCate.render(id), changeCate.afterRender)
        })
        .on("/admin",() =>render(admin.render(),admin.afterRender))
        .on("/admin/listcate", () => render(listcate.render(),listcate.afterRender) )
        .on("/admin/createcate", () => render(createCate.render(), createCate.afterRender))
        .on("/admin/listorder", () => render(listOrder.render(),listOrder.afterRender))
        .on("/admin/changestatus/:id", ({data}) => render(changeStatus.render(data),changeStatus.afterRender))
        .on("/admin/vieworder/:id",({data}) => render(vieworder.render(data),vieworder.afterRender))
        .on("/admin/listusers", ()=>render(listUsers.render(),listUsers.afterRender))
        .on("/admin/missionuser/:id",({data}) => render(missionuser.render(data), missionuser.afterRender) )
        .notFound(() => {
            console.log("Not Found Page");
        })

        .resolve();
}
export default routes