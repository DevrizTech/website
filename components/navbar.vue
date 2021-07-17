<template>
  <div class="h-16 flex justify-between items-center bg-white bg-opacity-60">
    <img class="p-3 w-36" src="~/static/images/logo_new_semi_fhd.svg" alt="" />
    <div class="px-4 py-6">
      <div class="hidden lg:flex">
        <nav class="font-medium text-sm inline-flex gap-x-5">
          <a
            class="
              transform
              transition
              duration-200
              hover:text-blue-700
              hover:-translate-y-1
            "
         href="#"
            >Home</a
          >
          <a
            class="
              transform
              transition
              duration-200
              hover:text-blue-700
              hover:-translate-y-1
            "
            href="#stack"
            >Stack</a
          >
          <a
            class="
              transform
              transition
              duration-200
              hover:text-blue-700
              hover:-translate-y-1
            "
           href="#about"
            >About
          </a>
          <div class="inline-flex gap-x-1">
            <a to="">Blog</a>
            <div
              class="
                self-center
                px-1
                py-0.5
                rounded
                bg-blue-600
                text-xs text-white
              "
            >
              Soon!
            </div>
          </div>
        </nav>
      </div>
      <div class="lg:hidden cursor-pointer"  @click="$store.commit('drawer/toggleDrawer')">
           <svg class="stroke-current text-black" xmlns="http://www.w3.org/2000/svg" width="31" height="15">
          <g fill="none" stroke="#000000" stroke-width="3">
            <path d="M0 1.5h31M0 13.5h31"/>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>
