import { getAll } from "../../../api/orders"

const Clistorder = {
    async render(){
        const {data} = await getAll();
        const result = data.map((item,index) => {
            return/*html*/ `
            <tr>
            <th scope="row">${index+1}</th>

            <td> ${item.name}</td>
            <td>${item.address}</td>
            <td>${item.status}</td>
            <td>${item.phone}</td>
            <td>
            <a href="#/admin/changestatus/${item.id}" id = "change" class="btn btn-success shadow btn-xs sharp mr-1"><i class="fa fa-pencil"></i></a>
            <a href="#/admin/vieworder/${item.id}" id = "view" class="btn btn-success shadow btn-xs sharp mr-1"><i class="fa fa-eye"></i></a>
            </td>
            </tr>`
        })


        return /*html*/ `
          
        <table  class="table w-3/4 m-auto" ">

        <thead>
          <tr>
            <th scope="col col-100">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Status</th>
            <th scope="col">Phone</th>

            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>

          ${result}




        </tbody>
      </table>
      `
    }
}
export default Clistorder