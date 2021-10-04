import { list } from "postcss";
import { getAll, remove } from "../../api/productsapi";
import { reRender } from "../../utils";

const Clistprd = {
        async render() {
            const stt = 1;
            const { data } = await getAll();

            return /*html*/ `

        <table  class="table w-3/4 m-auto">
        <a href="#/createprd" class="btn btn-warning ml-52">Create</a>

        <thead>
          <tr>
            <th scope="col col-100">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody >
            ${
              data.map(item => {


                return /*html*/ `<tr class="" >
                <th scope="row">${item.id}</th>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td><img class = "h-14" src="${item.image}" alt="">
                </td>
                <td>
                <a href="#/changePrd/${item.id}" id = "change" class="btn btn-success shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
                              <button data-id = "${item.id}" id ="remove" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></button>
    
                </td>
              </tr>`
            }).join("")
            }         
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
                    reRender(Clistprd, '#list');
                }
            })
        })
        // for (let btn of btns) {
        //     const id = btn.dataset.id;
        //     btn.addEventListener('click', async() => {
        //         const comfirm = confirm('bạn muốn xoá 0')
        //         if (comfirm) {
        //             await remove(id);
        //             await reRender(Clistprd, '#listprd')
        //         }


        //     })
        
    }
}
export default Clistprd;