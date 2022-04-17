import { createStore } from 'vuex'

export default createStore({
  state: {
      booksDefault: [
        {
          name: 'Война и мир',
          author: 'Лев Толстой',
          authorInfo: 'Lorem1 lorem1 lorem1 lorem1',
          year: 1869,
          pages: 1300
        },
        {
          name: 'Улисс',
          author: 'Джеймс Джойс',
          authorInfo: 'Lorem2 lorem2 lorem2 lorem2',
          year: 1922,
          pages: 250
        },
        {
          name: 'Лолита',
          author: 'Владимир Набоков',
          authorInfo: 'Lorem3 lorem3 lorem3 lorem3',
          year: 1955,
          pages: 567
        },
        {
          name: 'Шум и ярость',
          author: 'Уильям Фолкнер',
          authorInfo: 'Lorem4 lorem4 lorem4 lorem4',
          year: 1929,
          pages: 342
        },
        {
          name: 'Адам Бид',
          author: 'Джордж Элиот',
          authorInfo: 'Lorem5 lorem5 lorem5 lorem5',
          year: 1859,
          pages: 455
        },
        {
          name: 'Невидимка',
          author: 'Ральф Эллисон',
          authorInfo: 'Lorem6 lorem6 lorem6 lorem6',
          year: 1952,
          pages: 248
        },
        {
          name: 'К маяку',
          author: 'Вирджиния Вульф',
          authorInfo: 'Lorem7 lorem7 lorem7 lorem7',
          year: 1927,
          pages: 489
        },
        {
          name: 'Дэниэль Деронда',
          author: 'Джордж Элиот',
          authorInfo: 'Lorem5 lorem5 lorem5 lorem5',
          year: 1876,
          pages: 1020
        },
        {
          name: 'Эмма',
          author: 'Джейн Остин',
          authorInfo: 'Lorem8 lorem8 lorem8 lorem8',
          year: 1815,
          pages: 670
        },
        {
          name: 'Божественная комедия',
          author: 'Данте Алигьери',
          authorInfo: 'Lorem9 lorem9 lorem9 lorem9',
          year: 1321,
          pages: 541
        },
        {
          name: 'Скромное предложение',
          author: 'Джонатан Свифт',
          authorInfo: 'Lorem10 lorem10 lorem10 lorem10',
          year: 1955,
          pages: 390
        },
        {
          name: 'Путешествия Гулливера',
          author: 'Джонатан Свифт',
          authorInfo: 'Lorem10 lorem10 lorem10 lorem10',
          year: 1726,
          pages: 785
        },
        {
          name: 'Миддлмарч',
          author: 'Джордж Элиот',
          authorInfo: 'Lorem5 lorem5 lorem5 lorem5',
          year: 1874,
          pages: 604
        },
        {
          name: 'Унесённые ветром',
          author: 'Маргарет Митчелл',
          authorInfo: 'Lorem11 lorem11 lorem11 lorem11',
          year: 1936,
          pages: 388
        },
        {
          name: 'Сын Америки',
          author: 'Ричард Райт',
          authorInfo: 'Lorem12 lorem12 lorem12 lorem12',
          year: 1940,
          pages: 490
        },
        {
          name: 'Капитал',
          author: 'Карл Маркс',
          authorInfo: 'Lorem13 lorem13 lorem13 lorem13',
          year: 1867,
          pages: 515
        }
      ],
      books: null,
      booksNumbersInRow: 5,
      description: false,
      descriptionFlag: false,
      modal: false,
      bookIndex: null
  },
  getters: {
    stateBookIndex: state => {
      return state.bookIndex
    },
    stateModal: state => {
      return state.modal
    },
    stateDescriptionFlag: state => {
      return state.descriptionFlag
    },
    stateBooksNumbersInRow: state => {
      return state.booksNumbersInRow
    },
    stateBooks: state => {
      return state.books
    },
    stateDescription: state => {
      return state.description
    }
  },
  mutations: {
    modalShowHidden: (state, payload) => {
      state.bookIndex = payload
      state.modal = !state.modal
    },
    setBooks: state => {
      state.books = state.booksDefault.slice()
    },
    setDescription: (state, desc) => {
      state.description = desc
    },
    descriptionFlagTrue: state =>  {
      state.descriptionFlag = true
    },
    descriptionFlagFalse: state =>  {
      state.descriptionFlag = false
    }
  },
  actions: {
    deleteBook: ({state, commit}, index) => {
      state.booksDefault.splice(index, 1)
      state.books = state.booksDefault.slice()
      commit('descriptionFlagFalse')
      document.querySelectorAll('.book__wrap').forEach(item => {
        item.classList.remove('book__wrap--active')
      })
    },
    EditAddBook: ({state, getters, commit}, obj) => {
      if (getters.stateBookIndex !== null) {
        state.booksDefault[getters.stateBookIndex] = obj
        state.books = state.booksDefault.slice()
        obj.index = getters.stateBookIndex
        state.description = obj
      } else {
        state.booksDefault.push(obj)
        state.books = state.booksDefault.slice()
      }
      commit('modalShowHidden', null)
    },
    sortBooks: ({state}, sortParam) => {
      if (sortParam === 'name') {
        state.books.sort(function (a, b) {
          if (a[sortParam] > b[sortParam]) {
            return 1;
          }
          if (a[sortParam] < b[sortParam]) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        })
      } else if (sortParam === 'author') {
        state.books.sort(function (a, b) {
          if (a[sortParam] > b[sortParam]) {
            return 1;
          }
          if (a[sortParam] < b[sortParam]) {
            return -1;
          }
          // a должно быть равным b
          return 0;
        })
      } else {
        state.books = state.booksDefault.slice()
      }
    }
  },
  modules: {
  }
})
