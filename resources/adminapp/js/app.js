require('./bootstrap')

window.Vue = require('vue')
window.moment.updateLocale('en', { week: { dow: 1 } })

Vue.config.productionTip = false
Vue.prototype.$jquery = $

import App from './App.vue'

// Router
import router from './routes/routes'
import store from './store/store'

// Plugins

import GlobalComponents from './globalComponents'
import GlobalDirectives from './globalDirectives'
import GlobalMixins from './mixins/global'

Vue.use(GlobalComponents)
Vue.use(GlobalDirectives)
Vue.use(GlobalMixins)

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
