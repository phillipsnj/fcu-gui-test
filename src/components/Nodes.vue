<template>
<h1>Nodes</h1>

  <h5>{{ nodes }}</h5>
</template>

<script setup>

import {computed, inject, ref, watch} from "vue";

name = "Nodes"
const store = inject('store')

const nodes = ref(store.state.nodes)

const nodeList = computed(() => {
  //console.log(`Computed Events`)
  return Object.values(store.state.nodes)
})

watch(nodeList, () => {
  console.log(`WATCH Nodes`)
  nodes.value = store.state.nodes
})

</script>

<style scoped>

</style>