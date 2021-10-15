import instance from "./instance";
export const getAll = () => {
    const url = '/orders'
    return instance.get(url)
}
export const getcate = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url)

}
export const remove = (id) => {
    const url = `/orders/${id}`;
    return instance.delete(url)
}
export const addcheckout = (product) => {
    const url = `/orders/`;
    return instance.post(url, product)
}
export const update = (id, product) => {
    const url = `/orders/${id}`;
    return instance.patch(url, product)
}