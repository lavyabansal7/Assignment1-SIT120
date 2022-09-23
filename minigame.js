// Computed Properties of Vue
new Vue({
    el: '#vue-app',
    data:{
        a:0,
        b:0
    }
},
);

Vue.filter('to-uppercase',function(value){
    return value.toUpperCase(

    )
    });

new Vue({
    el:'#app',
    data:{
        message:"Hope"
    }
})
