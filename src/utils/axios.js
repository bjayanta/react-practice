import axios from "axios";

const apiClient = axios.create({
    // baseURL: "http://localhost:8000/api/",
    baseURL: "https://api.coderill.com/api/",
    withCredentials: true
});

export default apiClient;