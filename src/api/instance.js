import axios from 'axios';
import { isAuthenticated } from '../utils';
const token = isAuthenticated().accessToken
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    }
});
export default instance;