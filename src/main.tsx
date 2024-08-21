import '~/assets/styles/globals.css'
import '~/assets/styles/custom.css'
import 'react-toastify/dist/ReactToastify.css'

import ReactDOM from 'react-dom/client'

import { GlobalProvider } from '~/providers/context/GlobalProvider.tsx'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)
