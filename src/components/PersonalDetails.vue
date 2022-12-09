<template>
	<h1>{{ form.name }}</h1>
	<form @submit.prevent="submit()" class="form">
		<div v-for="stage in form.stages" :key="stage.name">
			<h2>{{ stage.label }}</h2>

			<div id="groups" v-for="group in stage.groups" :key="group.name">
				<h3>{{ group.label }}</h3>

				<div id="questions" v-for="question in group.questions" :key="question.name">
					<div id="labels">
						<h4>{{ question.label }}</h4>

						<InputWrapper
							:question="question"
							v-model="formdata[`${stage.name}__${group.name}__${question.name}`]"
						/>
					</div>
				</div>
			</div>
		</div>
		{{ formdata }}
		<button id="button" @click="mlem()">Register</button>
	</form>
</template>

<script setup>
import form from './onboarding.json';
import { ref } from 'vue';
import InputWrapper from './Inputs/InputWrapper.vue';

const formdata = ref({});
const mlem = () => {
	console.log(formdata.value);
};
const submit = () => {
	console.log('SUBMITTING FOR REALSIES', formdata.value);
};
</script>


<style>
form {
	max-width: 430px;
	margin: auto;
	text-align: left;
	padding: 40px;
	border-radius: 10px;
}
#ßlabels {
	color: blanchedalmond;
	display: inline-block;
	margin: auto;
	font-size: 0.6em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
}

input {
	display: block;
	padding: 10px 6px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
	background: blanchedalmond;
}
input[type='checkbox'] {
	display: inline-block;
	width: 16px;
	margin: 0 10px 0 0;
	position: relative;
	top: 2px;
}

#questions {
	border-radius: 25px;
	border: 2px solid;
	padding: 20px;
	width: 700px;
	max-height: fit-content;
	margin: 25px 0 15px;
}

#button {
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 12px;
	background-color: #008cba;
	transition-duration: 0.4s;
}
#button:hover {
	background-color: #4caf50; /* Green */
	margin: auto;
}
#dropdown {
	background: blanchedalmond;
}
</style>

