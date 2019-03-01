// 导入格式化时间的插件
import moment from 'moment'

export function dateFormat(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
}
