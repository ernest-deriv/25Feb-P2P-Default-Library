import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import P2PTrading from "./components/p2p/P2PTrading";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/p2p" element={<P2PTrading />} />
          <Route path="/p2p/orders" element={<P2PTrading />} />
          <Route path="/p2p/my-ads" element={<P2PTrading />} />
          <Route path="/p2p/profile" element={<P2PTrading />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
