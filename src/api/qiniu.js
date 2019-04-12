import request from '@/utils/request'
import axios from 'axios'

export function getToken() {
  return request({
    url: '/Admin/Upload/token',
    method: 'get'
  })
}

export function upload(action, uptoken) {
  const config = {
      headers: { 'Content-Type': 'multipart/form-data' }
  }
  const formData = new FormData()
  formData.append('file', file)
  formData.append('token', uptoken)
  formData.append('key', keyname)
  return axios.post(action, formData, config)
}
