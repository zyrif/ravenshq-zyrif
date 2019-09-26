import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Education from './views/Education.vue'
import Experience from './views/Experience.vue'
import Interests from './views/Interests.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
      meta: { order: 1 }
    },
    {
      path: '/',
      name: 'skills',
      component: Skills,
      meta: { order: 2 }
    },
    {
      path: '/',
      name: 'projects',
      component: Projects,
      meta: { order: 3 }
    },
    {
      path: '/',
      name: 'education',
      component: Education,
      meta: { order: 4 }
    },
    {
      path: '/',
      name: 'experience',
      component: Experience,
      meta: { order: 5 }
    },
    {
      path: '/',
      name: 'interests',
      component: Interests,
      meta: { order: 6 }
    }
  ]
})
