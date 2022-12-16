<template>
	<h1>{{ form.name }}</h1>
	<form @submit.prevent="submit()" class="form">
		<div v-for="stage in form.stages" :key="stage.name"></div>
		{{ formdata }}
		<!-- <button id="button" @click="submit()">Next</button> -->
	</form>
</template>

<script setup>
import form from './onboarding.json';
import { ref } from 'vue';
import InputWrapper from './Inputs/InputWrapper.vue';

const formdata = ref({});

const submit = () => {
	console.log('SUBMITTING FOR REALSIES', formdata.value);
};
</script>