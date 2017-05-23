import {INCREMENT, DECREMENT} from './mutation-types'

export default {
  increment(store, years) {
    setTimeout(() => {
      store.commit(INCREMENT, years)
    }, 500)
  },
  decrement(store) {
    setTimeout(() => {
      store.commit(DECREMENT)
    }, 500)
  },
}
