import { instance } from "../api/instance"
const category = {
    async render() {
        const respone = await fetch("http://localhost:3000/category")
        const data = await respone.json()
        const cate = data.map(item => {
            return /*html*/ `        <a href="#"><i class="fa fa-angle-double-right"></i>${item.name}<span>(5)</span></a>
            `
        }).join("")

        return /*html*/ `<div class="widget widget-categories">
            <div class="widget-title">
                <h5>categories</h5>
            </div>
            <div class="widget-content">
                <ul class="list-unstyled">
                    
                    ${cate}

                 
                </ul>
            </div>`
    }

}
export default category