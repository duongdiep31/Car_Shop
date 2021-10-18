import { remove } from "../../../api/user";
import {  getAll } from "../../../api/user"
import { isAuthenticated, reRender } from "../../../utils";

const ClistUsers = {
    async render(){
        const {data} = await getAll()
        const admin = isAuthenticated()
        
        const result = data.map((item,index)=>{
            return/*html*/ `
            <tr>
            <th scope="row">${index+1}</th>
            <td> ${item.user}</td>
            <td>${item.email}</td>
            <td>${item.mission}</td>

            <td>
            <a href="#/admin/missionuser/${item.id}" id = "change" class="btn btn-success shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
            <button data-id = "${item.id}" id ="remove" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>

            </td>
            </tr>`
        }).join("")
        return /*html*/ `
          
        <table  class="table w-3/4 m-auto" ">

        <thead>
          <tr>
            <th scope="col col-100">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mission</th>

            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>

        ${result}



        </tbody>
      </table>
      `
    },
    async afterRender() {
        const btns = document.querySelectorAll("#remove");
        btns.forEach(btn => {
            const id = btn.dataset.id
            btn.addEventListener("click", async () => {
                const Confirm = confirm('Bạn có thật sự muốn xoá?');
                if(Confirm){
                    await remove(id);
                    reRender(ClistUsers, '#listprd');
                }
            })
        })
       
        
    }
}
export default ClistUsers