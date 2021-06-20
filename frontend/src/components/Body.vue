<template>
  <div class="" ref="element" style="width: 100%; height: 100%">
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
import { defineComponent, h, shallowRef } from "vue";
import "golden-layout/dist/css/goldenlayout-base.css";
import "golden-layout/dist/css/themes/goldenlayout-light-theme.css";

const Test = defineComponent({ render: () => h('span', 'It works!') });

const components = { Test, /* other components */ };

export default defineComponent({
  name: "Body",
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

</style>