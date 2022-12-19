<template>
	<Email
		v-if="props.question.input_type === 'TextEmail'"
		:placeholder="props.question.placeholder"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		required
	/>
	<InputText
		v-if="props.question.input_type === 'Text'"
		:placeholder="props.question.placeholder"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		required
	/>
	<Dropdown
		id="dropdown"
		v-if="question.input_type === 'DropdownCountry'"
		:placeholder="question.placeholder"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		required
	/>
	<PhoneNum
		v-if="question.input_type === 'TextPhoneNum'"
		:placeholder="question.placeholder"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
		required
	/>
	<CheckBox
		v-if="question.name === 'will_never_crimes'"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
	/>
	<CheckReq
		v-if="question.name === 'never_done_crimes'"
		:modelValue="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
	/>
</template>
<script setup>
import Email from './Email.vue';
import InputText from './InputText.vue';
import Dropdown from './Dropdown.vue';
import PhoneNum from './Telephone.vue';
import CheckBox from './CheckBox.vue';
import CheckReq from './CheckReq.vue';

const props = defineProps({
	modelValue: [String, Number, Boolean],
	question: Object,
});

const emit = defineEmits(['update:modelValue']);
</script>