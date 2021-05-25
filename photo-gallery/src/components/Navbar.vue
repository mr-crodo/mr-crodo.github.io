<template>
  <v-container fluid>
    <v-app-bar
        color="orange"
        dark
    >
      <v-spacer></v-spacer>

      <v-btn outlined class="ml-3">
        <router-link to="/">Main</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photo">Photo</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>