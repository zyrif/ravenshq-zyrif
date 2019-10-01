<template>
  <v-app>
    <navbar />
    <v-content
      v-touch:swipe="swipeHandler"
    >
      <transition v-bind:name="transitionName">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/nav/Navbar.vue'
  import _ from 'lodash'

export default {
  name: 'zyrif.ravenshq.net',
  data() {
    return {
      transitionName: 'slide-up'
    }
  },
  components: {
    Navbar
  },
  created () {
    window.addEventListener('wheel', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('wheel', this.handleScroll)
  },
  watch: {
    $route (to, from) {
      const toOrder = to.meta.order
      const fromOrder = from.meta.order
      this.transitionName = toOrder < fromOrder ? 'slide-down' : 'slide-up'
    }
  }, 
  methods: {
    // execute when scroll is detected
    handleScroll (event) {
      if (event.deltaY > 0) {
        this.goToPage('next')        
      }
      else if (event.deltaY < 0) {
        this.goToPage('previous')
      }
      else {
        console.warn("mousewheel deltaY should not be zero")
      }
    },

    // execute when touch is detected
    swipeHandler (direction) {
      if (direction == 'top') {
        this.goToPage('next')
      }
      else if (direction == 'bottom') {
        this.goToPage('previous')
      }
      else {
        //
      }
    },

    // navigate functionality
    goToPage: _.throttle( function (direction) {
      let routesObj = this.$router.options.routes
      let totalRoutes = routesObj.length
      // naming it nextOrder because it basically acts like one,
      // since the meta order numbering starts at 1
      let nextOrder = this.$route.meta.order

      if (direction == 'next' && (nextOrder < totalRoutes)) {
        this.$router.push(routesObj[nextOrder].path)
      }

      if (direction == 'previous' && (nextOrder > 1)) {
        this.$router.push(routesObj[nextOrder - 2].path)
      }

    }, 800, { 'trailing': false }),
  }
}
</script>

<style lang="scss">
@import 'src/assets/css/transitions';

html {
  overflow-y: hidden !important;
}

</style>
