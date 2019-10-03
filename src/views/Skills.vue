<template>
  <transition name="fade" mode="out-in">
    <v-container fluid class="fill-height skills">
      <div class="page">
        <h3>Languages </h3>
        <skill-grid v-bind:values="this.languageList" v-bind:chip="$vuetify.breakpoint.mdAndDown" />

        <h3> Frameworks, Tools and Services </h3>
        <skill-grid v-bind:values="this.ftsCombinedList" v-bind:chip="$vuetify.breakpoint.mdAndDown" />
      </div>
    </v-container>
  </transition>
</template>

<script>
import SkillGrid from '@/components/skills/SkillGrid.vue'
export default {
  data () {
    return {
      languageList: [
        {'name': 'Python', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Javascript', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'C#', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'PHP', 'icon': 'icon', 'color': 'primary', 'link': '#'},
      ], 
      frameworksList: [
        {'name': 'Django', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Vue.js', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Vuetify', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'ASP.NET MVC', 'icon': 'icon', 'color': 'primary', 'link': '#'},
      ], 
      toolsList: [
        {'name': 'Git', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Node', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'VS Code', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Anaconda', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Webpack', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Babel', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Dlib', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Keras', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Tensorflow', 'icon': 'icon', 'color': 'primary', 'link': '#'},
      ],
      servicesList: [
        {'name': 'Github', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Bitbucket', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Firebase', 'icon': 'icon', 'color': 'primary', 'link': '#'},
        {'name': 'Digital Ocean', 'icon': 'icon', 'color': 'primary', 'link': '#'},
      ]
    }
  },
  components: {
    SkillGrid
  },
  computed: {
    ftsCombinedList () {
      return this.frameworksList.concat(this.toolsList, this.servicesList)
    }
  }
}
</script>

<style>
.container.skills {
    background-color: #222;
}
</style>