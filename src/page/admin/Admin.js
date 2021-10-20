import { clickLogout, isAuthenticated, search } from "../../utils"

const admin = {
    async render(){
        const admin = await isAuthenticated()
        const user = () =>{
            if (admin.user.mission == "Admin") {
                return /*html*/ `<div class="button" >
                <a href="#/admin/listusers" class = "btn btn-primary" >
                User
             </a>
                 </div>
                 <div class="button" >
                 <a href="#/admin/list" class = "btn btn-primary" >
                         Product
                 </a>
                 </div>
                     <div class="button" >
                     <a href="#/admin/listcate" class = "btn btn-primary" >
                     Category
                 </a>
                             </div>
                         
                 <div class="button" >
                 <a href="#/admin/listorder" class = "btn btn-primary" >
                         Order
                 </a>
                 </div>
                 `
            }else if (admin.user.mission == "Product") {
                return ` 
                <div class="button" >
                <a href="#/admin/listcate" class = "btn btn-primary" >
                Category
            </a>
                        </div>
                <div class="button" >
                <a href="#/admin/list" class = "btn btn-primary" >
                        Product
                </a>
                </div>`
            } else if (admin.user.mission == "Order") {
                    return `   <div class="button" >
                    <a href="#/admin/listorder" class = "btn btn-primary" >
                            Order
                    </a>
                    </div>`
            } {
                return ``
            }
        }
        return /*html*/ `
        <style>
            .button{
                margin:20px 20px;
                
            }
        </style>
        <div style="margin:30px 30px">
        <h1 style = "font-size:50px ;text-align:center;
        ">Control</h1>
        <div  style="text-align: center;" >
                
                ${user()}
        </div>
        </div>
        `
    },
    afterRender(){
        clickLogout();
        search()
        
     
    }
}
export default admin