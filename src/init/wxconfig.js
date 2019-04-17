import Vue from 'vue'
import { WechatPlugin } from 'vux'
import { getWxConfig } from '@/api/common'
Vue.use(WechatPlugin)
// getWxConfig()
//     .then(data => {
//         Vue.wechat.config({
//             debug: true,
//             appId: data.appId, // 必填，公众号的唯一标识
//             timestamp: data.timestamp, // 必填，生成签名的时间戳，精确到秒
//             nonceStr: data.nonceStr, // 必填，生成签名的随机串
//             signature: data.signature, // 必填，签名
//             jsApiList: ["scanQRCode"]
//         });
//     })
//     .catch(() => {
//         console.log('jssdk error');
//     });
// Vue.wechat.config({
//     debug: true,
//     appId: data.appId, // 必填，公众号的唯一标识
//     timestamp: data.timestamp, // 必填，生成签名的时间戳，精确到秒
//     nonceStr: data.nonceStr, // 必填，生成签名的随机串
//     signature: data.signature, // 必填，签名
//     jsApiList: ["scanQRCode"]
// });