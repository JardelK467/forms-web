<template>
  <input
    type="tel"
    :placeholder="props.placeholder"
    size="20"
    minlength="9"
    maxlength="14"
  />
</template>

<script setup>
const props = defineProps({
  input_type: String,
  label: String,
  placeholder: String,
});
</script>