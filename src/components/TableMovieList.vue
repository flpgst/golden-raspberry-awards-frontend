<template>
  <v-container>
    <v-card>
      <v-card-title>List movies</v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        :loading="loading"
        :server-items-length="totalItems"
        :options.sync="options"
        :footer-props="footerProps"

      >
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

interface DataTableOptions {
  page:number,
  itemsPerPage:number
}

export default Vue.extend({

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
    totalItems: 0,
    options: { } as DataTableOptions,
    footerProps: {
      'items-per-page-options': [5, 10, 15, 99],
    },

  }),
  mounted() {
    this.getMovieList();
  },
  methods: {

    getMovieList() {
      const {
        page, itemsPerPage,
      } = this.options;

      if (this.year !== '' && this.year.length !== 4) {
        return;
      }
      this.loading = true;
      const paramWinner = this.winner ? `&winner=${this.winner}` : '';
      const paramYear = this.year ? `&year=${this.year}` : '';
      this.$http.get(`?page=${page - 1}&size=${itemsPerPage}${paramWinner}${paramYear}`)
        .then((response) => {
          this.items = response.data.content;
          this.totalItems = response.data.totalElements;
          this.loading = false;
        })
        .catch((error) => console.error(error));
    },
  },

  watch: {
    options: {
      handler() {
        this.getMovieList();
      },
      deep: true,
    },
    year: {
      handler() {
        this.getMovieList();
      },
    },
    winner: {
      handler() {
        this.getMovieList();
      },
    },

  },

});
</script>
