import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {serviceAxios}  from './utils' 
console.log(serviceAxios);

serviceAxios({
    url:'/login',
    method:'post'
}).then((response) => {
    console.log(response);
})
createApp(App).mount('#app')
