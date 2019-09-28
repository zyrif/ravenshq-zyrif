<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height skills">
        <div class="page">
            <h1>Skills</h1>
            <h3>Languages </h3>
            <ul>
              <li> Python </li>
              <li> Javascript </li>
              <li> C# </li>
              <li> PHP </li>
            </ul>

            <h3>Tools & Frameworks </h3>
            <ul>
              <li> Django </li>
              <li> Vue.js </li>
              <li> Vuetify </li>
              <li> ASP.NET MVC </li>
              <li> Wordpress </li>
            </ul>
        </div>
    </v-container>
  </transition>
</template>

<script>
export default {
    //
}
</script>

<style>
.container.skills {
    background-color: #222;
}
</style>