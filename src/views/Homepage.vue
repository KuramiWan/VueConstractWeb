<template>
  <div class="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">计算机义诊</h1>
        <p class="mb-5">海南师范大学计算机义诊,帮助老师和同学解决使用计算机过程中遇到的各种问题</p>
        <router-link to="/contract">
        <button class="btn btn-primary">预约入口</button>
        </router-link>
      </div>
    </div>
  </div>
<!--  <div class="h-screen bg-cover bg-local bg-center flex items-center" style="background-image: url(https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png)">-->
<!--    <div class="container mx-auto">-->
<!--      <div class="text-2xl">123123123</div>-->
<!--      <div class="text-center  text-base">123123</div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="flex flex-col justify-center items-center w-full">
    <div class="flex flex-wrap flex-grow w-full  text-white ">
      <div class="px-4 bg-accent flex-grow">
        <div class="p-12">
          <div class="section ">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="stroke-2 w-12 h-12 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="mt-4 mb-4 font-semibold">计算机使用答疑</div>
            <div class="mt-10 mb-4">解决计算机使用问题,软件问题</div>
          </div>
        </div>
      </div>
      <div class="px-4 bg-primary flex-grow">
        <div class="p-12">
          <div class="section ">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="stroke-2 w-12 h-12 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="mt-8 mb-4">计算机故障解决</div>
            <div class="mt-10 mb-4">常见windows蓝屏问题,故障,系统重装.</div>
          </div>
        </div>
      </div>
      <div class="px-4 bg-secondary flex-grow">
        <div class="p-12">
          <div class="section ">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="stroke-2 w-12 h-12 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="mt-8 mb-4">it技术交流</div>
            <div class="mt-10 mb-4">互联网开发技术交流与学习</div>
          </div>
        </div>
      </div>
      <div class="px-4 bg-purple-500 flex-grow">
        <div class="p-12">
          <div class="section ">
            <div class="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="stroke-2 w-12 h-12 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="mt-8 mb-4">志愿活动</div>
            <div class="mt-10 mb-4">下属青年志愿者协会</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-base-100 text-base-content flex flex-col  items-center py-4 lg:w-3/4">
      <div class="pt-5 pb-3 mt-10 mb-4"><p class="font-semibold text-2xl">快速入口</p></div>
        <div class="flex justify-center flex-col items-center flex-wrap flex-grow w-full my-8">
          <div class="px-4 flex-grow flex items-center justify-center flex-col max-w-1/3">
            <div class="fill-current">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div class="my-4">预约请求</div>
            <div class="my-4">填写你的基本信息预约服务,按指定时间携带电脑线下见面,解决问题</div>
          </div>
          <div class="px-4 flex-grow flex items-center justify-center flex-col max-w-1/3">
            <div class="fill-current">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div class="my-4">预约列表</div>
            <div class="my-4">查看预约列表,了解预约状态</div>
          </div>
          <div class="px-4 flex-grow flex items-center justify-center flex-col max-w-1/3">
            <div class="fill-current">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="stroke-2 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <div class="my-4">问题归档</div>
            <div class="my-4">过往问题收集,了解常见问题,学习计算机知识</div>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
</script>