import { get, update } from "../../api/user";
import ClistUsers from "../../component/admin/users/Clistusers";
import { clickLogout, parseRequestUrl, reRender, search } from "../../utils";

const missionuser = {
    async  render(){
            const {id} = parseRequestUrl();
            console.log(id);
            const {data} = await get(id);
            console.log(data);
         return /*html*/ `
         <div class="w-3/4 m-auto" style="padding-top:20px" > 
             <a  href="#/admin">Control</a> /<a href="#/admin/listorder">List User</a>/ <span> Change Mission User</span>
         </div>
         <form style="text-align:center;padding:50px 0" id="form-status">
 
         <h1 style ="font-size:30px"> Mission </h1>
         <select style="margin:30px 0;padding:10px 0;width:250px;border-radius:10px;border:1px solid #a6a6a6" class="form-select" aria-label="Default select example">
                 <option selected>guest</option>
                 <option >Product</option>
                 <option>Order</option>
         </select>
         <button class="btn btn-primary" style="margin-left:20px">Submit</button>
         </form>
         
         `
     }
     ,afterRender(){
         clickLogout()
         search()
         const btn = document.querySelector("#form-status");
         btn.addEventListener('submit',async (e) =>{
             const {id} = parseRequestUrl();
             e.preventDefault();
             const mission = {
                 mission: document.querySelector(".form-select").value
             }
              await update(id,mission)
              reRender(ClistUsers,"#listprd")
              window.location.hash = "#/admin/listusers"
         })
     }
 }
 export default missionuser