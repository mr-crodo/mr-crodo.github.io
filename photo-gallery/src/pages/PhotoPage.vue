<template>
  <v-container>
    <PhotoForm v-if="photos.length < 20" @addPhoto="addPhoto"/>
    <div v-else>Вы не можете добавить больше фотографий</div>
    <v-row>
      <Photo
          v-for="photo in $store.getters.getAllPhotos"
          :key="photo"
          :photo="photo"

      ></Photo>
    </v-row>
    <PhotoDialog/>
  </v-container>
</template>

<script>
import Photo from "../components/photo/Photo";
import PhotoForm from "../components/photo/PhotoForm";
import PhotoDialog from "../components/photo/PhotoDialog";
import {mapActions} from "vuex"


export default {
  name: "PhotoPage",
  components: {
    Photo,
    PhotoForm,
    PhotoDialog
  },
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false
  }),
  mounted() {
    // this.fetchTodo()
    this.fetchPhotos()
  },
  methods: {
    ...mapActions(['fetchPhotos']),
    // fetchTodo() {
    //   this.axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    //       .then(response => this.photos = response.data)
    // },
    addPhoto(photo) {
      this.photos.push(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>