import { getAll, getcate } from "../../../api/categoryapi";
import {get, update } from "../../../api/productsapi";
import Clistprd from "../../../component/admin/Clisprd";
import { clickLogout, parseRequestUrl, reRender, search } from "../../../utils";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "@firebase/storage";

const changeProduct = {
    async render(id) {
        const { data } = await get(id);
        const cate = await (await getAll()).data;
        const item = cate.map(id => {
            return /*html*/ `<option value="${id.id}">${id.name}</option>`
        })

        const cateid = await (await getcate(data.categoriesId)).data
            // await (await (await getcate(data.cate)).data)

        

        return /*html*/ `
        
        <div class="w-3/4 m-auto">
        <a  href="#/admin">Control</a> / <a  href="#/admin/list"> List Products</a> / <span> Change Products </span>
          </div>
        <form class ="w-3/4 m-auto"  style="padding:30px 0" id="addprd">

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

          <input type="file" class="form-check-input" name = "image" id="images">
          <img style = "width:20%;height:19%;padding:20px 0px" src="${data.image}"/>
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    },
    async afterRender() {
        clickLogout();
        search()
        const btns = document.querySelector("#addprd");
        btns.addEventListener('submit', async(e) => {
            e.preventDefault();
            const {id} = parseRequestUrl();
            const {data } = await get(id);

            const storage = getStorage();
            const productimage = document.querySelector("#images");

            if (productimage.files.length == 0) {
              const product = {
                
                name: document.querySelector("#name").value,
                price: document.querySelector("#price").value,
                categoriesId: document.querySelector("#cate").value,
                image: `${data.image}`
                
            }
            await update(id, product)
            reRender(Clistprd, '#listprd')
                          window.location.hash = '#/admin/list'
            }
            else{
              let file = productimage.files[0]; 

                      let storageRef = ref(storage, `images/${file.name}`);
                      const uploadTask = uploadBytesResumable(storageRef, file);
          
                      uploadBytes(storageRef, file).then( async () => {
                      getDownloadURL(uploadTask.snapshot.ref).then( ( downloadURL) => {
                          const data = {
                          id: Math.random().toString(5).substr(2),
                          name: $("#name").value,
                          price: $("#price").value,
                          categoriesId: $("#cate").value,
                          image: downloadURL
                        }
                            update(id,data)
                          reRender(Clistprd, '#listprd')
                          window.location.hash = '#/admin/list'
                        });
                      })
                  }
              
           

        })
    }
}
export default changeProduct