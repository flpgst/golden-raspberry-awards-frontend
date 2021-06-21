<template>
  <v-card>
  <v-card-title>List years with multiple winners</v-card-title>
  <v-data-table :headers="headers" :items="items" :items-per-page="3">
  </v-data-table>
</v-card>
</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend({
  async mounted() {
    const response = await this.getYearsWithMultipleWinners();
    this.items = response && response.data.studios;
  },
  data: () => ({
    headers: [{ text: 'Name', value: 'name' }, { text: 'Win Count', value: 'winCount' }],
    items: [],
  }),
  methods: {
    getYearsWithMultipleWinners():Promise<AxiosResponse|void> {
      return this.$http.get('?projection=studios-with-win-count')
        .catch((error) => console.error(error));
    },

  },

});
</script>
