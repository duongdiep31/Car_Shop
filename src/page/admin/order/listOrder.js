import Clistorder from "../../../component/admin/order/Clistorder"
import { clickLogout } from "../../../utils"

const listOrder = {
    async render(){
        return /*html*/ `
        <div class="w-3/4 m-auto" style="padding-top:20px" > 
            <a  href="#/admin">Control</a> / <span> List Order</span>
        </div>
         <div id = "listprd" style = " padding:50px 0;">
            ${await Clistorder.render() }
        </div>
        
        `
    },afterRender(){
        clickLogout();
    }
}
export default listOrder