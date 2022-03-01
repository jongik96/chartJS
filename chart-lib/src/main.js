import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin.js';
import {router} from './router/index.js'
Vue.config.productionTip = false

// install();
Vue.use(ChartPlugin);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
