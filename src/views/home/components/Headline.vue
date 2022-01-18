<template>



  <video-background 
    :src='require("@/assets/highway.mp4")'
  
    :sources="[
        {src: '../../assets/highway.mp4', res: 600, autoplay: true}, 
        {src: '../../assets/highway.mp4', res: 638, autoplay: true}
    ]"
    style="max-height: 600px; height: 100vh;"
    overlay="linear-gradient(45deg,rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.8))" 
  
>
     <div class="d-flex align-center">
          <v-img
            :src="require('@/assets/logo.png')"
            contain
            class="shrink mr-2"
            max-height="440"
            max-width="440"
          />

          <v-toolbar-title class="white--text headline font-italic">
          </v-toolbar-title>
        </div>
</video-background>
  
</template>

<script>
  export default {
    name: 'Headline',
  }
</script>

<style scoped>
video {
    object-fit: fill;
}
</style>