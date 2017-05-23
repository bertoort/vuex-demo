<template>
  <div id="app">
    <img v-bind:style="{'width': this.$store.state.age + 'px'}" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzu8LUlwAc_54RnUn_6iRVO2AIxBZxt1OQ7C97vN8UoSBdDod1MpTTKTnD">
    <br>
    Age: {{ this.$store.state.age }} years old!
    <br>
    <button @click="drink">Drink</button>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    drink() {
      this.$store.dispatch('increment', 10)
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  }
}
</script>
