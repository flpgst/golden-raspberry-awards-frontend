import Vue from 'vue';
import axios from './plugins/axios';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
console.log('process.env.apiUrl :>> ', process.env.apiUrl);
console.log('process.env :>> ', process.env);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
