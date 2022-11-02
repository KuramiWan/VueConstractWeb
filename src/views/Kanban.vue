<template xmlns="http://www.w3.org/1999/html">
<div class="container mx-auto  ">
  <div class="flex flex-row h-full w-full mt-4 flex-wrap">
    <div class="lg:w-1/4 md:w-1/2 sm:w-1 h-full px-2" v-for="kanbanList in kanbanLists" :key ="kanbanList.status">
      <div class="collapse collapse-open">
        <div class="collapse-title text-xl font-medium">
          {{kanbanList.status}}
        </div>
        <div class="collapse-content" v-for="kanban in kanbanList" :key ="kanban.id">
          <div class="mt-4 card w-full  shadow-xl ">
            <div class="card-body">
              <h2 class="card-title">{{kanbanList.question}}</h2>
              <p>{{kanbanList.createTime}}</p>
              <div class="card-actions justify-end">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script lang="ts" setup>
import axios from "axios";
let kanbanLists:Array<Object> =[]
const stateMap = {
  undone:"未完成",
  done:"已完成",
  cancel:"取消",
  expired:"过期"
}

onMounted(() =>{
  axios.get('/getKanban').then(
    response =>{
      kanbanLists = response.data
      console.log(kanbanLists)
    }
  )
})
</script>

<style scoped>

</style>