<template>
  <v-card>
  <v-card-title>List movie winners by year</v-card-title>
    <v-row class="ma-0">
      <v-col>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        >
          <template #append-outer >
            <v-btn icon @click="getWinnersByYear(search)">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  <v-data-table :headers="headers" :items="movies">
  </v-data-table>
</v-card>
</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend({

  data: () => ({
    headers: [{ text: 'Id', value: 'id' },
      { text: 'Year', value: 'year' },
      { text: 'Title', value: 'title' },
    ],
    movies: [],
    search: '',
  }),
  methods: {
    async getWinnersByYear(year:string):Promise<AxiosResponse|void> {
      console.log('year :>> ', year);
      const response = await this.$http.get(`?winner=true&year=${year}`)
        .catch((error) => console.error(error));
      this.movies = response?.data;
    },

  },

});
</script>
