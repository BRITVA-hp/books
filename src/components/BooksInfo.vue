<template>
<div class="box booksInfo__box">
  <div class="booksInfo__wrap">

    <div class="booksInfo__block">
      <h2 class="title title--booksInfo">Описание книги</h2>
      <div v-if="stateDescriptionFlag" class="row booksInfo__row">
        <div class="booksInfo__description">
          <ul>
            <li><span>Название:</span> "{{ stateDescription.name }}"</li>
            <li><span>Автор:</span> "{{ stateDescription.author }}"</li>
            <li><span>Информация об авторе:</span> {{ stateDescription.authorInfo }}</li>
            <li><span>Количество страниц:</span> {{ stateDescription.pages }}</li>
            <li><span>Год написания:</span> {{ stateDescription.year }}</li>
          </ul>
        </div>
        <div class="booksInfo__button-group">
          <button @click="modalShowHidden(stateDescription.index)" class="button button--booksInfo">Редактировать</button>
          <button @click="popupDeleted = true" class="button button--booksInfo button--deleted">Удалить</button>
          <div class="booksInfo__sort__content booksInfo__sort__content--deleted" :class="{ 'booksInfo__sort__content--active' : popupDeleted }">
            <div @click="popupDeleted = false" class="booksInfo__sort__close">&#10006;</div>
            <p class="booksInfo__sort__text">Удалить книгу?</p>
            <button @click="popupDeleted = false" class="button button--green booksInfo__sort__button">Нет</button>
            <button @click="deleteBook(stateDescription.index), popupDeleted = false" class="button button--deleted booksInfo__sort__button booksInfo__sort__button--last">Да</button>
          </div>
        </div>
      </div>
      <p v-if="!stateDescriptionFlag" class="booksInfo__text--default">Здесь будет описание</p>
    </div>

    <div class="booksInfo__buttons">
      <button @click="modalShowHidden(null)" class="button">Добавить книгу</button>
      <button @click="popupSort = true" class="button">Сортировать</button>

      <div class="booksInfo__sort__content" :class="{ 'booksInfo__sort__content--active' : popupSort }">
        <div @click="popupSort = false" class="booksInfo__sort__close">&#10006;</div>
        <button @click="sort(false)" class="button booksInfo__sort__button">Сбросить</button>
        <button @click="sort('name')" class="button booksInfo__sort__button">По названию</button>
        <button @click="sort('author')" class="button booksInfo__sort__button booksInfo__sort__button--last">По автору</button>
      </div>

    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "BooksInfo",
  data () {
    return {
      popupSort: false,
      popupDeleted: false
    }
  },
  methods: {
    modalShowHidden (payload) {
      this.$store.commit('modalShowHidden', payload)
    },
    sort (sortParam) {
      document.querySelectorAll('.book__wrap').forEach(item => {
        item.classList.remove('book__wrap--active')
      })
      this.$store.commit('descriptionFlagFalse')
      this.$store.dispatch('sortBooks', sortParam )
    },
    deleteBook (index) {
      this.$store.dispatch('deleteBook', index )
    }
  },
  computed: {
    stateDescription () {
      return this.$store.getters.stateDescription
    },
    stateDescriptionFlag () {
      return this.$store.getters.stateDescriptionFlag
    }
  }
}
</script>

<style scoped>

</style>