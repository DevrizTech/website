<template>
  <div class="text-center mb-64">
    <heading heading="What's the Tech Stack?" />
    <p class="my-4 text-lg text-gray-500 md:text-xl lg:prose-lg">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
      quibusdam consequuntur qui voluptatem ipsum quis ratione quasi omnis
      eveniet reiciendis?
    </p>
    <div class="grid mt-12 gap-x-5 gap-y-5 grid-cols-2 xxs:grid-cols-1 md:grid-cols-3 md:max-w-3xl md:mx-auto">
      <stack-card
        v-for="lang in langStack.languages"
        :key="lang.name"
        :language="lang.name"
        :desp="lang.desp"
      >
        <img :src="lang.logo" alt="" />
      </stack-card>
    </div>
  </div>
</template>

<script>
import heading from "./heading.vue";
import StackCard from "./stackCard.vue";
import langStack from "~/static/data/stack.json";
console.log(langStack);
export default {
  data: function () {
    return {
      langStack,
    };
  },
  components: { heading, StackCard },
  name: "Stack",
};
</script>

<style>
</style>