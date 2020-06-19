import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import 'normalize.css'; 

Vue.config.productionTip = false;

//make upper case filter
Vue.filter('uppercase' , function(v){
    return v.toUpperCase(); 

});

//shorten text
Vue.filter('shorten' ,function(value ,textlength){

    return value.substring(0,textlength) + "...";
});

//make my directive
Vue.directive('tobold', {
  
    bind:function(el){
        el.style.fontWeight = "bold";
    }
});


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
