import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.js'
import ExamplePage from './pages/ExamplePage.jsx'
import PetPage from "./pages/g5-pages/PetPage.jsx"
import DonatePage from './pages/g5-pages/DonatePage.jsx'
import ComingSoonPage from './pages/CommingSoonPage.jsx'

// Definição das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <DonatePage />,  
    errorElement: <NotFoundPage />
  },
  {
    path: '/example',
    element: <ExamplePage />
  },        
  {
    path: '/petPage',
    element: <PetPage />
  },
  {
    path: '/comingSoon',     
    element: <ComingSoonPage />
  }
])

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}
