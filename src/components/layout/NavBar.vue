<template>

  <div class="text-sm w-full bg-base-200" >
    <div class="container mx-auto">
      <nav class="px-4 py-3  flex justify-between items-center bg-opacity-90 ">
        <div class="text-neutral">
          <a class="w-6  focus:ring-base-100" href="#">
            <div class="avatar">
              <div class="w-6 rounded-full">
                <img src="https://placeimg.com/192/192/people"/>
              </div>
            </div>
          </a>
        </div>
        <div class="text-base-content font-bold space-x-6 flex items-center h-full">
          <ul class="flex space-x-4 ">
            <li>
              <a href="/#/contract" class="hover:text-accent">预约请求</a>
            </li>
            <li>
              <a href="/#/kanban" class="hover:text-accent">预约列表</a>
            </li>
            <li>
              <a href="/#/archives" class="hover:text-accent">问题归档</a>
            </li>
          </ul>
          <select data-choose-theme class="rounded bg-base-300 text-xs select-sm">
            <option value="light">明亮</option>
            <option value="dark">黑暗</option>
            <option value="cupcake">蛋糕</option>
          </select>
        </div>
      </nav>
    </div>
  </div>

</template>
<script lang="ts">
import {themeChange} from 'theme-change'

export default {
  setup(){
    onMounted(
        ()=>{
          themeChange(false)
        }
    )
  }
}
</script>
<style scoped>

</style>
