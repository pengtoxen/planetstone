import request from '@/utils/request'

export function getMsgCode(data) {
  return request({
    url: 'Mall/Login/getCode/fhelz5/',
    method: 'post',
    data
  })
}

export function getWxConfig(data) {
  return request({
    url: 'Mall/wxpai',
    method: 'post',
    data
  })
}
