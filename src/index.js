import './js/example';
import './scss/example.scss';

window.Vue = require('vue');
// import store from './store/example.js';

Vue.component('example-component', require('./components/Example.vue').default);


const app = new Vue({
    // store,
    el: "#app",
});