import { useContext } from "react"
import { Link } from "react-router-dom"
import { WatchlistContext } from "../context/WatchlistContext"

function Navbar() {

    const {watchlist} = useContext(WatchlistContext)

    return (
        <div className="text-white flex justify-between items-center px-4 py-2 sticky top-0 z-10" style={{
            background: "linear-gradient(-90deg, #e50914, #b20710, #000000)"
        }}>
            <Link to="/" className="font-bold text-2xl text">MOVIE APP</Link>
            <Link to="/watchlist" className="font-medium text-lg md:text-xl">Watchlist({watchlist.length})</Link>
        </div>
    )
}

export default Navbar