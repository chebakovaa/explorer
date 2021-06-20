<template>
  <div class="window">
    <nav data-role="ribbonmenu">
      <ul class="tabs-holder">
          <li class="static" @click="showConfig"><a href="#">DataBase</a></li>
          <li><a href="#section-main">Main</a></li>
          <li><a href="#section-map">Map</a></li>
          <li class="disabled"><a href="#section-table">Table</a></li>
          <li><a href="#section-help">Help</a></li>
      </ul>
      <div class="content-holder">
        <div class="section" id="section-main">
            <p class="p-4">Section Main</p>
        </div>
        <div class="section" id="section-map">
            <p class="p-4">Section Map</p>
        </div>
        <div class="section" id="section-table">
            <p class="p-4">Section Table</p>
        </div>
        <div class="section" id="section-help">
            <p class="p-4">Section Help</p>
        </div>
      </div>
    </nav>
    <div class="window-content">
    </div>
  </div>
</template>

<script lang = "ts">
import { onMounted, defineComponent } from 'vue'
import * as Metro from 'metro4'
import router from '@/router'

export default defineComponent({
  name: "Home",
  setup() {

    const showConfig = () => {
      console.log('toConfig')
      router.push('config')
    }

    onMounted(() => {
      Metro.init();
    })
    
    return {
      showConfig
    }

  },
})

</script>

<style>

/* .window {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-flow: column nowrap;
  position: relative !important;
} */

</style>
