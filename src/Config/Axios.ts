import axios from "axios";
import { Global } from "./Global";

const axiosConfig = axios.create({
    baseURL: Global.url,
    headers:{
        'Content-Type': 'application/json'
    },
});

export default axiosConfig;