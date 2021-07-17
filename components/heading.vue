<template>
  <div>
    <h1 class="font-bold font-sans text-4xl md:text-5xl">
      {{ heading }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: ["heading"],
};
</script>

<style>
</style>