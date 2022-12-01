<template>
  <div id="fullname">
    <input type="text" :placeholder="props.placeholder" />
  </div>
</template>

<script setup>
const props = defineProps({
  input_type: String,
  label: String,
  placeholder: String,
});
</script>
