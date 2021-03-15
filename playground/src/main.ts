import { createApp } from 'vue'
import App from './App.vue'

import Aqueduct from '../../src/index';

const app = createApp(App)

app.use(Aqueduct);

app.mount('#app')
