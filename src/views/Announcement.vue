<template>
  <div class="container mx-auto flex justify-center items-center">
    <div class="font-semibold text-4xl">{{announcement.title}}</div>
    <div class="italic text-xl">更新于{{announcement.updateTime}}</div>
    <div class="text-2xl">{{announcement.detail}}</div>
  </div>
</template>
<script setup>
import {request} from "../util/Interceptor";
let announcement = ref({})
const router = useRouter();
const routeLocationNormalizedLoaded = useRoute();
routeLocationNormalizedLoaded.id
onMounted(() =>{
  request.get('/getAnnouncement').then(
      response =>{
        let data = response.data;
        announcement.value = data.data;
      }
  ).catch(error =>{
    console.log(error)
  })
})
</script>
