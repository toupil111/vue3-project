import axios from "axios";
import qs from "qs";
const serverConfig = {
    baseURL: "http://127.0.0.1:8888", // 请求基础地址,可根据环境自定义
    useTokenAuthorization: true, // 是否开启 token 认证
  };

const serviceAxios = axios.create({
    baseURL: serverConfig.baseURL, // 基础请求地址
    timeout: 10000, // 请求超时设置
    withCredentials: false, // 跨域请求是否需要携带 cookie
});
  

// 创建请求拦截
serviceAxios.interceptors.request.use(
  (config) => {
    console.log(config,'configconfigconfig');
    // 如果开启 token 认证
    if (serverConfig.useTokenAuthorization) {
      config.headers["Authorization"] = localStorage.getItem("token"); // 请求头携带 token
    }
    // 设置请求头
    if(!config.headers["content-type"]) { // 如果没有设置请求头
      if(config.method === 'post') {
        config.headers["content-type"] = "application/x-www-form-urlencoded"; // post 请求
        config.data = qs.stringify(config.data); // 序列化,比如表单数据
      } else {
        config.headers["content-type"] = "application/json"; // 默认类型
      }
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
console.log(serviceAxios,'serviceAxios');
export default serviceAxios;