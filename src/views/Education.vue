<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height education">
       <edu-items v-bind:values="this.items" />
    </v-container>
  </transition>
</template>

<script>
  import EduItems from "@/components/education/EduItems.vue"
  export default {
    components: {
      EduItems
    },
    data () {
      return {
        items: [
          {title: 'B.Sc in Computer Science & Engineering', institution: 'American International University-Bangladesh', date: '2014 - 2018 '},
          {title: 'HSC', institution: 'Cantonment Public School & College, Rangpur', date: '2013'},
          {title: 'SSC', institution: 'Cantonment Public School & College, Rangpur', date: '2011'}
        ]
      }
    }
  }
</script>

<style>
.container.education {
    background-color: #222;
}
</style>