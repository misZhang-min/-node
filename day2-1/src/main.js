
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vant from 'vant'
import 'vant/lib/index.css'
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Vant);
import { Tab, Tabs } from 'vant';

Vue.use(Tab).use(Tabs);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')