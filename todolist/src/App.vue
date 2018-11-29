<template>
  <div id="app">
    <h1 class="title">{{ headerTitle }}</h1>
    <div class="container"> 
      <TodoForm></TodoForm>
</div>
  </div>
</template>

<script>
import TodoForm from './components/todoForm'
export default {
  name: 'app',
  components: {TodoForm },
  data () {
    return {
      headerTitle: 'To do List',
    }

  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  left: 0;
  margin-top: 50px;
}
h1, h2 {
  font-weight: normal;
}
.container{
  border: 1px solid #CCCC;
  background: #fff;
  width: 500px;
}
.title{
  font-style: italic;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
