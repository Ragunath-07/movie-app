import { FaHeart, FaRegHeart } from "react-icons/fa"
import { MdStar } from "react-icons/md";
import { WatchlistContext } from "../context/WatchlistContext";
import { useContext } from "react";


function Moviecard({ movies }) {

    const { toggleWatchlist , watchlist} = useContext(WatchlistContext)
    const inWatchList = watchlist.some(m => m.id === movies.id)

    return (
        <div className="bg-gray-200 rounded-md shadow-lg mx-3 mt-8 relative cursor-pointer p-6">
            <img src={movies.image?.medium || "https://via.placeholder.com/210x295"} alt={movies.title} className="w-full border rounded-md mt-2" />
            <div className="p-2">
                <p className="text-lg font-medium text-red-600">{movies.name}</p>
                <p className="text-sm">{movies.premiered}</p>
                <div className="flex gap-1 items-center">
                    <p className="text-sm font-light">{movies.rating?.average || "N/A"}</p>
                    <p className="text-yellow-400 text-xl"><MdStar /></p>
                </div>
            </div>
            <button className="text-red-600 text-xl absolute top-2 right-2 transform transition hover:scale-110 duration-150"
                onClick={() => toggleWatchlist(movies)}>
                {inWatchList ? <FaHeart /> : <FaRegHeart />}
            </button>
        </div>
    )
}

export default Moviecard