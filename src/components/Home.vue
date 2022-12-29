<template>
  <v-container class="bg-grey-lighten-2" pa="0" ma="0">
    <v-row justify="space-around">
      <v-col cols="12" md="4">
        <v-card :title="layoutDetails.title" :subtitle="layoutDetails.subTitle" :text="layoutDetails.title" elevation="0">
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card :title="layoutDetails.title" :subtitle="layoutDetails.subTitle" :text="layoutDetails.title" elevation="0">
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card :title="layoutDetails.title" :subtitle="layoutDetails.subTitle" :text="layoutDetails.title" elevation="0">
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

const name = "Home"
import {computed, inject, reactive, ref, watch} from "vue";

const store = inject('store')

const host = window.location.hostname

const layout = ref({
  "title": "None",
  "subTitle": "None",
  "nextNodeId": 10000,
  "assignId": true
})

const layoutDetails = computed(() => {
  //console.log(`Computed Layout Details`)

  if (store.state.layout.layoutDetails !== undefined) {
    console.log(`Computed Layout Details defined`)
    layout.value = store.state.layout.layoutDetails
    return store.state.layout.layoutDetails
  } else {
    console.log(`Computed Layout Details undefined`)
    return layout
  }
})

watch(layoutDetails, () => {
  console.log(`WATCH Nodes`)
  layout.value = store.state.layout.layoutDetails
})

</script>

<style scoped>

</style>