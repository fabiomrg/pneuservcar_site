<template>
  <v-container
    id="dicas"
    class="pa-0"
    fluid
    tag="section"
  >
    <hero
      class="text-center white--text align-center"
      height="30vh"
    >
      <h1 class="display-2">
        Dicas Pneu Serv Car
      </h1>
    </hero>

    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>
        <v-filter :tabs="tabs" />

        <v-row>
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <post-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'dicas',

    components: {
      PostCard: () => import('./components/PostCard'),
      Hero: () => import('./components/Hero'),
      VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      posts: [
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-one',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-2',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-one',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-3',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-3',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-4',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-4',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-one',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Pneu-2',
          date: '',
          src: 'https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg',
          title: 'Lorem ipsum dolor',
        },
      ],
      tabs: [
        'All',
        'Pneu-one',
        'Pneu-2',
        'Pneu-4',
        'Pneu-3',
      ],
    }),
  }
</script>
