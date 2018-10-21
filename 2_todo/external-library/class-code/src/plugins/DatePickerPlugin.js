import Pikaday from 'Pikaday'

export default {
  install(Vue, options) {
    Vue.prototype.$_Pikaday = Pikaday;
  }
}