import axios from "axios";

export const BASE_URL = 'https://195.49.210.129'; 

let config = {
    baseURL: `${BASE_URL}/api/rest/productionService/`,
    timeout: 30000,
}

const instance = axios.create(config)

instance.interceptors.request.use(function (config) {
    let locale = localStorage.getItem('lang')

    if (!locale || locale === 'null' || locale === 'undefined') {
        locale = 'ru'
    }

    config.url = config.url + `${locale}`

    return config
})

export default instance
