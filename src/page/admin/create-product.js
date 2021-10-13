import { getAll } from "../../api/categoryapi";
import { add } from "../../api/productsapi";
import Clistprd from "../../component/admin/Clisprd";
import '../../firebase'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import { $, clickLogout, reRender } from "../../utils";
const creatproduct = {
    async render() {
        const { data } = await getAll();
        const resultcate = data.map(cate => {
            return /*html*/ ` <option value="${cate.id}">${cate.name}</option>`
        })
        return /*html*/ `<form class ="w-3/4 m-auto" id="addprd">

        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label for="price" class="form-label">price</label>
          <input type="text" class="form-control" name="price" id="price">
        </div>
        <div class="mb-3">
          <label for="cate" class="form-label">Categories</label>
                 <select id = "cate" name ="cate">
                    ${resultcate}
                 </select>

          
        </div>
        <div class="mb-3 form-check">
        <label for="image" class="form-label">image</label>

          <input type="file" class="form-check-input" name = "image" id="images">
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    },
    afterRender() {
        clickLogout();
        const btns = document.querySelector("#addprd");
        btns.addEventListener('submit', (e) => {
            e.preventDefault();
            const storage = getStorage();
            const productimage = $("#images");
            let file = productimage.files[0];
            let storageRef = ref(storage, `images/${file.name}`);
            
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadBytes(storageRef, file).then( async () => {
             getDownloadURL(uploadTask.snapshot.ref).then( ( downloadURL) => {
                 const  data = {
                id: Math.random().toString(5).substr(2),
                name: $("#name").value,
                price: $("#price").value,
                cate: $("#cate").value,
                image: downloadURL
               }
                add(data)
                 reRender(Clistprd, '#listprd')
                window.location.hash = '/list'
              });
            })

           
        })


    }

}
export default creatproduct