import { getAll } from "../../api/categoryapi"
const categorycomponent = {
        async render() {
            const { data } = await getAll()
            return /*html*/ `
            ${data.map(category => {
                return `
               
                    <li>
                        <a href="#/category/${category.id}"><i class="fa fa-angle-double-right"></i>${category.name}</a>
                    </li> 
                `
            }).join("")}`
    }
    

}
export default categorycomponent