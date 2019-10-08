<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height about">
      <div class="page">
        <h1 class="display-2 mx-3 my-4">
          <span class="blue--text">M</span>
          <span class="font-weight-light mr-2">uhammad</span>
          <span class="blue--text">R</span>
          <span class="font-weight-light">ubaiyat</span>
        </h1>
        <div class="mx-3">
          <p class="my-2">
            <span>Mover of Bits</span>
            <span class="blue--text mx-4 font-weight-black">|</span>
            <span>Arranger of Pixels</span>
          </p>
          <p class="my-2">Likes to work with cutting-edge technologies to solve interesting problems</p>
          <p class="my-2">Based on Dhaka / Bangladesh</p>
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