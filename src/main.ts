import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import './styles/variables.css'
import './styles/global.css'
import App from './App.vue'

const DashAIDark = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#e8e8f0',
          100: '#d0d0dc',
          200: '#9898a8',
          300: '#606070',
          400: '#3a3a4a',
          500: '#2a2a3a',
          600: '#1c1c28',
          700: '#16161f',
          800: '#111118',
          900: '#0a0a0f',
          950: '#050508'
        }
      }
    }
  }
})

const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: DashAIDark,
    options: {
      darkModeSelector: 'html'
    }
  }
})

app.mount('#app')
