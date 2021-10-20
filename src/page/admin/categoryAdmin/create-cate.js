import { add } from "../../../api/categoryapi";
import Clistcate from "../../../component/admin/Clistcate";
import { clickLogout, reRender, search } from "../../../utils";

const createCate = {
    render(){
        return /*html*/ `
        <div class="w-3/4 m-auto">
        <a  href="#/admin">Control</a> / <a  href="#/admin/listcate"> List Categories</a> / <span> Create Category </span>
          </div>
        <form class =" w-3/4 m-auto"  style="padding:30px 0" id="addprd">

        <div class="mb-3">
          <label for="name" class="form-label">name</label>
          <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text"></div>
        </div>
        <button type="submit" id = "btn" class="btn btn-primary">Submit</button>
      </form>`
    }
    
    ,afterRender(){
      clickLogout()
      search()
        const btns = document.querySelector("#addprd");
        btns.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = {
                name : document.querySelector("#name").value
            }
            add(data)
            reRender(Clistcate,"#listprd")
            window.location.hash = "#/admin/listcate"
        })}
    
}
export default createCate