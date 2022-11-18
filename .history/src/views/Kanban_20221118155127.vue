<template xmlns="http://www.w3.org/1999/html">
<div class="container mx-auto">
  <div class="text-4xl">状态列表</div>
  <div class="flex flex-row h-full w-full mt-4 flex-wrap">
    <div class="lg:w-1/4 md:w-1/2 sm:w-1 h-full px-2" v-for="kanbanList in kanbanLists" :key ="kanbanList">
      <div class="collapse collapse-open w-full">
        <div class="collapse-title text-xl font-medium">
          {{kanbanList.state}}
        </div>
        <div class="collapse-content ">
          <div class="mt-4 card shadow-xl" v-for="kanban in kanbanList.userTicketVoList" :key="kanban">
            <div class="card-body" >
              <h2 class="card-title">{{kanban.question}}</h2>
              <p class="">{{kanban.createTime}}</p>
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
import {Popover} from "@headlessui/vue";
import {request} from "../util/Interceptor";

let kanbanLists=ref([]);
onMounted(() =>{
  request.get('/getTicket').then(
    response =>{
      kanbanLists.value = response.data.data
      console.log(kanbanLists)
    }
  )
})
</script>

<style scoped>

</style>