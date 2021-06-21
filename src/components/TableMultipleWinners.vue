<template>
  <v-card>
  <v-card-title>List years with multiple winners</v-card-title>
  <v-data-table :headers="headers" :items="items">
  </v-data-table>
</v-card>
</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend({
  async mounted() {
    const response = await this.getYearsWithMultipleWinners();
    this.items = response && response.data.years;
  },
  data: () => ({
    headers: [{ text: 'Year', value: 'year' }, { text: 'Win Count', value: 'winnerCount' }],
    items: [],
  }),
  methods: {
    getYearsWithMultipleWinners():Promise<AxiosResponse|void> {
      return this.$http.get('?projection=years-with-multiple-winners')
        .catch((error) => console.error(error));
    },

  },

});
</script>
