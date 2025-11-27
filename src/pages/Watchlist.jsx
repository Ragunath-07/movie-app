import { useContext, useState } from "react"
import AllGenre from "../components/Allgenre"
import { WatchlistContext } from "../context/WatchlistContext"
import Moviecard from "../components/Moviecard"

function Watchlist() {
    const { watchlist, genrelist } = useContext(WatchlistContext)

    const [search, setSearch] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")

    const filteredMovies = watchlist
        .filter(movie => movie.name.toLowerCase().includes(search.toLowerCase()))
        .filter(movie => !selectedGenre || movie.genres.includes(selectedGenre))

    return (
        <div>
            {/* Searchbar */}
            <div className="flex justify-center mt-5">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="w-3/4 md:w-1/2 p-2 border border-black rounded-md"
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {/* Genre Dropdown */}
            <div className="flex justify-center mt-5">
                <AllGenre
                    genrelist={genrelist}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                />
            </div>

            {/* Movie Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredMovies.map((item, index) => (
                    <Moviecard key={index} movies={item} />
                ))}
            </div>
        </div>
    )
}

export default Watchlist
