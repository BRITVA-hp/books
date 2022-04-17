<template>
  <div class="modal">
    <form action="#" @submit.prevent="EditAddBook()" class="modal__dialog">
      <div @click="modalShowHidden(null)" class="modal__close">&#10006;</div>
      <div class="modal__box">

        <div class="modal__input-group">
          <input v-model="name" placeholder="Название книги" type="text" class="modal__input">
          <div class="invalid" v-if="v$.name.$error">
            Обязательное поле.
          </div>
        </div>

        <div class="modal__input-group">
          <input v-model="author" placeholder="Автор книги" type="text" class="modal__input">
          <div class="invalid" v-if="v$.author.$error">
            Обязательное поле.
          </div>
        </div>

        <div class="modal__input-group">
          <input v-model="authorInfo" placeholder="Информация об авторе" type="text" class="modal__input">
        </div>

        <div class="modal__input-group">
          <input v-model="pages" placeholder="Количество страниц" type="text" class="modal__input">
          <div class="invalid" v-if="v$.pages.$error">
            Не верный формат.
          </div>
        </div>

        <div class="modal__input-group">
          <input v-model="year" placeholder="Год написания" type="text" class="modal__input">
          <div class="invalid" v-if="v$.year.$error">
            Не верный формат.
          </div>
        </div>
      </div>

      <button class="button modal__button">Отправить</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'

export default {
  name: "Modal",
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      name: '',
      author: '',
      authorInfo: '',
      pages: '',
      year: ''
    }
  },
  methods: {
    modalShowHidden (payload) {
      this.$store.commit('modalShowHidden', payload)
    },
    EditAddBook () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const obj = {
        name: this.name,
        author: this.author,
        authorInfo: this.authorInfo,
        year: this.year,
        pages: this.pages
      }
      this.$store.dispatch('EditAddBook', obj)
    }
  },
  validations () {
    return {
      name: { required }, // Matches this.firstName
      author: { required }, // Matches this.lastName
      pages: {numeric},
      year: {numeric}
    }
  },
  created () {
    if (this.$store.getters.stateBookIndex !== null) {
      const book = this.$store.getters.stateDescription
      this.name = book.name
      this.author = book.author
      this.authorInfo = book.authorInfo
      this.pages = book.pages
      this.year = book.year
    } else {
      this.name = ''
      this.author = ''
      this.authorInfo = ''
      this.pages = ''
      this.year = ''
    }
  }
}
</script>

<style scoped>
.invalid {
  position: absolute;
  color: tomato;
  top: 2px;
  left: 2px;
  font-size: 12px;
}
</style>