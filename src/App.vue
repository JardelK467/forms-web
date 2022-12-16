 <template>
	<img alt="Vue logo" src="./assets/bootlegBTlogo.jpeg" />
	<!-- <router-view></router-view> -->
	<CapturePageVue />
</template>

<script>
import CapturePageVue from './components/CapturePage.vue';

export default {
	name: 'App',
	components: {
		CapturePageVue,
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
	background: navy;
}
</style> 