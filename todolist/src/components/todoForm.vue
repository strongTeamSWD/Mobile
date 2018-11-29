<template>
  <div class="add">
    <h3> {{additem}}</h3>
      <hr>
       <input class="form-control" v-model="newTask" placeholder="Add task" type="text">
       <button @click="addTask" class="btn btn-info">Add</button>
  
    <h3>{{todo}}</h3>
      <hr>
       <ul>
         <li v-for = "task in tasks" :key="task.id" class="todoList">
           <input class="form-control" @click="editTask(task)" type="text" v-model="task.name" key="todo-input"> 
           <input v-model="task.completedTask" type="checkbox" class="option-input checkbox" checked> 
           <button class="btn btn-info" @click= "deleteTask(task)">Delete</button>
       </li>
    </ul>

   <h3>{{complete}}</h3>
      <hr> 
       <ul class="completed">
        <li v-for= "task in completedTasks" :key="task.id" class="doneList">
         <input type="checkbox" v-if="task.completedTask" class="strikethrough" name="strike" key="done-input">
         <label for="strike" class="strikeThis" v-if="task.completedTask">{{task.name}}</label>
         <button class="btn btn-primary" @click= "deleteCompletedTask(task)">x</button>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      headerTitle: 'To do List',
      additem: "Add task",
      todo: "To do",
      complete: "Completed",
      newTask: "",
      tasks: []
    }

  },
  methods:{
    addTask(){
      	var task = this.newTask.trim();
					this.tasks.push({name: task, completedTask: false});
					this.newTask = "";
				
    }, 
    deleteTask(task){
    var index=this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    },
    deleteCompletedTask(task){
    var index=this.completedTasks.indexOf(task);
    this.completedTasks.splice(index, 1);
    this.$forceUpdate();
    },

    editTask(){
      
    }
  },
  computed: {
    completedTasks() {
      let spisok = [];
      this.tasks.forEach(task => {
        if (task.completedTask === true) {
          spisok.push(task);
        }
      })
      return spisok;
    }

  },
  watch: {
    completedTask() {
      console.log("changing");
    }
  }

}
</script>


<style>

h2 {
  font-weight: normal;
  font-family: Arial, Helvetica, sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
  
}
.btn{
    margin-top: 10px;
}
.form-control {
  margin: 0 auto;
  font-size: 18px;
  line-height: 30px;
  height: 40px;
  padding: 10px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 6px;
  font-family: Lato, sans-serif;
  color: #888;
  width: 250px;
}
hr{
  width: 300px;
}
.todoList{
    margin-top: 10px;
}
.editTask{
  display: none;
}
.completed{
    padding: 0;
    display: block;
}
.doneList{
     width: 300px;
     margin: 5px auto;
     border-radius: 3px;
}
.strikeThis{
    float: left;
    padding-left: 20px;
}
.strikeThrough{
    float: right;
    margin-top: -10px;
}
.strikethrough:checked + .strikeThis{
  text-decoration: line-through; 
}
.btn-primary{
    padding: 5px;
    line-height: 5px;
    margin-top: -5px;
}

.option-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  position: relative;
  top: -40px;
  right: 0;
  bottom: 0;
  left: 0;
  height: 30px;
  width: 30px;
  transition: all 0.15s ease-out 0s;
  background: #cbd1d8;
  border: none;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  outline: none;
  position: relative;
  z-index: 1000;
  float: right;

}
.option-input:hover {
  background: #9faab7;
}
.option-input:checked {
  background: #00BFFF;
}
.option-input:checked::before {
  height: 30px;
  width: 30px;
  position: absolute;
  content: '✔';
  display: inline-block;
  font-size: 26.66667px;
  text-align: center;
  line-height: 30px;
}
.option-input:checked::after {
  background: #40e0d0;
  content: '';
  display: block;
  position: relative;
  z-index: 100;
}

</style>