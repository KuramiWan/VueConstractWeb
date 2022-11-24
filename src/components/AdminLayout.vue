<template>
  <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content">
      <div class="lg:hidden h-24 items-center w-full flex ">
        <label for="my-drawer-2" class="drawer-button px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
        </label>
        <div class="font-semibold w-full p-4 flex items-center">
          <span class="text-2xl text-primary">后台</span><span class="text-xl">管理</span>
        </div>
      </div>
      <div class="p-8">
        <div class="text-4xl font-extrabold text-base-content mt-4">
          预约管理
        </div>
        <div class="text-sm breadcrumbs mt-4">
          <ul>
            <li class="badge badge-ghost" v-for="breadCrumb in Breadcrumbs()" :key = "breadCrumb.path"><a>{{breadCrumb.meta.title}}</a></li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <router-view></router-view>
    </div>
    <div class="drawer-side ">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <aside class="bg-base-200 w-80">
        <div class="font-semibold w-full hidden p-4 lg:flex items-center"><span class="text-4xl text-primary">后台</span><span class="text-3xl">管理</span></div>
      <ul class="menu p-4 w-80 text-base-content">
        <!-- Sidebar content here -->
        <li><a href="#/admin/ticketManagementHome">预约管理</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
const route = useRoute()
function Breadcrumbs(){
  return route.matched;
}
</script>

<style scoped>

</style>