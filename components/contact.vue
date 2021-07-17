<template>
  <div class="w-full px-6 md:px-12 py-12 bg-gray-100">
    <div class="mb-16">
      <h1 class="font-sans font-black text-5xl text-gray-800">
        Connect with us<strong class="text-blue-600">!</strong>
      </h1>
      <p class="my-4 md:max-w-2xl text-gray-400 md:text-xl lg:prose-lg">
        Let's make it happen together!
      </p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center"
    >
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        action="/form/success"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="flex-col justify-center items-center mt-10">
          <input
            placeholder="Your name"
            name="Name"
            class="w-80 px-4 py-3 rounded bg-gray-200 block my-4"
            type="text"
          />
          <input
            name="Email"
            placeholder="Your email"
            class="w-80 px-4 py-3 rounded bg-gray-200 block my-4"
            type="email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            class="w-80 px-4 py-3 rounded bg-gray-200 block my-4"
            type="text"
          >
          </textarea>
          <button
            type="submit"
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
            Let's Talk!
          </button>
        </div>
      </form>
      <div>
        <img class="w-48 lg:w-80" src="~static/images/contact_us.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
};
</script>

<style>
</style>