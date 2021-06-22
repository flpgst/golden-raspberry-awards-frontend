<template>
  <v-container>

    <v-card :loading="loading">
      <v-card-title>List movies</v-card-title>
      <v-data-table :headers="headers" :items="items" disable-sort>
        <template #[`header.year`]>
          <v-row>
            <v-col cols="12">
              <th>Year</th>
            </v-col>
            <v-col cols="6" class="pa-0">
              <v-text-field
                :rules="
                  [(year) => year.length <= 4 || year === '' || 'Type 4 digits in year box']
                "
                v-model="year"
                outlined
                dense
                single-line
                placeholder="Filter by year"

              ></v-text-field>
            </v-col>
          </v-row>
        </template>
        <template #[`header.winner`]>
          <v-row>
            <v-col cols="12">
              <th>Winner?</th>
            </v-col>
            <v-col cols="6" class="pa-0">
              <v-select
                v-model="winner"
                :items="['Yes','No']"
                label="Yes/No"
                outlined
                dense
                single-line
              >
              </v-select>
            </v-col>
          </v-row>
        </template>
        <template #[`item.winner`]="{ item }">
          <td>{{item.winner?'Yes':'No'}}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({

  mounted() {
    // this.getMovieList({});
    // this.items = response && response.data.content;
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
    year: '',
    loading: false,
  }),
  methods: {
    getMovieList({ page = 0, size = 99 }) {
      if (this.year !== '' && this.year.length !== 4) {
        return;
      }
      this.loading = true;
      const paramWinner = this.winner ? `&winner=${this.winner}` : '';
      const paramYear = this.year ? `&year=${this.year}` : '';
      this.$http.get(`?page=${page}&size=${size}${paramWinner}${paramYear}`)
        .then((response) => {
          this.items = response.data.content;
          this.loading = false;
        })
        .catch((error) => console.error(error));
    },
  },

  watch: {
    year: {
      immediate: true,
      async handler() {
        this.getMovieList({});
      },
    },
    winner: {
      async handler() {
        this.getMovieList({});
      },
    },

  },

});
</script>
