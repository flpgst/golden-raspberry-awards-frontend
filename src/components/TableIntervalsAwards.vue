<template>
  <v-card>
  <v-card-title class="text-truncate">
    Producers with longest and shortest interval between wins
  </v-card-title>
  <v-card-title>
    Maximum
  </v-card-title>
  <v-data-table :headers="headers" :items="max" hide-default-footer></v-data-table>
  <v-card-title>
    Minimum
  </v-card-title>
  <v-data-table :headers="headers" :items="min" hide-default-footer></v-data-table>
</v-card>
</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend({
  async mounted() {
    const response = await this.getIntervalAwards();
    this.min = response && response.data.min;
    this.max = response && response.data.max;
  },
  data: () => ({
    headers: [
      { text: 'Producer', value: 'producer' },
      { text: 'Interval', value: 'interval' },
      { text: 'Previous Year', value: 'previousWin' },
      { text: 'Following Year', value: 'followingWin' },
    ],
    min: [],
    max: [],
  }),
  methods: {
    getIntervalAwards():Promise<AxiosResponse|void> {
      return this.$http.get('?projection=max-min-win-interval-for-producers')
        .catch((error) => console.error(error));
    },

  },

});
</script>
