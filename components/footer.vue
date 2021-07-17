<template>
  <div class="bg-gray-800 p-8 rounded-t-xl py-16">
    <div class="flex justify-center items-center">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 justify-around items-baseline"
      >
        <div
          class="place-self-center lg:place-self-start lg:justify-self-start"
        >
          <h1
            class="
              font-sans
              text-center
              lg:text-left
              font-bold
              text-2xl
              lg:text-3xl
              text-white
              mt-8
            "
          >
            <strong class="text-white">Supercharge 🚀</strong> your apps now!
          </h1>
          <p
            class="
              mb-4
              mt-3
              text-gray-400
              md:max-w-md
              lg:prose-md
              text-center
              lg:text-left
            "
          >
            Connect with us to plan, outline, execute and maintain your next
            million dollar idea.
          </p>
        </div>
        <div
          class="
            flex
            justify-center
            items-center
            mt-8
            place-self-center
            lg:ml-24
          "
        >
          <div class="flex-col justify-center items-center text-center">
            <a
            href="#"
              class="
                mb-2
                block
                transition
                hover:-translate-y-0.5
                transform
                duration-200
                ease-in-out
                font-medium
                text-gray-400 text-sm
                hover:text-gray-100
                hover:underline
                cursor-pointer
              "
            >
              Home
            </a>
            <a
             href="#about"
              class="
                mb-2
                block
                transition
                hover:-translate-y-0.5
                transform
                duration-200
                ease-in-out
                font-medium
                text-gray-400 text-sm
                hover:text-gray-100
                hover:underline
                cursor-pointer
              "
            >
              About Us
            </a>
            <a
             href="#contact"
              class="
                mb-2
                block
                transition
                hover:-translate-y-0.5
                transform
                duration-200
                ease-in-out
                font-medium
                text-gray-400 text-sm
                hover:text-gray-100
                hover:underline
                cursor-pointer
              "
            >
              Contact Us
            </a>
            <a  href="#stack"
              class="
                mb-2
                transition
                block
                hover:-translate-y-0.5
                transform
                duration-200
                ease-in-out
                font-medium
                text-gray-400 text-sm
                hover:text-gray-100
                hover:underline
                cursor-pointer
              "
            >
              Tech Stack
            </a>
            <a
              class="
                mb-2
                transition
                transform
                block
                duration-200
                ease-in-out
                font-medium
                text-gray-500 text-sm
              "
            >
              Blog (soon)
            </a>
          </div>
        </div>
        <div
          class="flex-col justify-center items-center text-center mt-10 lg:mt-6"
        >
          <img
            class="mx-auto w-48 lg:w-56 -m-3"
            src="~/static/images/logo_new_semi_fhd_dark.png"
            alt=""
          />
          <div class="text-gray-400 text-xs">
            <p class="mt-0.5">
              ©{{ new Date().getFullYear() }} All rights reserved
            </p>
            <p class="mt-0.5">Devriz Technologies LLP</p>
            <p class="mt-2">
              Made with <a href="https://tailwindcss.com" class="font-bold text-gray-300">Tailwind</a>,
              <a href="http://nuxtjs.org" class="font-bold text-gray-300">NuxtJS</a> by
              <a href="https://github.com/imprakharshukla" class="font-bold text-gray-300">imprakharshukla</a> in 🇮🇳
            </p>
            <p class="mt-2">
              This website is open-sourced ❤. Get the code
              <a href="https://github.com/DevrizTech/website" class="underline font-bold">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>