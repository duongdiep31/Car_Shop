
export const $ = (selector) => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements]
}
export const reRender = async(component, position = "") => {
    if (position) {
        $(position).innerHTML = await component.render();
    } else {
        $("#root").innerHTML = await component.render();
    }
    await component.afterRender();
}
export const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase();

    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }
}

export const authenticate = (user) => {
    if (typeof window === 'undefined') return false
    return localStorage.setItem('user', JSON.stringify(user))
}
export const isAuthenticated = () => {
    if (typeof window === 'undefined') return false;
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}
export const logout = () => {
    if (localStorage.getItem('user')) {
        return localStorage.removeItem('user');
    }
}
export const clickLogout = () => {
    if (document.querySelector('#logout') != undefined) {
        document.querySelector('#logout').onclick = () => {
            logout();
            window.location.hash = '/login';
        }
    }
   
}
export const search = () => {
    if(document.querySelector('#btn-search')){
        document.querySelector("#btn-search").addEventListener("click", function (e) {
            e.preventDefault();
            const textSearch = $("#search-inpt").value;
            window.location.hash = `/search/${textSearch}`;
        })
    }
}

