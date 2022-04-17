<template>
<div class="container">
  <div class="row row--main">
    <books></books>

    <books-info></books-info>
  </div>

  <modal v-if="stateModal"></modal>
</div>
</template>

<script>
import Books from './components/Books.vue'
import BooksInfo from './components/BooksInfo.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Books,
    BooksInfo,
    Modal
  },
  computed: {
    stateModal () {
      return this.$store.getters.stateModal
    }
  }
}
</script>

<style lang="sass">

@import './sass/styles'

</style>
