import { useEffect, useState } from "react"
import Moviecard from "../components/Moviecard"

function Home() {

    const [movies, setmovies] = useState([])
    const [page, setpage] = useState(0)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows?page=${page}`)
            .then((response) => response.json())
            .then((data) => setmovies(data))
    }, [page])

    const filteredMovies = movies.filter(movie =>
        movie.name.toLowerCase().includes(search.toLowerCase())
    )

    function handleSearch(evt) {
        setSearch(evt.target.value)
    }

    function previousPage() {
        if (page > 0) {
            setpage(page - 1)
        }
    }

    function nextPage() {
        setpage(page + 1)
    }

    return (
        <div>
            {/* Searchbar Container */}
            <div className="flex justify-center mt-8">
                <input type="text" placeholder="Search for movies..."
                    className="w-3/4 md:w-1/2 p-2 border rounded-md shadow-md"
                    value={search}
                    onChange={handleSearch} />
            </div>

            {/* Movies Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {filteredMovies.map((item, index) => (
                    <Moviecard key={index} movies={item} />
                ))}
            </div>

            <div className="flex justify-between mx-4 my-5">
                <button disabled={page == 0}
                    className={`py-1 px-4 rounded text-white ${page === 0 ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                    style={{ background: "linear-gradient(to left, #ff0000, #b30000)" }}
                    onClick={previousPage}>Prev</button>
                <button className="py-1 px-4 rounded text-white "
                    style={{ background: "linear-gradient(to right, #ff0000, #b30000)" }}
                    onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default Home