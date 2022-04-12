<template>
  <v-app>
    <v-main>
      <v-toolbar color="primary">
        <h1 class="white--text">Vue Invoice Calc</h1>
      </v-toolbar>
      <HomeView></HomeView>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HomeView from "@/views/home-view/home-view.vue";
export default Vue.extend({
  name: "App",

  components: {
    HomeView,
  },

  data: () => ({
    //
  }),
});
</script>
