<template>
	<h1>{{ form.name }}</h1>
	<form>
		<div v-for="(stage, index) in form.stages" :key="stage.name">
			<div v-if="routePathMatchesStage($route.params.pathMatch, stage, index)">
				<h2>{{ stage.label }}</h2>
				<div v-for="group in stage.groups" :key="group.name" style="border: 1px solid">
					<h2>{{ group.label }}</h2>

					<div v-for="question in group.questions" :key="question.name" style="border: 1px solid">
						<h3>{{ question.label }}</h3>

						<!-- <input type="email" /> -->

						<InputWrapper
							::placeholder="question.placeholder"
							:modelValue="props.modelValue"
							@input="emit('update:modelValue', $event.target.value)"
							required
						/>
					</div>
				</div>
				<RouterLink :to="getNextPage(form.stages, index)">
					<button>Next</button>
				</RouterLink>
			</div>
		</div>

		{{ formdata }}
	</form>
</template>

<script setup>
import form from './onboarding.json';
import { RouterLink } from 'vue-router';

import { ref } from 'vue';
import InputWrapper from './Inputs/InputWrapper.vue';

const formdata = ref('');
const getNextPage = (allStages, currentIndex) => {
	//TODO Factor in conditionals into this
	if (allStages.length <= currentIndex + 1) return submit();
	else return allStages[currentIndex + 1].name;
};
const routePathMatchesStage = (pathMatch, stage, index) => {
	const path = normaliseRoutePath(pathMatch);
	const direct_match = stage.name === path;
	const default_to_first = path === '' && index === 0;
	return direct_match || default_to_first;
};
const normaliseRoutePath = (pathMatch) => {
	//Mostly here to ensure we get a string not an array
	if (!Array.isArray(pathMatch)) return '';
	else return pathMatch.join('/');
};

const props = defineProps({
	modelValue: [String, Number, Boolean],
	question: Object,
});

const emit = defineEmits(['update:modelValue']);

const submit = () => {
	//Assign user input here
	//Push to API later
};
</script>

