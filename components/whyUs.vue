<template>
  <div class=" mt-48 bg-blue-700 p-8 py-16">
    <div class="mb-16">
      <h1 class="font-sans font-black text-5xl  text-white mt-8">Why Choose us<strong class="text-white">?</strong></h1>
        <p class=" md:max-w-xl my-4 text-gray-300 md:text-xl lg:prose-lg">
       We build apps that are prepossessing, scale-able, secure and fast. At
      Devriz, we always value <strong class="text-white"> Quality over Quantity.</strong>
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 md:mx-0">
      <div class="flex-col mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-100 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 class="font-bold font-sans text-2xl text-gray-200 my-4">
          Beautiful
        </h4>
        <p class="text-sm md:text-base max-w-md my-4 text-gray-300">
          We are dedicated to making the UI/UX of our apps as compelling as we
          can. The app spends it's early days in the design refining processes.
        </p>
      </div>

      <div class="flex-col mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-100 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
        <h4 class="font-bold font-sans text-2xl text-gray-200 my-4">Secure</h4>
        <p class="text-sm md:text-base max-w-md my-4 text-gray-300">
        Worried about DDoS attacks or supply line injection? We here at devriz, implement a security-first approach to building software.
        </p>
      </div>

      <div class="flex-col mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 text-gray-100 fill-current"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
          />
        </svg>
        <h4 class="font-bold font-sans text-2xl text-gray-200 my-4">Scalable</h4>
        <p class="text-sm md:text-base my-4 text-gray-300 max-w-md">
         Want to scale to the moon? A serverless approaching or not, we can always scale horizontally and verticle whenever you need to!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whyUs",
};
</script>

<style>
</style>