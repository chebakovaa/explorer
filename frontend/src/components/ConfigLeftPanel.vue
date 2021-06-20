<template>
  <aside class="sidebar pos-absolute z-2"
       data-role="sidebar"
       data-toggle="#sidebar-toggle-4"
       id="sb4"
       data-shift=".shifted-content-2"
       data-static-shift=".shifted-content-2"
       data-static="md">
    <div class="sidebar-header">
        <div class="demo-box" data-role="imege-box" data-images="@/assets/db.png">
            <img data-role="gravatar">
        </div>
        <span class="title fg-black">PanoDB Explorer</span>
        <span class="subtitle fg-black"> 2021 © BiSoft</span>
    </div>
    <ul class="sidebar-menu">
        <li @click="goHome"><a><span class="mif-home icon"></span>Home</a></li>
        <li><a><span class="mif-tools icon"></span>Settings</a></li>
        <li class="divider"></li>
        <li><a><span class="mif-download2 icon"></span>Save</a></li>
    </ul>
  </aside>
</template>

<style scoped>
  .demo-box {
    width: 100px;
    height: 100px;
    background-image: url("../assets/db.png");
    background-size: cover;
  }
</style>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue'
import * as Metro from 'metro4'

export default defineComponent({
  setup() {
    const goHome = () => {
      router.push('/');
    }

    return {
      goHome
    }
  },
})
</script>
