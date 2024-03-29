// 引入axios
import axios from 'axios'
// 引入qs模块，对数据进行序列化
import QS from 'qs'
// 引入message模块，toast提示
import { message } from 'ant-design-vue'
// // 引入storage模块，操作token
// import { session } from '@/utils/storage.js'

const API = axios.create({
  baseURL: 'https://localhost:6001',
  timeout:2000
  
  });

  // const API = axios.create({

    
  //   });

// 请求超时时间
API.defaults.timeout = 10000

// 请求拦截器
API.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    if(config.method.toUpperCase() === 'POST') {
      config.headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    return config
  },
  error => {
    return Promise.error(error)
  })
// 响应拦截器
API.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          message.error('网错错误，请稍后再试！')
          break
        case 404:
          message.error('网错错误，请稍后再试！')
          break
        // 其他错误，直接抛出错误提示
        default:
          message.error(error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  debugger;
  return new Promise((resolve, reject) =>{
    API.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function post(url, params) {
  return new Promise((resolve, reject) => {
    API.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * get方法，对应get请求,直接在地址后面拼串的形式
 * @param {String} url [请求的url地址]
 * @param {String} params [请求时携带的参数]
 */
export function getDynamicynamic(url, params) {
  return new Promise((resolve, reject) =>{
    const completeUrl = `${url}/${params}`
    API.get(completeUrl, {})
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，导出文件
 * @param {String} url [请求的url地址]
 * @param {String} params [请求时携带的参数]
 */
export function getFileUseBlobByPost(url, params = {}) {
	return new promise((resolve, reject)=> {
		axios({
	      method: 'post',
	      url,
	      data: params,
	      responseType: 'blob'
	    })
	      .then(res => {
	        resolve(res)
	      })
	      .catch(err => {
	        reject(err.data)
	      })
		})
}
