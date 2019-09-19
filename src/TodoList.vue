<template>
  <div>
      <router-link to="/testRouter">test</router-link>
      <input class="item" v-model="inputValue">
      <button @click="handleSummit">submmit</button>
      <ul>
           <todo-item v-for="(item, index) of list"  :key="index" :content="item" :index="index"  @delete='handleDelete'/>
      </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'


export default {
    components: {
       'todo-item':TodoItem,
    },
    data (){
       return {
           inputValue:'',
           list :[],
       }
    },
    methods : {
       handleSummit(){
           this.list.push(this.inputValue),
           this.inputValue= ''
       },
       handleDelete(index){
           this.list.splice(index,1)
       }
    }
}
</script>

<style>

</style>