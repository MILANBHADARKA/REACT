import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Selectt from './components/Selectt.jsx'
import Yupp from './components/Yupp.jsx'
import DynamicForm from './components/DynamicForm.jsx'
import MultiStepForm from './components/MultiStepForm.jsx'
import ResetFormExample from './components/ResetForm.jsx'
import SetValueExample from './components/SetValueDynamicly.jsx'
import TriggerValidationExample from './components/TriggerValidation.jsx'
import WatchExample from './components/Watch.jsx'
import FormStateExample from './components/FormState.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} />
      <Route path='select' element={<Selectt />} />
      <Route path='yup' element={<Yupp />} />
      <Route path='dynamic' element={<DynamicForm />} />
      <Route path='multistep' element={<MultiStepForm />} />
      <Route path='reset' element={<ResetFormExample />} />
      <Route path='setvalue' element={<SetValueExample />} />
      <Route path='trigger' element={<TriggerValidationExample />} />
      <Route path='watch' element={<WatchExample />} />
      <Route path='formstate' element={<FormStateExample />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
