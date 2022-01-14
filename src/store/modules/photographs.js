// Utilities
import { make } from 'vuex-pathify'

let image = 247
const categories = [
  'Todos',
  'Aro 13',
  'Aro 15',
  'Aro 17',
  
]

const state = {
  categories,
  filter: 'Todos',
  picture: null,
  pictures: Array.from({ length: 30 }).map(() => {
    image++

    return {
      src: `https://static.pneustore.com.br/medias/sys_master/images/images/h3e/h32/8859688173598/pneu-goodyear-aro-15-efficientgrip-performance-195-65r15-91h-original-onix-active-1.jpg`,
      category: categories[Math.floor(Math.random() * categories.length)],
    }
  }),
}

const mutations = make.mutations(state)

export default {
  namespaced: true,
  state,
  mutations,
}
