<template>
  <v-app>
    <v-app-bar class="bg-blue-darken-2 text-white" elevation="0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ mainTitle }}</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer class="bg-white text-black" v-model="drawer">
      <v-list nav>
        <v-list-item :title="link.title"
                     :value="link.caption"
                     :prepend-icon="link.icon"
                     v-for="link in menuList"
                     :key="link.title"
                     v-bind="link"
                     @click="display_component=link.component">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-grey-lighten-2">
      <component :is="display_component"></component>
    </v-main>
  </v-app>
</template>

<script>


const linksList = [
  {
    title: "Home",
    caption: "Home Page",
    icon: "mdi-home",
    component: "Home",
  },
  {
    title: "Nodes",
    caption: "MERG Modules",
    icon: "mdi-timeline-outline",
    component: "Nodes",
  },
  {
    title: "Events",
    caption: "Captured Events",
    icon: "mdi-gesture-double-tap",
    component: "Events",
  },
  {
    title: "Settings",
    caption: "FCU Settings",
    icon: "mdi-cog-outline",
    component: "Settings",
  },
  {
    title: "Store",
    caption: "Store Details",
    icon: "mdi-database",
    component: "Store",
  },
  {
    title: "Errors",
    caption: "Errors",
    icon: "mdi-alert",
    component: "Errors",
  },
]

//import FCUMain from './components/FCUMain.vue'
import Home from './Home.vue'
import Nodes from './Nodes.vue'
import Events from './Events.vue'
//import store from './store'
import {ref, defineComponent, inject, watch} from "vue"

//import { useCbusStore } from "./stores/CbusStore.js"

export default defineComponent({
      name: "FCUMain",
      components: {
        Home, Nodes, Events
      },
      setup() {

        const store = inject('store')
        const title = ref("Title")
        const subtitle = ref("Subtitle")
        //provide('store', store)
        const drawer = ref(null)
        const display_component = ref("Home")
        /*watch(store.state.layout.layoutDetails,(value) => {
          if (store.state.layout.layoutDetails.title) {
            title.value = store.state.layout.layoutDetails.title
          }
        })*/
        return {
          drawer, display_component,
          menuList : linksList,
          store, title
        }
      },
      computed: {
        mainTitle () {
          if (this.store.state.layout.layoutDetails === undefined) {
            return this.title
          } else {
            if (this.store.state.layout.layoutDetails.title === undefined) {
              return this.title
            } else {
              return this.store.state.layout.layoutDetails.title
            }
          }
        },
        subTitle () {
          if (this.store.state.layout.layoutDetails === undefined) {
            return this.subTitle
          } else {
            if (this.store.state.layout.layoutDetails.subTitle === undefined) {
              return this.subTitle
            } else {
              return this.store.state.layout.layoutDetails.subTitle
            }
          }
        }
      }

    }
)

</script>