//Check List Vue Code Using Slots, I have used Vue3
Vue.createApp({

})
.component('todo-item', {
  template: '#todo-item-template',
  data(){
    return {
      done: false
    }
  }
})
.mount('#app')

