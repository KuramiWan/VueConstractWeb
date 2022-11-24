<template>
<div class="container h-full w-full flex  justify-center">
  <div class="my-8 px-4 w-1/2 flex flex-col items-center">
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">你的姓名?</span>
      </label>
      <input type="text" placeholder="Type here" required v-model="userName"
             class="peer focus:invalid:border-pink-500 focus:invalid:ring-pink-600 input input-bordered  w-full max-w-xs"/>
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
    <div class=" text-center">
      <button class="btn btn-primary rounded-full mt-4" @click="commit">提交预约</button>
    </div>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>

</style>