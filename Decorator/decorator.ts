import http from './http'

function request(type: String) {
  return function(target: any, key: String, desc: PropertyDescriptor) {
    const oldVal = desc.value

    desc.value = function() {
      const newVal = {
        ...oldVal.apply(null, arguments),
        method: type
      }
      return http(newVal) // 此处可以改为 promise
    }
  }
}

function requestUrl(url: String) {
  return function(target: any, key: String, desc: PropertyDescriptor) {
    const oldVal = desc.value

    desc.value = function() {
      const newVal = {
        ...oldVal.apply(null, arguments),
        url,
      }
      return newVal
    }
  }
}

export { requestUrl, request}
