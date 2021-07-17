<template>
  <div class="overflow-hidden flex items-center justify-center bg-blue-700 pb-12">
    <div
      class="
      mx-6 md:mx-12
        grid grid-cols-1
        lg:grid-cols-3
        md:justify-between
        items-center
      "
    >
      <div
        class="
          mt-6
          self-stretch
          text-center
          lg:text-left
          lg:self-center
          justify-self-center
          lg:justify-self-start
          order-2
          md:order-1
          grid grid-row-3
        "
      >
        <div
          class="
            self-center
            flex-col
            justify-center
            items-center
            md:px-12
            px-6
            text-opacity-70
            md:text-7xl
            text-6xl text-white text-center
            lg:text-left
          "
        >
          <h1 class="font-black sans">We</h1>
          <h1 class="font-black sans">Build</h1>
          <h1
            class="
              font-black
              sans
              filter
              drop-shadow-xl
              md:text-8xl
              text-7xl text-white
            "
          >
            Apps.
          </h1>
          <p class="text-lg md:max-w-lg md:text-xl mt-12 md:font-semibold font-medium text-gray-100">
            Hey 👋, we help you make your idea turn into scalable and secure
            realities.
          </p>

          <div
            class="
              mx-auto
              lg:mx-0
              my-8
              w-full
              md:max-w-sm
              lg:w-full
              rounded-md
              bg-opacity-10 bg-white
              py-3
              px-3
              text-center
              md:order-2
              flex-col
              lg:text-left text-white
            "
          >
            <h2 class="font-bold  text-lg">
              We made #2 ranking on the Play Store 🎉
            </h2>
            <h2 class="text-sm">
              <strong class="font-normal">Andronix</strong> now ranks #2 Globally for the "Linux"
              keyword.
            </h2>
          </div>
        </div>
      </div>
      <div
        class="
          mt-20
          max-w-sm
          md:max-w-md
          lg:max-w-screen-md
          xyz-in
          lg:order-2
          lg:col-span-2
          w-full
          md:w-8/12
          lg:w-full
          place-self-center
          lg:place-self-end
        "
      >
        <img
          class="lg:pl-24 object-cover lg:w-4/5"
          src="~static/images/landing_bg.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
</style>
