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
      meta: {
        order: 1,
        title: 'whoami — Zyrif'
      }
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
      meta: {
        order: 2,
        title: 'Skills — Zyrif'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        order: 3,
        title: 'Projects — Zyrif'
      }
    },
    {
      path: '/education',
      name: 'education',
      component: Education,
      meta: {
        order: 4,
        title: 'Education — Zyrif'
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: Experience,
      meta: {
        order: 5,
        title: 'Experience — Zyrif'
      }
    },
    {
      path: '/interests',
      name: 'interests',
      component: Interests,
      meta: {
        order: 6,
        title: 'Interests — Zyrif'
      }
    }
  ]
})
