import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";

declare global {
  interface Window {
    AOS: any;
  }
}

function App() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: "ease-out-cubic",
        offset: 50,
        delay: 0,
      });
    }
  }, []);

  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
    </Routes>
  );
}

export default App;
