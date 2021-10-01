import { getAll } from "../../api/products";

const productManagerPage = {
    async render() {
        try {
            const { data } = await getAll();
            return ``
        } catch (error) {
            console.log(error);
        }
    }
}
export default productManagerPage;