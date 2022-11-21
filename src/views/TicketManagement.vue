<template>
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
  <div class="mt-4">

    <div class="sm:px-6 w-full">
      <div class="px-4 md:px-10 py-4 md:py-7">
        <div class="flex items-center justify-between">
          <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white">Tasks</p>
          <div class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 dark:text-gray-200  bg-gray-200 dark:bg-gray-800  hover:bg-gray-300   dark:hover:bg-gray-700  cursor-pointer rounded">
            <p>Sort By:</p>
            <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
              <option class="text-sm text-indigo-800">Latest</option>
              <option class="text-sm text-indigo-800">Oldest</option>
              <option class="text-sm text-indigo-800">Latest</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-900  py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div class="sm:flex items-center justify-between">
          <div class="flex items-center">
            <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800" href=" javascript:void(0)">
              <div class="py-2 px-8 text-gray-600 dark:text-gray-200  hover:text-indigo-700 hover:bg-indigo-100 rounded-full" @click = "selector($event)">
                <p>已完成</p>
              </div>
            </a>
            <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
              <div class="py-2 px-8 text-gray-600 dark:text-gray-200  hover:text-indigo-700 hover:bg-indigo-100 rounded-full " @click = "selector($event)">
                <p>已完成</p>
              </div>
            </a>
            <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
              <div class="py-2 px-8 text-gray-600 dark:text-gray-200  hover:text-indigo-700 hover:bg-indigo-100 rounded-full " @click = "selector($event)">
                <p>已取消</p>
              </div>
            </a>
            <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8" href="javascript:void(0)">
              <div class="py-2 px-8 text-gray-600 dark:text-gray-200  hover:text-indigo-700 hover:bg-indigo-100 rounded-full " @click = "selector($event)">
                <p>已过期</p>
              </div>
            </a>
          </div>
          <button onclick="popuphandler(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p class="text-sm font-medium leading-none text-white">删除</p>
          </button>
        </div>
        <div class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <tbody>
            <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 dark:border-gray-600  rounded">
              <td>
                <div class="ml-5">
                  <div class="bg-gray-200 dark:bg-gray-800  rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                    <input placeholder="checkbox" type="checkbox" class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                    <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg7.svg" alt="check-icon">
                    </div>
                  </div>
                </div>
              </td>
              <td class="">
                <div class="flex items-center pl-5">
                  <p class="text-base font-medium leading-none text-gray-700 dark:text-white mr-2">Marketing Keynote Presentation</p>
<!--                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg1.svg" alt="clip">-->
                </div>
              </td>
              <td class="pl-24">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>

                  <p class="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">Urgent</p>
                </div>
              </td>
              <td class="pl-5">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>

                  <p class="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">04/07</p>
                </div>
              </td>
              <td class="pl-5">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p class="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">23</p>
                </div>
              </td>
<!--              <td class="pl-5">-->
<!--                <div class="flex items-center">-->
<!--                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg5.svg" alt="paper clip">-->
<!--                  <p class="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">04/07</p>-->
<!--                </div>-->
<!--              </td>-->
              <td class="pl-5">
                <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">Due today at 18:00</button>
              </td>
              <td class="pl-4">
                <button class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 dark:text-gray-200  py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-700   dark:bg-gray-800  focus:outline-none">View</button>
              </td>
              <td>
                <div class="relative px-5 pt-2">
                  <button class="focus:ring-2 rounded-md focus:outline-none" onclick="dropdownFunction(this)" role="button" aria-label="option">
                    <img  class="dropbtn" onclick="dropdownFunction(this)" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg6.svg" alt="dropdown">
                  </button>
                  <div class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                    <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Edit</p>
                    </div>
                    <div tabindex="0" class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                      <p>Delete</p>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr class="h-3"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!--    <div class="overflow-x-auto w-full px-8">-->
<!--      <table class="table w-full">-->
<!--        &lt;!&ndash; head &ndash;&gt;-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th>姓名</th>-->
<!--          <th>电话</th>-->
<!--          <th>问题</th>-->
<!--          <th>图片</th>-->
<!--          <th>创建时间</th>-->
<!--          <th></th>-->
<!--          <th></th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        &lt;!&ndash; row 1 &ndash;&gt;-->
<!--        <tr>-->
<!--          <td>-->
<!--            <div class="flex items-center space-x-3">-->
<!--              <div>-->
<!--                <div class="font-bold">Hart Hagerty</div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </td>-->
<!--          <td>-->
<!--            Zemlak, Daniel and Leannon-->
<!--          </td>-->
<!--          <td>Purple</td>-->
<!--          <td></td>-->
<!--          <td></td>-->
<!--          <th>-->
<!--            <button class="btn btn-ghost btn-xs" @click = "alertItem()">修改</button>-->
<!--          </th>-->
<!--          <th>-->
<!--            <button class="btn btn-ghost btn-xs" @click = "deleteItem()">删除</button>-->
<!--          </th>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--&lt;!&ndash;        &lt;!&ndash; foot &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <tfoot>&ndash;&gt;-->
<!--&lt;!&ndash;        <tr>&ndash;&gt;-->
<!--&lt;!&ndash;          <th></th>&ndash;&gt;-->
<!--&lt;!&ndash;          <th>Name</th>&ndash;&gt;-->
<!--&lt;!&ndash;          <th>Job</th>&ndash;&gt;-->
<!--&lt;!&ndash;          <th>Favorite Color</th>&ndash;&gt;-->
<!--&lt;!&ndash;          <th></th>&ndash;&gt;-->
<!--&lt;!&ndash;        </tr>&ndash;&gt;-->
<!--&lt;!&ndash;        </tfoot>&ndash;&gt;-->
<!--      </table>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import {request} from "../util/Interceptor";
import {useRoute} from 'vue-router';
const route = useRoute()

function Breadcrumbs(){
  console.log(route.matched)
  return route.matched;
}
function alertItem(){
  request.post('admin/alterTicket',{
    id : id,
    state : state
  }).then(response =>{
  }).catch(error =>{
    console.log(error)
  })
}
function deleteItem(){

}
function add(){

}
function selector(event){
  let state = event.target.firstChild.data
  request.get('admin/getTicket',{
      params:{
        state: state
      }
  }).then(response =>{
    let data = response.data.data
    console.log(data)
  }).catch(error =>{
    console.log(error)
  })
}
function dropdownFunction(element) {
  let dropdowns = document.getElementsByClassName("dropdown-content");
  let i;
  let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
  list.classList.add("target");
  for (i = 0; i < dropdowns.length; i++) {
    if (!dropdowns[i].classList.contains("target")) {
      dropdowns[i].classList.add("hidden");
    }
  }
  list.classList.toggle("hidden");
}
</script>

<style scoped>

.checkbox:checked + .check-icon {
  display: flex;
}

</style>