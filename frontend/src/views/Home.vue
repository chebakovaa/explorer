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
          <div class="group">
                  <button class="ribbon-button">
                          <span class="icon">
                              <span class="mif-flow-cascade"></span>
                          </span>
                      <span class="caption">Data Tree</span>
                  </button>

                  <span class="title">Main elements</span>
              </div>
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
      <Body/>
    </div>
  </div>
</template>

<script lang = "ts">
import { onMounted, onBeforeUnmount, defineComponent } from 'vue'
import * as Metro from 'metro4'
import router from '@/router'
import Body from '@/components/Body.vue'

export default defineComponent({
  name: "Home",
  components: {
    Body
  },

  setup() {


    const showConfig = () => {
      router.push('settings')
    }

    onMounted(() => {
      Metro.init();
    })

    // onBeforeUnmount(() => {
    //   Metro.destroy();
    // })
    
    return {
      showConfig
    }

  },
})

</script>

<style>

.window {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100% !important;
  flex-flow: column nowrap;
} 

</style>
