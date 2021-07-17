<template>
  <div
    class="
      rounded-xl
      bg-primary-900
      px-5
      py-8
      shadow-md
      flex-col
      justify-center
      items-center
      hover:shadow-xl
      transform
      transition
      hover:-translate-y-1
      duration-200
      cursor-pointer
    "
  >
    <div
      :class="biggerLogoLanguages.includes(language) ? `w-12` : `w-8`"
      class="h-8 mx-auto"
    >
      <slot />
    </div>
    <div class="flex-col mt-5">
      <h3 class="font-semibold font-sans my-3 text-lg text-gray-200">
        {{ language }}
      </h3>
      <p class="text-sm font-sans text-gray-300">
        {{ desp }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "stackCard",
  props: ["language", "desp"],
  data: function () {
    return {
      biggerLogoLanguages: ["Android | Native", "NuxtJS", "Golang"],
    };
  },
};
</script>

<style>
</style>