<template>
	<div id="fullname">
		<input
			type="text"
			id="textinput"
			:placeholder="props.placeholder"
			:value="props.modelValue"
			@input="emit('update:modelValue', $event.target.value)"
			required
		/>
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: String,
	input_type: String,
	placeholder: String,
});
const emit = defineEmits(['update:modelValue']);
</script>
