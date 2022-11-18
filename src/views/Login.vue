<template>
  <div class="items-center flex justify-center h-screen bg-base-200">
    <div class="container flex items-center h-full justify-center">
      <div class="w-2/3 h-1/2 rounded-2xl overflow-hidden flex border shadow-xl">
        <div class="w-1/2 h-full bg-white flex items-center justify-center flex-col">
          <div class="font-bold text-3xl text-center my-8 text-center">登录</div>
          <div class="mt-4">
            <label class="label">
              <span class="label-text">用户名</span>
            </label>
            <input type="text" placeholder="Type here" class="input w-full max-w-xs bg-base-200 mt-4"/>
          </div>
          <div class="mt-4">
            <label class="label">
            <span class="label-text">密码</span>
            </label>
            <input type="text" placeholder="Type here" class="input w-full max-w-xs bg-base-200 mt-4"/>
          </div>
          <div class=" mt-4">
            <button class="btn bg-accent w-24 rounded-3xl font-semibold">GO</button>
          </div>
        </div>
        <div class="w-1/2 h-full bg-accent flex flex-col items-center justify-center text-white">
          <div class="font-semibold text-4xl">欢迎!</div>
          <div class="font-mono mt-8 text-2xl">请登录</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>

</style>