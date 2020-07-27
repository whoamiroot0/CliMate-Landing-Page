import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './locales/en.json'
import de from './locales/de.json'
import fr from './locales/fr.json'

const locale = window.navigator.language.substr(0, 2)

Vue.use(VueI18n)

export { locale }

export default new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages: { en, de, fr }
})