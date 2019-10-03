<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center" v-if="!this.chip">
        <v-card 
          v-for="value in this.values" :key="value.name"
          class="ml-3 mt-3"
          flat
          ripple
          width="8vw"
          height="8vw"
        >
          <v-card-title class="justify-center pa-1" style="font-size: 1vw; height: 100%">
            <span>{{ value.name }}</span>
          </v-card-title>
        </v-card>
      </v-row>
      <v-row align="center" v-else>
        <v-chip 
          v-for="value in this.values" :key="value.name"
          class="ma-2" 
          label
          ripple
        >
          {{ value.name }}
        </v-chip>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      required: true
    },
    chip: {
      type: Boolean
    }
  }
}
</script>

<style scoped>

</style>
