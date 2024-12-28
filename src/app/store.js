import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { leadApi } from '../services/leadsApi'

export const store = configureStore({
  reducer: {
    [leadApi.reducerPath]: leadApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leadApi.middleware),
})

setupListeners(store.dispatch)