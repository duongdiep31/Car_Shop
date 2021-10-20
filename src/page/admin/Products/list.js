import Clistprd from "../../../component/admin/Clisprd";
import { clickLogout, reRender, search } from "../../../utils";

const productManagerPage = {
    async render() {
        return /*html*/ `
        <div class="w-3/4 m-auto" style="padding-top:20px" > 
            <a  href="#/admin">Control</a> / <span> List Products</span>
        </div>
         <div id = "listprd" style = " padding:50px 0;">

            ${ await Clistprd.render()}
        </div>
        
        `
    },
    async afterRender() {
        clickLogout()
        search()

        return `${ await Clistprd.afterRender()}`
    }
}
export default productManagerPage;