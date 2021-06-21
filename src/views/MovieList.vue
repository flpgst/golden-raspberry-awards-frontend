<template>
<v-row>
  <v-col>
    <table-movie-list></table-movie-list>
  </v-col>
</v-row>

</template>

<script lang="ts">
import Vue from 'vue';
import TableMovieList from '../components/TableMovieList.vue';

export default Vue.extend({
  components: {
    TableMovieList,
  },

});
</script>
