<template>
  <div id="app">
    <center>
    <h3> Got jokes ?</h3>
    <button class="btn btn-success" @click="initJokes"> Read 10 random jokes</button>
    <button class="btn btn-info" @click="addJoke"> Add a Joke</button>

    <br>
    <span v-for="type in types">
      <input type="checkbox" :value="type" v-model="checkedTypes" checked>
      <label>{{type}}</label>&nbsp;
    </span>
    <br>
    </center>
    <div class="col-md-12">
      <Joke v-for = "(joke, index) in $store.state.jokes"
      v-show = "checkedTypes.includes(joke.type)"
      :joke ="joke" 
      :index ="index" 
      :key="index"></Joke>
    </div>
  </div>
</template>
<script>
  
  import {mapActions} from 'vuex'
  import Joke from './Joke'

  export default {
    data(){
      return{
        types:['general','knock-knock','programming'],
        checkedTypes: ['general','knock-knock','programming']
      }
    },
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components:{
      Joke
    }
  }
</script>

