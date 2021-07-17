<template>
  <div class="mx-6 md:mx-12">
    <div class="mb-16">
      <h1 class="font-sans font-black text-5xl  text-gray-800">What do we do<strong class="text-blue-600">?</strong></h1>
        <p class="my-4 text-gray-400 md:text-xl lg:prose-lg  md:max-w-xl">
         We build fast and secure apps for almost every platform you can think of. We adopt new technologies as soon as we can!
      </p>
    </div>
    <div class=" grid lg:grid-cols-2 gap-y-16 gap-x-16">
      <techstack-card
        title="Android Native"
        desp="Android development is our forte. From Kotlin to Java, to the all new Jetpack Compose, you say and we make it!"
        :list="['Kotlin', 'Java', 'Jetpack Compose', 'MVVM & MVP']"
        img="/images/android_phone_mock.png"
        marginImg="-mb-32 lg:-mb-48"
      />
      <techstack-card
        title="iOS"
        desp="Want to develop for iOS, macOs, iPadOS or watchOS? We have the tech and the skills to crush them all!"
        :list="['iOS | watchOS', 'iPadOS', 'MacOS', 'Swift & SwiftUI']"
        img="/images/phone_mock.png"
        marginImg=" -mb-16 lg:-mb-32"
      />
      <techstack-card
        title="Web Apps"
        desp="People say it's the platform of the future, and we don't deny. Make powerful web-apps with your preferred framework."
        :list="['Vue', 'NextJS', 'NuxtJS', 'React']"
        img="/images/laptop_mock.png"
        marginImg=" -mb-16 lg:-mb-48 w-80"
      />
      <techstack-card
        title="Backend & Databases"
        desp="The data has to come from somewhere after-all. Extremely effiecient REST or GraphQL API(s) or a beatifully structured database, we will do it!"
        :list="[
          'Typescript & Javascript',
          'Golang',
          'Java',
          'MySql, Postgresql, Firebase etc.',
        ]"
        img="/images/database_mock.png"
        marginImg=" -mb-16 lg:-mb-48"
      />
    </div>
  </div>
</template>

<script>
import techstackCard from "./techstackCard.vue";
export default {
  components: { techstackCard },
};
</script>

<style>
</style>