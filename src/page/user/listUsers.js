import ClistUsers from "../../component/admin/users/Clistusers"
import { clickLogout, search } from "../../utils"

const listUsers = {
    async render(){
        return /*html*/ `
        <div class="w-3/4 m-auto" style="padding-top:20px" > 
            <a  href="#/admin">Control</a> / <span> List Users</span>
        </div>
         <div id = "listprd" style = " padding:50px 0;">
            ${await ClistUsers.render() }
        </div>`
    },
     async afterRender(){
        clickLogout()
        search()
        await ClistUsers.afterRender()
    }
}
export default listUsers