import Vue from 'vue'
import App from './App.vue'
import components from './components'
import vuetify from './plugins/vuetify'
import router from './router'
import '../src/assets/css/app.scss';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

Vue.config.productionTip = false
document.title = 'آنلاین نو پوز'

Vue.use(components)
Vue.component('menu-icon', MenuIcon);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
