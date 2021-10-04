import { getAll } from "../../api/productsapi";

const productManagerPage = {
    async render() {
        const stt = 1;
        const { data } = await getAll();
        const product = data.map(item => {


            return /*html*/ `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td><img src="${item.image}" alt="">
            </td>
          </tr>`
        }).join("")




        return /*html*/ `<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
            ${product}         
        </tbody>
      </table>`
    }
}
export default productManagerPage;