import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import { createI18n } from 'vue-i18n';
import ru from '@/locales/ru.json';

const localeFromLocalStorage = localStorage.getItem('locale');

const i18n = createI18n({
    locale: localeFromLocalStorage || 'ru',
    messages: {
        ru
    }
});

const app = createApp(App)

app.use(router)

app.use(i18n);
app.mount('#app')
