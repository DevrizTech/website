<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 bg-gray-800 p-8 rounded-lg transform transition duration-200 hover:-translate-y-2 cursor-pointer">
    <div class="place-self-center">
      <h1 class="font-sans work font-bold text-3xl text-white">{{ title }}</h1>
      <p class="my-4 text-gray-400 md:text-lg lg:prose-md">
        {{ desp }}
      </p>
      <ul v-for="element in list" :key="element">
        <li class="mt-1">
          <div class="inline-flex gap-x-2 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-primary-300 fill-current"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="text-sm text-gray-100">{{ element }}</p>
          </div>
        </li>
      </ul>
    </div>

    <img :class="marginImg" class="w-52 lg:max-w-sm lg:ml-12 place-self-center mt-12" :src="img" alt="" />
  </div>
</template>

<script>
export default {
  name: "techStackCard",
  props: ["title", "desp", "list", "img", 'marginImg'],
};
</script>

<style>
</style>