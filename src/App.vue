<template>
  <FCUMain/>
</template>

<script>
import FCUMain from './components/FCUMain.vue'
import store from './store'
import {defineComponent, provide} from "vue"

export default defineComponent({
  name: "App",
  components: {
    FCUMain
  },
  setup() {
    provide('store', store)
    return {
      FCUMain
      }
    }
  }
)


</script>
