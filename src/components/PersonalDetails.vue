 <script setup>
import form from "./onboarding.json";
import Email from "./Inputs/Email.vue";
import InputText from "./Inputs/InputText.vue";
import Dropdown from "./Inputs/Dropdown.vue";
import Checkbox from "./Inputs/CheckBox.vue";
import PhoneNum from "./Inputs/Telephone.vue";
import { placeholder } from "@babel/types";
</script>

<template>
  <h1>{{ form.name }}</h1>
  <form>
    <div v-for="stage in form.stages" :key="stage.name">
      <h2>{{ stage.label }}</h2>
      <div v-for="group in stage.groups" :key="group.name">
        <h3>{{ group.label }}</h3>
        <div v-for="question in group.questions" :key="question.name">
          <div>
            <h4>{{ question.label }}</h4>
            <Email
              v-if="question.input_type === 'TextEmail'"
              :placeholder="question.placeholder"
            />
            <InputText
              v-if="question.input_type === 'Text'"
              :placeholder="question.placeholder"
            />
            <Dropdown
              v-if="question.input_type === 'DropdownCountry'"
              :placeholder="question.placeholder"
            />
            <PhoneNum
              v-if="question.input_type === 'TextPhoneNum'"
              :placeholder="question.placeholder"
            />
            <input
              type="checkbox"
              v-if="question.input_type === 'BoolCheckbox'"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>



<style>
form {
  max-width: 430px;
  margin: 30px auto;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
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
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>

