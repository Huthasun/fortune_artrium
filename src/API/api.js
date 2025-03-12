import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'
const client = axios.create(
    {
        // baseURL:"http://192.168.29.68:80",
        // baseURL:"http://192.168.1.12:80",
         baseURL:"https://hmsbackend.automactechnologies.in/",

        // baseURL: "http://13.234.149.251:80"
        // API Change 
        // baseURL:"https://hms.automactechnologies.in/",
        // baseURL:"http://localhost:80"

    }
)

export default client


// "http://3.110.48.213:5000/hms"