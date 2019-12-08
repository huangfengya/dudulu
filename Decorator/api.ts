import {request, requestUrl} from './decorator'

// 使用 class 作为集合
class Api {
  @request('get') // 请求方式
  @requestUrl('/api/get') // 请求地址
  public static getA(action: action) {
    // 这儿可以对 action 做处理
    return action // 别忘了返回哦
  }
}

// 使用
Api.getA({
  params: {},
  cb: (data: String) => {
    console.log(data)
  }
})
