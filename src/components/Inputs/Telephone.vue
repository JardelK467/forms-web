<template>
  <input type="tel" :placeholder="props.placeholder" />
</template>

<script setup>
const props = defineProps({
  input_type: String,
  label: String,
  placeholder: String,
});
</script>