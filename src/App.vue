 <template>
	<img alt="Vue logo" src="./assets/bootlegBTlogo.jpeg" />
	<!-- <router-view></router-view> -->
	<FormPage />
</template>

<script>
import FormPage from './components/FormPage.vue';

export default {
	name: 'App',
	components: {
		FormPage,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	background: white;
}
</style> 