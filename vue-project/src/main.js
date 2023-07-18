import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'



// createApp(App).mount('#app')
const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '986179733150-vvmpuqbp4er9as4liodlvs6gvi6fo8c9.apps.googleusercontent.com'
})
  
app.mount('#app')



