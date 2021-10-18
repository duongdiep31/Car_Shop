import instance from "./instance";
export const getAll = () => {
    const url = '/users'
    return instance.get(url)
}
export const get = (id) => {
    const url = `/users/${id}`;
    return instance.get(url)

}

export const remove = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url)
}
export const signup = (product) => {
    const url = `/users`;
    return instance.post(url, product)
}



export const signin = (product) => {
    const url = `/login/`
    return instance.post(url, product)
}




export const update = (id, product) => {
    const url = `/users/${id}`;
    return instance.patch(url, product)
}