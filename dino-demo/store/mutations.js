import {INCREMENT, DECREMENT} from './mutation-types'

export default {
  [INCREMENT](state, years) {
    if (years) {
      state.age += years
    } else {
      state.age++
    }
  },
  [DECREMENT](state) {
    state.age--
  }
}
