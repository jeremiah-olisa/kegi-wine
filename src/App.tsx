import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/index";
import MenuPage from "@/pages/menu";
import OffersPage from "@/pages/offers";
import FavoritesPage from "@/pages/favorites";
import ProfilePage from "@/pages/profile";
import WalletPage from "@/pages/wallet";
import CartPage from "@/pages/cart";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
