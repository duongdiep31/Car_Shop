import { getcate, update } from "../../../api/categoryapi"
import Clistcate from "../../../component/admin/Clistcate";
import { clickLogout, parseRequestUrl, reRender, search } from "../../../utils";

const changeCate = {
    async render(id){
        const {data} = await getcate(id);
        
        return /*html*/ `<div class="w-3/4 m-auto">
        <a  href="#/admin">Control</a> / <a  href="#/admin/listcate"> List Categories</a> / <span> Change Category </span>
          </div>
        <form class =" w-3/4 m-auto"  style="padding:30px 0" id="addprd">

        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" value="${data.name}" class="form-control" name="name" id="name" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    },
    async afterRender(){
      clickLogout()
      search()
      const btn = document.querySelector("#addprd");
      btn.addEventListener('submit', async (e) => {
        e.preventDefault();
        const {id} = parseRequestUrl();

        const datacate = {
          name : document.querySelector("#name").value
        }
         update(id,datacate)
        reRender(Clistcate,"#listprd")
        window.location.hash = "#/admin/listcate"
        
      })
    }
}
export default changeCate