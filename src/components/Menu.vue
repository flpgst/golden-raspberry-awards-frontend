<template>
  <v-navigation-drawer
    clipped
    permanent
    app
    >
      <v-list
        nav
        dense
      >

          <v-list-item to="/">
            <v-list-item-title >Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/movies">
            <v-list-item-title >List</v-list-item-title>
          </v-list-item>

      </v-list>
    </v-navigation-drawer>
</template>
