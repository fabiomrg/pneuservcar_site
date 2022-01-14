<template>
  <v-container
    id="home"
    class="pt-0 mt-0 pb-0 px-0"
    fluid
    tag="section"
  >
    <headline />

    <gallery />
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      Gallery: () => import('@/components/Gallery'),
      Headline: () => import('./components/Headline'),
    },
  }
</script>
