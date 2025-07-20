<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
/* Forma comun en JS
const props = defineProps<Props>();
  value: { type: Number, required: true },
  text: { type: String, required: true },
});
*/

/* Antes de usar composables
import { computed, ref } from 'vue';
interface Props {
  value: number;
  text: string;
}

const props = defineProps<Props>();

const counter = ref(props.value);
const text = ref(props.text);
const squareCounter = computed(() => counter.value * counter.value);*/

// Con composables
import { useCounter } from '@/composables/useCounter';
const { counter, squareCounter } = useCounter(10);
</script>

<style scoped>
.btn {
  background-color: var(--color-blue-500);
  padding: calc(var(--spacing) * 5);
  border-radius: 0.25rem;
  margin-right: calc(var(--spacing) * 2);
  &:hover {
    @media (hover: hover) {
      background-color: var(--color-blue-700);
    }
  }
}
</style>
