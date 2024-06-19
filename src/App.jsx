import Root from './pages/Root'
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './pages/Error';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:
        [
          { path: '/', element: <HomePage/> },
        ]
    },
  
  ])

  return (
    <RouterProvider router={router} />
  )
}
