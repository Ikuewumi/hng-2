import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Product from './pages/Product/index.tsx'
import Cart from './pages/Cart/index.tsx'
import Checkout from './pages/Checkout/index.tsx'

const Error = <>
  <section className="cart-none">
    <p className="cart-none-text">Error. Something went wrong in rendering this route</p>
    <Link to="/" data-btn className="cart-none-btn">Go Home</Link>
  </section>
</>

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement: Error,
    children: [
      {
        path: "",
        element: <Home />
      },

      {
        path: "product/:productId",
        element: <Product />
      },

      {
        path: "cart",
        element: <Cart />
      },

      {
        path: "checkout",
        element: <Checkout />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
