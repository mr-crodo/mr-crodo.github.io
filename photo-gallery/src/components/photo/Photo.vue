<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>{{ photo.title }}</v-card-title>
      <v-card-text>
        <v-img
            width="200"
            height="200"
            :src="photo.url"
        ></v-img>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: "Photo",
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations(["setCurrentPhoto", "showDialog", "hideDialog"]),
    openPhoto() {
      this.setCurrentPhoto(this.photo)
      this.setCurrentPhoto()
    }
  }
}
</script>

<style scoped>

</style>