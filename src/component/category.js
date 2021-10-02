import { instance } from "../api/instance"
const categorycomponent = {
    async render() {
        const url = "/category"
        const { data } = instance.get(url)

        return /*html*/ `  <li>
        <a href="#"><i class="fa fa-angle-double-right"></i>${data}<span>(77)</span></a>
    </li> `
    }

}
export default categorycomponent