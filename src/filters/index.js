// 导入格式化时间的插件
import moment from 'moment'

export function dateFormat(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
}

export function nToBr(raw) {
  var reg = new RegExp("\\n", "ig");
  return raw.replace(reg, '<br>');
}