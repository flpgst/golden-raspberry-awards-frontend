<template>
  <v-card>
  <v-card-title>List movies</v-card-title>
  <v-data-table :headers="headers" :items="items" >
    <template #header.year>
      <v-row>
        <v-col cols="12">
          <th>Year</th>
        </v-col>
        <v-col cols="6" class="pa-0">
          <v-text-field
            v-model="year"
            outlined
            dense
            single-line
            placeholder="Filter by year"

          ></v-text-field>
        </v-col>
      </v-row>

    </template>
  </v-data-table>
</v-card>
</template>

<script lang="ts">

import { AxiosResponse } from 'axios';
import Vue from 'vue';

export default Vue.extend({

  async mounted() {
    const response = await this.getMovieList({});
    this.items = response && response.data.content;
  },
  data: () => ({
    headers: [
      { text: 'Id', value: 'id' },
      { text: 'Year', value: 'year' },
      { text: 'Title', value: 'title' },
      { text: 'Winner?', value: 'winner' },
    ],
    items: [],
    winner: null,
    year: null,
  }),
  methods: {
    getMovieList({ page = 0, size = 99 }):Promise<void|AxiosResponse> {
      const paramWinner = this.winner ? `&winner=${this.winner}` : '';
      const paramYear = this.year ? `&year=${this.year}` : '';
      return this.$http.get(`?page=${page}&size=${size}${paramWinner}${paramYear}`)
        .catch((error) => console.error(error));
    },
  },

  watch: {
    year: {
      immediate: true,
      async handler() {
        const response = await this.getMovieList({});
        this.items = response && response.data.content;
      },
    },
    winner: {
      immediate: true,
      async handler() {
        const response = await this.getMovieList({});
        this.items = response && response.data.content;
      },
    },
  },

});
</script>
