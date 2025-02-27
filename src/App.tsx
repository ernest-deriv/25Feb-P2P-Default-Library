import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import BuySellPage from "./pages/p2p/BuySellPage";
import OrdersPage from "./pages/p2p/OrdersPage";
import MyAdsPage from "./pages/p2p/MyAdsPage";
import ProfilePage from "./pages/p2p/ProfilePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/p2p" element={<BuySellPage />} />
          <Route path="/p2p/orders" element={<OrdersPage />} />
          <Route path="/p2p/my-ads" element={<MyAdsPage />} />
          <Route path="/p2p/profile" element={<ProfilePage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </div>
    </Suspense>
  );
}

export default App;
