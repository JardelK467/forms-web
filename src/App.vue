 <template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <PersonalDetails />
</template>

<script>
import FormTest from './components/FormTest.vue'
import PersonalDetails from './components/PersonalDetails.vue'


export default {
  name: 'App',
  components: {
    FormTest,
    PersonalDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 