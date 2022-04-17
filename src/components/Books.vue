<template>
<div class="box book__box">
  <h1 class="title title--book">Нажмите на книгу!</h1>
  <div class="book__window">

    <div class="book__field">
      <div v-for="(row, index) in numberRows()" :key="index" class="row book__row">

        <div ref="book" v-for="(book, index1) in numberBooks(index)" :key="index1" @click="bookActive($event, book, index, index1)" class="book__wrap">
          <div class="book">
            <div class="book__facet book__facet--face"></div>
            <div class="book__facet book__facet--back">
              <div class="book__text">
                <p>{{ book.name }}</p>
                <p v-initials="book.author"></p>
              </div>
            </div>
            <div class="book__facet book__facet--left"></div>
            <div class="book__facet book__facet--right">
              <div class="book__text book__text--right">
                <p>{{ book.name }}</p>
                <p>{{ book.author }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Books",
  data () {
      return {
        activeFlag: false
      }
  },
  methods: {
    bookActive (e, book, index, index1) {
      if (e.currentTarget.classList.contains('book__wrap--active')) {
        this.activeFlag = true
      }
      this.$refs.book.forEach(book => {
        book.classList.remove('book__wrap--active')
      })
      if (this.activeFlag) {
        this.activeFlag = false
        this.$store.commit('setDescription', false)
        this.$store.commit('descriptionFlagFalse')
        return
      }
      e.currentTarget.classList.toggle('book__wrap--active')
      book.index = index * this.stateBooksNumbersInRow + index1
      this.$store.commit('setDescription', book)
      this.$store.commit('descriptionFlagTrue')
    },
    numberRows () {
      return  Math.ceil(this.stateBooks.length / this.stateBooksNumbersInRow)
    },
    numberBooks (index) {
      return this.stateBooks.slice(index * this.stateBooksNumbersInRow, (index + 1) * this.stateBooksNumbersInRow)
    }
  },
  computed: {
    stateBooksNumbersInRow () {
      return this.$store.getters.stateBooksNumbersInRow
    },
    stateBooks () {
      return this.$store.getters.stateBooks
    }
  },
  created() {
    this.$store.commit('setBooks')
  }
}
</script>

<style scoped>
</style>