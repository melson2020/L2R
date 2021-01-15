import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
// import "lib-flexible";
import Element from 'element-ui'
import './assets/style.css'  // 外部static样式 引入即生效
import "element-ui/lib/theme-chalk/index.css";
import my from './assets/js/lbc.js' //全局函数


Vue.config.productionTip = false;

//Date 对象添加format 函数转成String
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

Vue.prototype.$my=my //全局函数  使用方法  this.$my.NumberDiv()
Vue.prototype.$message = Element.Message;
Vue.prototype.$messageBox = Element.MessageBox;

String.prototype.endWith = function (endStr) {
  var d = this.length - endStr.length;
  return d >= 0 && this.lastIndexOf(endStr) == d;
};


Vue.use(Element, {
  size: 'medium', // set element-ui default size
});
//清除所有state 值使用
localStorage.setItem("initState", JSON.stringify(store.state));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
