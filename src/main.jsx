import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./components/Cart/CartContext.jsx";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoritesProvider>
  </StrictMode>,
)
