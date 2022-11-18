<template >
<!--  <div class="h-screen bg-cover bg-local" style="background-image: url(https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png)"></div>-->
  <div class="mx-auto container px-4 mt-4 mb-2 flex flex-grow justify-center items-center">
    <div class="rounded-lg shadow-md border flex flex-col justify-center items-center sm:basis-11/12 lg:basis-10/12 container  pt-10 pb-12 ">
        <div class="font-bold text-2xl px-4 flex justify-center"><p class="">服务预约</p></div>
        <div class="flex justify-center items-center flex-wrap mt-8  w-full">
          <div class="lg:basis-4/12 sm:basis-10/12 items-center justify-center">
            <div class="flex flex-col">
              <div class="card card-side lg: pt-10">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                  </svg>
                </figure>
                <div class="card-body ">
                  <h2 class="card-title">计算机使用答疑</h2>
                  <p>解决计算机使用问题,软件问题</p>
                  <div class="card-actions justify-end">
                  </div>
                </div>
              </div>
              <div class="card card-side lg: pt-10">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                  </svg>
                </figure>
                <div class="card-body">
                  <h2 class="card-title">计算机故障解决</h2>
                  <p>常见windows蓝屏问题,故障,系统重装.</p>
                  <div class="card-actions justify-end">
                  </div>
                </div>
              </div>
              <div class="card card-side lg: pt-10">
                <figure>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                  </svg>
                </figure>
                <div class="card-body">
                  <h2 class="card-title">志愿活动</h2>
                  <p>下属青年志愿者协会</p>
                  <div class="card-actions justify-end">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:basis-4/12 sm:basis-11/12 flex items-center flex-col">
            <form class="justify-center items-center">
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
                <input type="tel" placeholder="Type here" required v-model="tel"
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
              <div class="form-control w-full max-w-xs">
                <label for="" class="label ">上传图片</label>
                <img src="previewUpload" alt="" class="">
                <input type="file"  accept=""  @change="uploadImage" class="" multiple>
              </div>
              <div class=" text-center">
                <button class="btn btn-primary rounded-full mt-4" @click="commit">提交预约</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  </div>
  <notifications position="botton right" />
</template>
<script lang="ts" setup>
import axios from "axios";
import {ref} from "vue";
import {notify} from "notiwind";
import {request} from "../util/Interceptor";
let img: string | any[] | null = [], phoneNumber = ref(''),
    userName = ref(''), college = ref(''),
    question = ref(''), tel = ref(''),
    previewImage: String | ArrayBuffer | null = null;

const uploadImage = (e:any) =>{
  img = e.target.files
}
const commit =()=>{
  let formData = new FormData();
  if (img!=null){
    for (let i = 0;i < img.length;i++) {
      formData.append('files', img[i])
    }
  }
  formData.append("userName",userName.value)
  formData.append("phoneNumber",phoneNumber.value)
  formData.append("question",question.value)
  formData.append("tel",tel.value)
  let headers = {
    'Content-Type': 'multipart/form-data'
  }
  request.post('/addTicket',formData,{headers:headers}).then(response =>{
    console.log(response)
  }).catch(e=>{
    console.log(e)
  })
}
const checkForm = () =>{

}
</script>