// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 全局引入axios;
import axios from "axios";
Vue.prototype.$http = axios;
//全局引入qs
import qs from "qs";
Vue.prototype.$qs = qs;
// 全局引入过滤器
import Filter from "./filter"
for (var i in Filter) {
    Vue.filter(i, Filter[i])
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})