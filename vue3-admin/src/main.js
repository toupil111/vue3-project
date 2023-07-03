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


function getList() {
    serviceAxios({
        url:'/login',
        method:'post'
    }).then((response) => {
        console.log(response);
    })
  setTimeout(() => {
    serviceAxios({
        url:'/login',
        method:'post'
    }).then((response) => {
        console.log(response);
    })
  }, 200);
  setTimeout(() => {
    serviceAxios({
        url:'/login',
        method:'post'
    }).then((response) => {
        console.log(response);
    })
  }, 400);
}

getList()
createApp(App).mount('#app')
