<script>
import form from './onboarding.json';
export default{
    data(){
        return{
            data: form
        }
    }
}
</script>

<template>

	<h1>{{ form.name }}</h1>
	<form>
		<div v-for="stage in data" :key="stage.name">
			<h2>{{ stage.label }}</h2>
			<div v-for="group in data" :key="group.name" style="border: 1px solid">
				<h3>{{ group.label }}</h3>
			</div>
		</div>
	</form>
	<pre>{{ form }}</pre>
</template>

<style>
form{
    max-width: 430px;
    margin: 30px auto;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{

    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input{
    display: block;
    padding: 10px 6px;
    width:100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
</style>

