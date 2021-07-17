<template>
  <div class="flex gap-y-8 flex-col h-screen justify-center items-center mx-12">
      <img src="/images/success_hand.png" class="w-36" alt="">
       <div class="text-center">
      <h1 class="font-sans font-black text-5xl text-gray-800">
        We will reach out <strong class="text-blue-600">ASAP!</strong>
      </h1>
      <p class="my-4 md:max-w-2xl text-gray-400 md:text-xl lg:prose-lg">
        Thank you. Your form has been submitted successfully.
      </p>
    </div>
    <div>
         <button
         @click="$router.push('/')"
            class="
              w-80
              shadow
              block
              bg-blue-700
              text-white
              font-bold
              px-4
              transition
              transform
              duration-200
              hover:bg-gray-800
              hover:shadow-lg
              hover:text-blue-400
              hover:-translate-y-1
              py-3
              rounded
            "
          >
            Continue Exploring
          </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>