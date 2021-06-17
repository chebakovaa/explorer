<template>
<div >
  
  <div class="" ref="element" style="width: 100%; height: 80vh">
    <teleport
      v-for="{ id, type, element } in componentInstances"
      :key="id"
      :to="element">
      <component :is="type"></component>
    </teleport>
  </div>
</div>
</template>

<script lang="ts">
import { useGoldenLayout } from "../components/use-golden-layout";
import { defineComponent, h, shallowRef } from "vue";
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-dark-theme.css";

const Test = defineComponent({ render: () => h('span', 'It works!') });

const components = { Test, /* other components */ };

export default defineComponent({
  components,
  setup() {
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

    const { element } = useGoldenLayout(createComponent, destroyComponent, {
      root: {
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
        ],
      },
    });

    return { element, componentInstances };
  },
});
</script>

<style scoped>
position: absolute;
    bottom: 10px;
    top: 70px;
    right: 10px;
    left: 10px;
</style>