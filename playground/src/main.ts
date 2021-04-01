import { createApp } from 'vue'
import App from './App.vue'

require('../../src/style.css');

import Aqueduct from '../../src/index';

const app = createApp(App)

app.use(Aqueduct);

app.mount('#app')
