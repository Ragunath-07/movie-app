import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Watchlist from "./pages/Watchlist"
import WatchlistProvider from "./context/WatchlistContext"


function App() {

  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  )
}

export default App
