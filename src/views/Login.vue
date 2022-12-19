<template>
  <NotificationGroup group="success">
    <div
        class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm">
        <Notification
            v-slot="{ notifications }"
            enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
        >
          <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-green-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-green-500">{{ notification.title }}</span>
                <p class="text-sm text-gray-600">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
  <NotificationGroup group="failed">
    <div
        class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
    >
      <div class="w-full max-w-sm">
        <Notification
            v-slot="{ notifications }"
            enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
        >
          <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
          >
            <div class="flex items-center justify-center w-12 bg-pink-500">
              <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-green-500">{{ notification.title }}</span>
                <p class="text-sm text-gray-600">{{ notification.text }}</p>
              </div>
            </div>
          </div>
        </Notification>
      </div>
    </div>
  </NotificationGroup>
  <div class="items-center flex justify-center h-screen bg-base-200">
    <div class="container flex items-center h-full justify-center">
      <div class="w-2/3 h-1/2 rounded-2xl overflow-hidden flex border shadow-xl">
        <div class="w-1/2 h-full bg-white flex items-center justify-center flex-col">
          <div class="font-bold text-3xl text-center my-8 text-center">登录</div>
          <div class="mt-4">
            <label class="label">
              <span class="label-text">用户名</span>
            </label>
            <input type="text" placeholder="Type here" class="input w-full max-w-xs bg-base-200 mt-4" v-model="username"/>
          </div>
          <div class="mt-4">
            <label class="label">
            <span class="label-text">密码</span>
            </label>
            <input type="text" placeholder="Type here" class="input w-full max-w-xs bg-base-200 mt-4" v-model="password"/>
          </div>
          <div class=" mt-4">
            <button class="btn bg-accent w-24 rounded-3xl font-semibold" @click= "Login()">GO</button>
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

<script setup>
import {request} from "../util/Interceptor";
import {useRouter} from "vue-router";
let router = useRouter();
let username =ref();
let password =ref();

  const Login = () =>{
    request.post("/admin/login",{
      username:username.value,
      password:password.value
    }).then(
        response =>{
          let responseData = response.data;
          if (responseData.code === 10000){
            if (response.data){
              localStorage.setItem("Authenticate",responseData.data);
            }
            router.push("/admin/ticketManagementHome");
          }
        }
    ).catch(error =>{
      console.log(error);
    })
  }
</script>

<style scoped>

</style>