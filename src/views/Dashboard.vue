<template>
<v-container>
  <v-row>
    <v-col cols="12" md="6">
      <table-top-3-studios></table-top-3-studios>
    </v-col>
    <v-col cols="12" md="6">
      <table-multiple-winners></table-multiple-winners>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <table-intervals-awards></table-intervals-awards>
    </v-col>
    <v-col cols="12" md="6">
      <filtered-table-winner-by-year></filtered-table-winner-by-year>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import TableMultipleWinners from '../components/TableMultipleWinners.vue';
import TableTop3Studios from '../components/TableTop3Studios.vue';
import TableIntervalsAwards from '../components/TableIntervalsAwards.vue';
import FilteredTableWinnerByYear from '../components/FilteredTableWinnerByYear.vue';

export default Vue.extend({
  components: {
    TableMultipleWinners,
    TableTop3Studios,
    TableIntervalsAwards,
    FilteredTableWinnerByYear,
  },

});
</script>
