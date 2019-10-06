<template>
  <v-timeline
    dense
  >
    <v-timeline-item
      v-for="value in this.values"
      v-bind:key="value.title"
      color="blue"
      fill-dot
      icon="mdi-circle"
      icon-color="white"
      small
    >
      <v-card>
        <v-card-title class="blue">
          <v-icon size="28" class="mr-4 hidden-sm-and-down">
            mdi-pencil
          </v-icon>
          <span class="title white--text mr-4">
            {{ value.title }}
          </span>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col cols="1"
            class="hidden-sm-and-down"
            >
              <v-icon>mdi-office-building</v-icon>
            </v-col>
            <v-col cols="11">
              <span class="subtitle-1">
                {{ value.institution }}
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1"
            class="hidden-sm-and-down"
            >
              <v-icon>mdi-clock-outline</v-icon>
            </v-col>
            <v-col cols="11">
              <span class="subtitle-2">
                {{ value.date }}
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      //
    }
  }
}
</script>

<style scoped>
div.col {
  padding-top: 6px;
  padding-bottom: 6px;
}
</style>
