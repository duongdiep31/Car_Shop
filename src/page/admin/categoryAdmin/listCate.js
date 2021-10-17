import Clistcate from "../../../component/admin/Clistcate"
import { clickLogout } from "../../../utils";

const listcate = {
    async render(){
        return /*html*/ `
        <div class="w-3/4 m-auto" style="padding-top:20px" > 
        <a  href="#/admin">Control</a> / <span> List Products</span>
    </div>
     <div id = "listprd" style = " padding:50px 0;">

        ${ await Clistcate.render()}
    </div>
    `
    },
    async afterRender(){
        clickLogout();
        await Clistcate.afterRender();
    }
}
export default listcate