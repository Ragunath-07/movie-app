import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext()

function WatchlistProvider({ children }) {

    const [watchlist, setwatchlist] = useState([])

    const [genrelist, setgenrelist] = useState([])

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows`)
            .then((response) => response.json())
            .then((data) => {
                const allGenres = data.flatMap(show => show.genres || []);
                const uniqueGenres = [...new Set(allGenres)];

                const formattedGenres = uniqueGenres.map((genre, index) => ({
                    id: index + 1,
                    name: genre
                }));

                setgenrelist(formattedGenres);
            })
            .catch((error) => console.error("Error fetching genres:", error));
    }, []);


    const toggleWatchlist = (movies) => {
        const index = watchlist.findIndex((m) => m.id === movies.id)

        if (index === -1) {
            setwatchlist([...watchlist, movies])
        }
        else {
            setwatchlist([...watchlist.slice(0, index), ...watchlist.slice(index + 1)])
        }
    }

    return (
        <WatchlistContext.Provider value={{ watchlist, toggleWatchlist, genrelist }}>{children}</WatchlistContext.Provider>
    )
}

export default WatchlistProvider