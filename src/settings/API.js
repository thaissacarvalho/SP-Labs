import axios from 'axios';

const API = axios.create({
    baseURL: "https://sp-labs.vercel.app",
});

export default API;