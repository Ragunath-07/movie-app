function AllGenre({ genrelist, selectedGenre, setSelectedGenre }) {
    return (
        <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="border border-black p-2 rounded-md bg-gray-100"
        >
            <option value="">All Genres</option>
            {genrelist.map((items) => (
                <option key={items.id} value={items.name}>
                    {items.name}
                </option>
            ))}
        </select>
    );
}

export default AllGenre;
