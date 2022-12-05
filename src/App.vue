 <template>
  <img alt="Vue logo" src="./assets/bootlegBTlogo.jpeg" />

  <PersonalDetails />
</template>

<script>
import PersonalDetails from "./components/PersonalDetails.vue";

export default {
  name: "App",
  components: {
    PersonalDetails,
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
  background: blanchedalmond;
}
</style> 