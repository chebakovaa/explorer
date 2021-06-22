<template>
  <div class="" ref="element" style="width: 100%; height: 100%; display: block;">
    <teleport
      v-for="{ id, type, element } in componentInstances"
      :key="id"
      :to="element">
      <component :is="type"></component>
    </teleport>
  </div>
</template>

<script lang="ts">
import { useGoldenLayout } from "./use-golden-layout";
import { defineComponent, h, onBeforeUnmount, shallowRef } from "vue";
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-light-theme.css";
import { LayoutConfig } from "golden-layout";

const Test = defineComponent({ render: () => h('span', 'It works!') });

const components = { Test, /* other components */ };

let glConfig = {
      root: {
        type: "row",
        content: [ {
              type: "component",
              componentType: "Test",
            },{
          type: "column",
          content: [
            {
              type: "component",
              componentType: "Test",
            },
            {
              type: "component",
              componentType: "Test",
            },
          ] },
        ]
      }};


export default defineComponent({
  name: "Body",
  components,
  setup(props, context) {

    const config = localStorage.getItem('GL.config');
    glConfig = config ? JSON.parse(config): glConfig;

    interface ComponentInstance {
      id: number;
      type: string;
      element: HTMLElement;
    }
    let instanceId = 0;
    const componentTypes = new Set(Object.keys(components));
    const componentInstances = shallowRef<ComponentInstance[]>([]);

    const createComponent = (type: string, element: HTMLElement) => {
      if (!componentTypes.has(type)) {
        throw new Error(`Component not found: '${type}'`);
      }
      ++instanceId;
      componentInstances.value = componentInstances.value.concat({
        id: instanceId,
        type,
        element,
      });
    };
    const destroyComponent = (toBeRemoved: HTMLElement) => {
      componentInstances.value = componentInstances.value.filter(
        ({ element }) => element !== toBeRemoved
      );
    };

    const { element, layout } = useGoldenLayout(createComponent, destroyComponent, glConfig as LayoutConfig);

    onBeforeUnmount(() => {
      localStorage.setItem('GL.config', JSON.stringify(layout.value?.saveLayout()));
      layout.value?.destroy();
    });

    return { element, componentInstances };
  },
});
</script>

<style scoped>
.lm_root {
  height: 100% !important; 
  width: 100vw !important;
}
</style>