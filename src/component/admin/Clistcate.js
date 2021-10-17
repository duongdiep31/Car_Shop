import { getAll, remove } from "../../api/categoryapi"
import { reRender } from "../../utils";

const Clistcate = {
    async render(){

            const {data} = await getAll();
            return /*html*/ `
            <table  class="table w-3/4 m-auto" ">
        <a href="#/admin/createcate" class="btn btn-warning ml-52">Create</a>

        <thead>
          <tr>
            <th scope="col col-100">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody >

            ${
              data.map((item,index) => {

                return /*html*/ `<tr class="" >
             <th scope="row">${index+1}</th>

                <td>${item.name}</td>
                </td>
                <td>
                <a href="#/admin/changecate/${item.id}" id = "change" class="btn btn-success shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <button data-id = "${item.id}" id ="remove" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
    
                </td>
              </tr>`
            }).join("")
            }         
        </tbody>
      </table>`
        },afterRender(){
            const btns = document.querySelectorAll("#remove");
        btns.forEach(btn => {
            const id = btn.dataset.id
            btn.addEventListener("click", async () => {
                const Confirm = confirm('Bạn có thật sự muốn xoá?');
                if(Confirm){
                    await remove(id);
                    reRender(Clistcate, '#listprd');
                }
            })
        })
        }
}
export default Clistcate