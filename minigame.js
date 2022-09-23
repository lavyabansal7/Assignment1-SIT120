// Computed Properties of Vue
new Vue({
    el: '#app',
    data:{
        a:0,
        b:0,
    }
},
);
// Filters
Vue.filter('to-uppercase', function(value){
    return value.toUpperCase()
});

new Vue({
    el: '#vue-app',
    data: {
        message: 'hope you enjoy'
    },
})