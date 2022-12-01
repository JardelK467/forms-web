<template>
  <div id="checkboxes">
    <label for="label"> {{ props.label }} </label>
    <input type="checkbox" id="label" v-model="props.criminal" />
  </div>
</template>
  
<script setup>
const props = defineProps({
  input_type: String,
  label: String,
  placeholder: String,
  criminal: false,
});
</script> 