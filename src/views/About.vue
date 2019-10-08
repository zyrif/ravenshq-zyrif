<template>
  <transition name="fade" mode="out-in">
    <v-container class="fill-height about">
      <div class="page">
        <v-row class="mx-2 my-4">
          <v-col cols="auto" class="display-2 pa-1">
              <span class="blue--text">M</span>
              <span class="font-weight-light">uhammad</span>
          </v-col>
          <v-col cols="auto" class="display-2 pa-1">
              <span class="blue--text">R</span>
              <span class="font-weight-light">ubaiyat</span>
          </v-col>
        </v-row>
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