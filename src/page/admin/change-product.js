import { getAll, getcate } from "../../api/categoryapi";
import {get, update } from "../../api/productsapi";
import Clistprd from "../../component/admin/Clisprd";
import { clickLogout, parseRequestUrl, reRender } from "../../utils";
const changeProduct = {
    async render(id) {
        const { data } = await get(id);
        const cate = await (await getAll()).data;
        const item = cate.map(id => {
            return /*html*/ `<option value="${id.id}">${id.name}</option>`
        })
        const cateid = await (await getcate(data.cate)).data
            // await (await (await getcate(data.cate)).data)



        return /*html*/ `<form class ="w-3/4 m-auto" id="addprd">

        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input value = "${data.name}" type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">price</label>
          <input value = "${data.price}" type="text" class="form-control" name="price" id="price">
        </div>
        <div class="mb-3">
          <label for="cate" class="form-label">Categories</label>
                 <select id = "cate" name ="cate">
                 <option value="${cateid.id}" > ${cateid.name}
             </option>
             ${item}
                 </select>

          
        </div>
        <div class="mb-3 form-check">
        <label for="image" class="form-label">image</label>

          <input type="text" class="form-check-input" name = "image" id="image">
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    },
    async afterRender() {
        clickLogout();
        const btns = document.querySelector("#addprd");
        const { id } = parseRequestUrl();
        console.log(id);

        btns.addEventListener('submit', async(e) => {
            e.preventDefault();
            const product = {
                name: document.querySelector("#name").value,
                price: document.querySelector("#price").value,
                cate: document.querySelector("#cate").value,
                image: document.querySelector("#image").value
            }
            await update(id, product)


            reRender(Clistprd, '#listprd');
            window.location.hash = '/list';


        })
    }
}
export default changeProduct