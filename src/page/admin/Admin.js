import { clickLogout } from "../../utils"

const admin = {
    render(){
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
    <a class = "btn btn-primary" >
                User
        </a>
        </div>
        <div class="button" >
        <a href="#/admin/listorder" class = "btn btn-primary" >
                Order
        </a>
        <div>
        </div>
        </div>
        `
    },
    afterRender(){
        clickLogout();
    }
}
export default admin