<template>
<div class="config-frame">
  <ConfigLeftPanel/>
  <ConfigView/>
</div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ConfigLeftPanel from '@/components/ConfigLeftPanel.vue'
import ConfigView from '@/components/ConfigView.vue'

export default defineComponent({
  name: "Config",
  components: {
    ConfigLeftPanel,
    ConfigView
  },
})
</script>


<style scoped>
  .config-frame {
    background-color: bisque;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    position: absolute;
    bottom: 5px;
    top: 5px;
    right: 5px;
    left: 5px;
  }
</style>
