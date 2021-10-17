import { getorder, update } from "../../../api/orders";
import Clistorder from "../../../component/admin/order/Clistorder";
import { clickLogout, parseRequestUrl, reRender } from "../../../utils"

const changeStatus = {
   async  render(){
        const {id} = parseRequestUrl();
        const {data} = await getorder(id);
        return /*html*/ `
        <div class="w-3/4 m-auto" style="padding-top:20px" > 
            <a  href="#/admin">Control</a> /<a href="#/admin/listorder">List Order</a>/ <span> Change Status</span>
        </div>
        <form style="text-align:center;padding:50px 0" id="form-status">

        <h1 style ="font-size:30px"> Trạng Thái </h1>
        <select style="margin:30px 0;padding:10px 0;width:250px;border-radius:10px;border:1px solid #a6a6a6" class="form-select" aria-label="Default select example">
                <option selected>Đặt Thành Công</option>
                <option >Xác Nhận Đơn Hàng</option>
                <option>Đang Giao Hàng</option>
                <option >Giao Hàng Thành Công</option>
        </select>
        <button class="btn btn-primary" style="margin-left:20px">Submit</button>
        </form>
        
        `
    }
    ,afterRender(){
        clickLogout();
        const btn = document.querySelector("#form-status");
        btn.addEventListener('submit',async (e) =>{
            const {id} = parseRequestUrl();
            e.preventDefault();
            const status = {
                status: document.querySelector(".form-select").value
            }
             await update(id,status)
             reRender(Clistorder,"#listprd")
             window.location.hash = "#/admin/listorder"
        })
    }
}
export default changeStatus