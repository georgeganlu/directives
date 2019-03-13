import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import directive from './directive';

Vue.use(directive);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
