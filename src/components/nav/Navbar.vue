<template>
  <nav>
    <!-- <v-app-bar
      app
      flat
      short
    >
      <v-app-bar-nav-icon
        class="grey--text"
        v-on:click="toggleDrawer"
      />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">P</span>
        <span>Recog</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        color="grey"
      >
        <span>Sign Out</span>
        <v-icon right>
          mdi-exit-to-app
        </v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      permanent=""
      class="blue"
    >
      <v-list nav>
        <v-list-item
          v-for="item in drawerItems"
          v-bind:key="item.title"
          v-ripple
          router
          v-bind:to="item.route"
          active-class="white--text"
        >
          <!-- <v-list-item-icon>
            <v-icon dark>
              {{ item.icon }}
            </v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        drawerItems: [
          { icon: 'mdi-account-circle-outline', title: 'About', route: '/' },
          { icon: 'mdi-tools', title: 'Skills', route: '/skills' },
          { icon: 'mdi-monitor', title: 'Projects', route: '/projects' },
          { icon: 'mdi-monitor', title: 'Education', route: '/education' },
          { icon: 'mdi-monitor', title: 'Experience', route: '/experience' },
          { icon: 'mdi-monitor', title: 'Interests', route: '/interests' }
        ]
      }
    },
    methods: {
      toggleDrawer () {
        this.drawer = !this.drawer
      }
    }
  }
</script>


<style scoped>

.v-list {
    margin-top: 50%
}

.v-list-item__title {
    text-align: center
}
</style>