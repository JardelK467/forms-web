<template>
	<input
		id="email"
		type="email"
		:placeholder="props.placeholder"
		pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
		:value="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		required
	/>
</template>

<script setup>
const props = defineProps({
	modelValue: String,
	input_type: String,
	placeholder: String,
});

const emit = defineEmits(['update:modelValue']);
</script>
