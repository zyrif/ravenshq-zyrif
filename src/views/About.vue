<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height about">
      <div class="page">
        <h1>Muhammad Rubaiyat</h1>
        <div>
          <p> Mover of Bits | Arranger of Pixels </p>
          <p> Likes to work with cutting-edge technologies to solve interesting problems </p>
          <p> Based on Dhaka / Bangladesh </p>
        </div>
        <!-- <span> LinkedIn </span>
        <span> Github </span>
        <span> Email </span>
        <span> Resume </span>-->
        <v-row>
          <v-col cols="12">
            <span>
              <v-btn text>LinkedIn</v-btn>
            </span>
            <span>
              <v-btn text>Github</v-btn>
            </span>
            <span>
              <v-btn text>Email</v-btn>
            </span>
            <span>
              <v-btn text>Resume</v-btn>
            </span>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </transition>
</template>

<script>
export default {
  //
};
</script>

<style>
.container.about {
  background-color: #222;
}
</style>