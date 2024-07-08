import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'
const client = axios.create(
    {
        // baseURL:"http://192.168.29.68:80/hms",
        // baseURL: "http://3.110.48.213:80/hms"
        baseURL:"http://hms.automactechonoligies.in",

    }
)

export default client


// "http://3.110.48.213:5000/hms"