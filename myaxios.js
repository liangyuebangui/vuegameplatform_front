import Vue from 'vue'
import axios from "axios";
import router from "@/router";

axios.defaults.baseURL="http://localhost:8080";
// axios.defaults.baseURL=(process.env.NODE_PATH==='development'?"http://localhost:8080":param.app.apiServer);
axios.defaults.headers.common['token'] = "";




// axios.interceptors.response.use((res) => {
//     if (res.data.code === 401) {
//         sessionStorage.removeItem("token");
//         axios.defaults.headers.common['token'] = "";
//         router.push("/home");
//     }
//     if (res.data.code === 403) {
//         alert('您没有当前模块的访问权限');
//         router.push("/home");
//     }
//     return res
// })


Vue.prototype.$axios=axios;
