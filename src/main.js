import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)

// * Dynamically change titles
router.beforeEach((to, from, next) => {
  const nextRoute = to.matched.slice().reverse().find(route => route.meta && route.meta.title)
  if (nextRoute) {
    document.title = nextRoute.meta.title
  }
  next()
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
