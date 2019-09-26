<template>
  <v-app>
    <navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
  import Navbar from '@/components/nav/Navbar.vue'

export default {
  name: 'zyrif.ravenshq.net',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
