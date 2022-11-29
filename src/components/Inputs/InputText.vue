<template>
  <div id="fullname">
    <input type="text" :placeholder="props.placeholder" />
  </div>
</template>

<script setup>
import onboarding from "@/components/";
const props = defineProps({
  input_type: String,
  label: String,
  name: String,
  placeholder: String,
});
</script>