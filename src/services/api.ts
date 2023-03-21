import axios from "axios";
import enviroment from "../enviroments";

export const api = axios.create({
    baseURL: enviroment.API_URL
})