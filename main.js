import { decrement, increment, reset } from './redux/counterSlice'
import store from './redux/store'

const incrementButton = document.querySelector('#increment')
const decrementButton = document.querySelector('#decrement')
const resetButton = document.querySelector('#reset')
const counter = document.querySelector('#counter')

counter.innerHTML = 0

store.subscribe(() => {
  console.log(store.getState())
  counter.textContent = store.getState().value
})

incrementButton.addEventListener('click', () => store.dispatch(increment()))
decrementButton.addEventListener('click', () => store.dispatch(decrement()))
resetButton.addEventListener('click', () => store.dispatch(reset()))
