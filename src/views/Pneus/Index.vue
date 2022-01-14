<template>
  <v-container
    id="Pneus"
    class="pt-12 pb-0 px-0"
    fluid
    tag="section"
  >
    <headline />

    <gallery />
  </v-container>
</template>

<script>
  export default {
    name: 'Pneus',

    components: {
      Gallery: () => import('@/components/Gallery'),
      Headline: () => import('./components/Headline'),
    },
  }
</script>
