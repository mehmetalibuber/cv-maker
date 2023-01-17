import Vue from 'vue'
import App from './App.vue'
import jsPdf from 'jspdf'
import html2pdf from "html2pdf";


import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'
Vue.config.productionTip = false
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(jsPdf)
Vue.use(html2pdf)
new Vue({
  render: h => h(App),
}).$mount('#app')