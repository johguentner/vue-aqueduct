import { createApp } from 'vue'
import App from './App.vue'

import viaduct from '../../src/index';

const app = createApp(App)

app.use(viaduct);

app.mount('#app')
