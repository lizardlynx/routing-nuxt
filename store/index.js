import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    fruits: [{name: 'Apple', id: 0, description: 'Red, round and super tasty!', icon: 'mdi-food-apple', country: 'Mexico'}, 
    {name: 'Pineapple', id: 1, description: 'Bottle shaped, yellow on the inside, sweet fruit!', icon: 'mdi-fruit-pineapple', country: 'Australia'},
    {name: 'Watermelon', id: 2, description: 'Red on the inside, green on the outside!', icon: 'mdi-fruit-watermelon', country: 'Kenia'}],
  }
})

export default store
