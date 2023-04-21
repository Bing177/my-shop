// api.js
const baseUrl = 'https://localhost:8888'

// 请求拦截器
function requestInterceptor(config) {
  // 在请求发送之前做一些处理，比如添加请求头或请求参数等
  if(uni.getStorageSync('token')){
	 config.header = {
	   'Content-Type': 'application/json',
	 	'Authorization':uni.getStorageSync('token')
	 } 
  }
  uni.$showMsg('数据加载中',1000,'loading')
  return config
}

// 响应拦截器
function responseInterceptor(response) {
  // 对响应数据做一些处理，比如解析响应数据或统一处理错误信息等
  if (response.statusCode === 200) {
	uni.$showMsg('加载成功',1000,'success')
    return response.data
  } else {
	uni.$showMsg()
    return Promise.reject(response.errMsg)
  }
}

function request(url, method='GET',timeout=3000, data={}, header = {}) {
  return new Promise((resolve, reject) => {
    // 调用请求拦截器
    const interceptor = requestInterceptor({
      url: baseUrl + url,
      method,
	  timeout,
      data,
      header
    })

    uni.request({
      url: interceptor.url,
      method: interceptor.method,
      data: interceptor.data,
      header: interceptor.header,
      success: res => {
        try {
          // 调用响应拦截器
          const data = responseInterceptor(res)
          resolve(data)
        } catch (error) {
          reject(error)
        }
      },
      fail: err => {
        reject(err)
      }
    })
  })
}

export default {
  get(url, data, header = {}) {
    return request(url, 'GET', data, header)
  },
  post(url, data, header = {}) {
    return request(url, 'POST', data, header)
  }
}
