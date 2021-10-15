import instance from "./instance";
export const getAll = () => {
    const url = '/products/'
    return instance.get(url)
}
export const getAllcate = () => {
    const url = '/products?_expand=categories'
    return instance.get(url)
}
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url)

}
export const getcate = (cate) => {
    const url = `/products/${cate}`;
    return instance.get(url)

}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const add = (product) => {
    const url = `/664/products/`;
    return instance.post(url, product)
}
export const update = (id, product) => {
    const url = `/products/${id}`;
    return instance.patch(url, product)
}
 export const searchprd = (textSearch) => {
    const url = `/products?name_like=${textSearch}`;
    return instance.get(url);
}