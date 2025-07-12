import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/templates/MainLayout'
import { HomePage } from '@/components/pages/public/HomePage'
import { RegisterPage } from '@/components/pages/public/RegisterPage'
import { LoginPage } from '@/components/pages/public/LoginPage'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <MainLayout/> }>

        <Route index element={ <HomePage /> } />
      
        <Route path='/register' element={ <RegisterPage /> } />

        <Route path='/login' element={ <LoginPage /> } />
      </Route>
    </Routes>
  )
}
