<template>
	<input
		type="tel"
		id="tel"
		:placeholder="props.placeholder"
		size="20"
		minlength="9"
		maxlength="14"
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
