import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './Router/AppRouter.jsx'
import {Provider} from 'react-redux'
import { store } from './Store/Store.jsx'
import { ToastContainer } from 'react-toastify'
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'
let queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter/>
    </Provider>
  </QueryClientProvider>
)
