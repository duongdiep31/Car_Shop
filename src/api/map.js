import axios from 'axios';
const map = axios.create({
    baseURL: 'https://provinces.open-api.vn',
    headers: {
        "Content-Type": "application/json",
    }
});
export default map;