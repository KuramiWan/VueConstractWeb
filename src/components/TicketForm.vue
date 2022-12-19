<template>
  <div class="justify-center items-center">
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">你的姓名?</span>
      </label>
      <input type="text" placeholder="Type here" required v-model="userName"
             class="peer focus:invalid:border-pink-500 focus:invalid:ring-pink-600 input input-bordered w-full max-w-xs"/>
      <label class="label peer-required:visible ">
        <span class="label-text-alt text-pink-600">必填</span>
      </label>
    </div>
    <!--              <div class="form-control w-full max-w-xs">-->
    <!--                <label class="label">-->
    <!--                  <span class="label-text">你的学院?</span>-->
    <!--                </label>-->
    <!--                <input type="text" placeholder="Type here" v-model="college" class="input input-bordered w-full max-w-xs"/>-->
    <!--                <label class="label invisible">-->
    <!--                  <span class="label-text-alt ">Alt label</span>-->
    <!--                </label>-->
    <!--              </div>-->
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text text-pink-600">你的电话?</span>
      </label>
      <input type="tel" placeholder="Type here" required v-model="phone"
             pattern="^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[01356789]\d{2}|4(?:0\d|1[0-2]|9\d))|9[189]\d{2}|6[567]\d{2}|4(?:[14]0\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$"
             class="input peer input-bordered w-full max-w-xs focus:invalid:ring-pink-600 focus:invalid:border-pink-500"/>
      <label class="label peer-invalid:visible invisible ">
        <span class="label-text-alt text-pink-600">输入11位电话</span>
      </label>
    </div>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text text-pink-600">你的问题?</span>
      </label>
      <textarea class="textarea textarea-bordered h-24 peer"  v-model="question"  required placeholder="Bio"></textarea>
      <label class="label peer-required:visible invisible">
        <span class="label-text-alt text-pink-600">必填</span>
      </label>
    </div>
<!--    <div class="form-control w-full max-w-xs">-->
<!--      <label for="" class="label ">上传图片</label>-->
<!--      <input type="file"  accept=""  @change="uploadImage" class="" multiple>-->
<!--    </div>-->
    <div class=" text-center">
      <button class="btn btn-primary rounded-full mt-4" @click="commit">提交预约</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {request} from "../util/Interceptor";
import {useRouter} from "vue-router";
import {notify} from "notiwind";
//正则
const phoneMatch = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
const router = useRouter();
let  phone = ref(''),
    userName = ref(''),
    question = ref(''), tel = ref('');
const commit =()=>{

  if (checkForm()){
    return false;
  }
  let formData = new FormData();
  formData.append("name",userName.value)
  formData.append("phone",phone.value)
  formData.append("question",question.value)
  let headers = {
    'Content-Type': 'multipart/form-data'
  }
  request.post('/addTicket',formData,{headers:headers}).then(response =>{
    router.push('/#/')
  }).catch(e=>{
    console.log(e)
  })
}
const checkForm = () =>{
  console.log(userName.value)
  if (!(userName.value&&phone.value&&question.value)){
    notify({
      title:"失败",
      type:"error",
      text:"请填写必要信息",
      group:"failed"
    })
    return true;
  }else if (!(phoneMatch.test(phone.value))){
    notify({
      title:"失败",
      type:"error",
      text:"手机号错误",
      group:"failed"
    })
    return true;
  }else {
    return false;
  }
}
</script>

<style scoped>

</style>