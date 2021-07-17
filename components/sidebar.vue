<template>
  <div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <overlay v-show="$store.state.drawer.isDrawerOpen" />
    </transition>
    <div
      id="drawer_main"
      class="
        bg-blue-800
        p-8
        rounded-r-lg
        transform
        top-0
        left-0
        w-72
        fixed
        h-full
        overflow-auto
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="
        this.$store.state.drawer.isDrawerOpen
          ? 'translate-x-0'
          : '-translate-x-full'
      "
    >
      <div class="flex justify-between items-center mb-16">
        <img
          class="w-32 -m-3"
          src="~/static/images/logo_new_semi_fhd_dark_all_white.svg"
          alt=""
        />

        <div
          class="
            cursor-pointer
            hover:-translate-y-0.5
            hover:text-blue-400
            transition
            text-white
            transform
            duration-100
          "
        >
          <svg
            @click="$store.commit('drawer/toggleDrawer')"
            class="stroke-current text-current w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <!--  Menu 54   -->
      <div
        id="drawer_menu"
        class="text-white font-medium flex-col space-y-5 mt-6"
      >
        <div v-for="items in menu" :key="items.color" class="py-2">
          <div
            class="cursor-pointer text-gray-200 font-base text-opacity-80 flex space-x-6 items-center px-2"
            @click="$store.commit('drawer/toggleDrawer')"
          >
            <!-- <div>
              <div v-html="items.icon"></div>
            </div> -->
            <a
              class="transform transition duration-200 ease-in-out hover:-translate-y-1"
              :href="items.to"
              >{{ items.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawerMenu from "~/static/data/menu/main-drawer-menu.json";
import Overlay from "~/components/overlay";
export default {
  components: { Overlay },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters["auth/isUserLoggedIn"];
    },
    userData: function () {
      return this.$store.getters["auth/getUserData"];
    },
  },
  data: function () {
    return {
      menu: drawerMenu.menu,
    };
  },
  methods: {
    logout: async function () {
      this.$store.commit("drawer/toggleDrawer");
      return this.$store.dispatch("auth/logoutUser");
    },
  },
  name: "SideBar",
};
</script>

<style scoped>
</style>