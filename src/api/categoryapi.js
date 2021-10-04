import instance from "./instance";
export const getAll = () => {
    const url = '/categories'
    return instance.get(url)
}
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url)

}
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url)
}
export const add = (product) => {
    const url = `/categories/${id}`;
    return instance.post(url, product)
}
export const update = (id, product) => {
    const url = `/categories/${id}`;
    return instance.patch(url, product)
}