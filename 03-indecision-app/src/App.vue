<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <MyCounter :value="1" text="Hola mundo" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
</template>

<style scoped>
h1 {
  color: green;
}
</style>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
