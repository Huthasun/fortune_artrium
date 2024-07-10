import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'
const client = axios.create(
    {
        // baseURL:"http://192.168.29.68:80/hms",
        // baseURL: "http://35.154.107.192:80"
        baseURL:"http://hms.automactechnologies.in/hms",

    }
)

export default client


// "http://3.110.48.213:5000/hms"