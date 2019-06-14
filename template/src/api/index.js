import axios from 'axios'
var qs = require('qs');

axios.defaults.transformRequest = [function(data) {
  if(!data) data = {};
  return qs.stringify(data)
}];

axios.defaults.transformResponse = [function(data) {
  const t = JSON.parse(data)
  t.code = +t.code

  if(t.code !== 0){
    alert(t.errmsg)
  }
  return t
}];


export default {
  // 首页信息
  homeInfo(params) {
    return axios.post('/wine/portal/info', params)
  }

}
