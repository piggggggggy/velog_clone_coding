import axios from "axios";

const api = axios.create({
    baseURL: "http://13.125.223.153:8080/"
});

export default api;