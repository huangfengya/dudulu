export default function http(action: action) {
  const {
    url,
    method,
    params,
    cb = () => {},
    errCb = () => {},
  } = action
  
  // ajax 方法我没写，自己看着替换就行
  ajax({
    method,
    url,
    data: params,
    success: cb,
    failed: errCb,
  })
}