<template>
  <div class="container flex flex-col mx-auto h-full w-full">
    <div class="mt-4 pt-2 flex flex-row md:flex-row-reverse">
      <div class="dropdown w-1/3">
        <div class="searchBar ">
          <div class="form-control">
            <div class="input-group">
              <input tabindex="0" type="text" placeholder="Search…" class="input input-bordered"/>
              <button class="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ul tabindex="0" class="w-80 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap flex-grow  h-full w-full">
      <div class="md:w-1/4 bg-base-100 w-full shadow-md">
        <div class="w-full">
          <div class="px-4 mt-4 border rounded shadow-md">
            <div class=" pb-2 ">
              <p class="font-bold ">最新</p>
            </div>
            <div class="font-semibold">一个一个一个</div>
          </div>
          <div class="px-4 mt-4 border rounded shadow-md">
            <div class="mt-2 py-2 p-4">
              <p class="font-bold ">标签</p>
            </div>
            <div class="font-semibold">一个一个一个</div>
          </div>

        </div>
      </div>
      <div class="md:w-3/4 pl-4 bg-base-100 w-full ">


          <div class="MainContext h-full flex-col flex justify-between ">
            <ul class="steps steps-vertical">
              <li class="step step-primary">Register</li>
              <li class="step step-primary">Choose plan</li>
              <li class="step">Purchase</li>
              <li class="step">Receive Product</li>
            </ul>
            <div class="items-center flex-row flex justify-center mb-4">
              <div class="btn-group">
                <button class="btn">«</button>
                <button class="btn">Page 22</button>
                <button class="btn">»</button>
              </div>
            </div>
          </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "Archives.vue"
}
</script>

<style scoped>

</style>