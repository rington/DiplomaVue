import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hotels from "./components/Hotels/Hotels.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import Home from "./components/Home.vue"
import HotelsAdd from "./components/Hotels/HotelsAdd.vue"
import HotelDelete from "./components/Hotels/HotelDelete.vue"
import HotelsUpdate from './components/Hotels/HotelUpdate.vue';
import axios from "axios";
axios.defaults.withCredentials = true

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/registration', component: Register },
    { path: '/hotels', component: Hotels },
    { path: '/hotels/add', component: HotelsAdd },
    { path: '/hotels/delete', component: HotelDelete },
    { path: '/hotels/update', component: HotelsUpdate },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')