import axios from 'axios'
import qs from 'qs'
import apis from './apiUrl'
import NProgress from 'nprogress'

// axios 配置
axios.defaults.baseURL = 'http://localhost:8008';

//POST传参序列化 请求之前
axios.interceptors.request.use((config) => {
    NProgress.start()
    // if(config.method  === 'post'){
    //   config.data = qs.stringify(config.data);
    // }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断 请求之后
axios.interceptors.response.use((res) =>{
    // if(!res.data.success){
    //     return Promise.reject(res);
    // }
    return res;
}, (error) => {
    //404等问题可以在这里处理
    return Promise.reject(error);
});

export default {
    post(api, data) {
        return axios({
            method: 'post', // 请求协议
            url: apis[api], // 请求的地址
            data: qs.stringify(data), // post 请求的数据
            timeout: 10000, // 超时时间, 单位毫秒
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    },
    get(api, params) {
        return axios({
            method: 'get',
            url: apis[api],
            params, // get 请求时带的参数
            timeout: 10000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    }
}