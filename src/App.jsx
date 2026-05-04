import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ComingSoonPage from './pages/CommingSoonPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import GlobalStyle from './styles/GlobalStyle.js'
import ExamplePage from './pages/ExamplePage.jsx'
import PetPage from "./pages/g5-pages/PetPage.jsx";

// Criando uma array para definir as rotas do site utilizando a função createBrowserRouter importada
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoonPage />,
    // Error element aparece no caso de digitar um endereço que não existe, link com caminho errado ou erros de carregamento
    // Apenas essa declaração de error element aparece em caso de erro em qualquer página
    errorElement: <NotFoundPage />
  },
  {
    path: '/example',
    element: <ExamplePage />
  },
  {
    path: '/petPage',
    element: <PetPage />,
  },

  {
    path: 'DonatePage',
    element: <DOnatePage/>,
  },e
])

export default function App() {

  return (
    <>
      <GlobalStyle />
      {/* RouterProvider fornece as rotas definidas acima para serem renderizadas através do atríbuto router */}
      <RouterProvider router={router} />
    </>
  )
}