//JS Code for Props
Vue.component('plan', {
    template: '#plan-template',
    props: {
      name: {
        type: String,
        required: true
      }
    }
  })
  
  new Vue({
    el: '#app',
    data: {
      plans: ['Age:19 Years', 'Contact: s222034233@deakin.edu.au', 'Address: 13 Circuit Drive, Truganina, Victoria, Australia, 3029']
    }
  })