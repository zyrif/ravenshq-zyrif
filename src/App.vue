<template>
  <v-app>
    <navbar />
    <v-content>
      <transition v-bind:name="transitionName">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/nav/Navbar.vue'

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
  beforeRouteUpdate (to, from, next) {
    const toOrder = to.meta.order
    const fromOrder = from.meta.order
    this.transitionName = toOrder < fromOrder ? 'slide-down' : 'slide-up'
    next()
  }
}
</script>

<style lang="scss">

</style>
