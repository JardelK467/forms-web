<template>
  <div id="checkboxes">
    <label for="true"> True </label>
    <input type="checkbox" id="true" v-model="props.label" />
    <label for="false"> False </label>
    <input type="checkbox" id="false" v-model="props.label" />
  </div>
</template>
  
<script setup>
const props = defineProps({
  input_type: String,
  label: String,
  placeholder: String,
});
</script> 