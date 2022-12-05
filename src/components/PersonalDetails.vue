 <script setup>
import form from "./onboarding.json";
import Email from "./Inputs/Email.vue";
import InputText from "./Inputs/InputText.vue";
import Dropdown from "./Inputs/Dropdown.vue";
import PhoneNum from "./Inputs/Telephone.vue";
import CheckBox from "./Inputs/CheckBox.vue";
form;
Email;
InputText;
Dropdown;
CheckBox;
PhoneNum;
</script>

<template>
  <h1>{{ form.name }}</h1>
  <form class="form" @submit.prevent="onSubmit">
    <div v-for="stage in form.stages" :key="stage.name">
      <h2>{{ stage.label }}</h2>

      <div id="groups" v-for="group in stage.groups" :key="group.name">
        <h3>{{ group.label }}</h3>

        <div
          id="questions"
          v-for="question in group.questions"
          :key="question.name"
        >
          <div id="labels">
            <h4>{{ question.label }}</h4>

            <Email
              v-if="question.input_type === 'TextEmail'"
              :placeholder="question.placeholder"
              required
            />
            <InputText
              v-if="question.input_type === 'Text'"
              :placeholder="question.placeholder"
              required
            />
            <Dropdown
              id="dropdown"
              v-if="question.input_type === 'DropdownCountry'"
              :placeholder="question.placeholder"
              required
            />
            <PhoneNum
              v-if="question.input_type === 'TextPhoneNum'"
              :placeholder="question.placeholder"
              required
            />
            <CheckBox v-if="question.input_type === 'BoolCheckbox'" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <input id="submit" type="submit" value="Submit" />
    </div>
  </form>
</template>



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
input[type="checkbox"] {
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

#submit {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 12px;
  background-color: #008cba;
  transition-duration: 0.4s;
}
#submit:hover {
  background-color: #4caf50; /* Green */
  margin: auto;
}
#dropdown {
  background: blanchedalmond;
}
</style>

