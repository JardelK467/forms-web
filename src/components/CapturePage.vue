<template>
	<div class="onboarding-box">
		<h1>{{ form.name }}</h1>
		<form @submit.prevent="submit()" class="form">
			<div v-for="stage in form.stages" :key="stage.name">
				<h2 v-if="stage.name === 'capture'">{{ stage.label }}</h2>

				<div v-for="group in stage.groups" :key="group.name" style="border: 1px solid">
					<h2 v-if="group.name === 'lead'">{{ group.label }}</h2>

					<div v-for="question in group.questions" :key="question.name" style="border: 1px solid">
						<h3 v-if="question.name === 'email'">{{ question.label }}</h3>
					</div>
				</div>
			</div>
			<!-- <button id="button" @click="melf()">Next</button> -->
			<input type="email" v-model="inputEmail" required />
			{{ inputEmail }}
		</form>
	</div>
</template>

<script setup>
import form from './onboarding.json';
import { ref } from 'vue';
import Email from './Inputs/Email.vue';

const inputEmail = ref('');

const next = () => {
	console.log('SUBMITTING FOR REALSIES', inputEmail);
};

const registrations = () => {
	this.$emit(user);
	user.registered = true;
};

const props = defineProps({
	modelValue: [String, Number, Boolean],
	question: Object,
});

const emit = defineEmits(['update:modelValue']);
</script>

