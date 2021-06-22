<template>
  <v-app>
    <app-menu></app-menu>
    <v-app-bar
      color="primary"
      dark
      fixed
      clipped-left
      clipped-right
      app
    >
      <div class="d-flex align-center">
        Golden Raspberry Awards
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppMenu from './components/Menu.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppMenu,
  },

});
</script>
