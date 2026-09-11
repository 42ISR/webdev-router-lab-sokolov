import { useSearchParams, Link } from "react-router-dom";


export default function GenreFilter({ genres }) {

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedGenre = searchParams.get("genres") || ""

  const handleSelect = (genreId) => {
    setSearchParams(genreId ? {genre: genreId} : {})
  }

  return (
    <div className="genres">
      {genres.map((genre, i) => (
        <button
          type="button"
          key={genre.id || i}
          to={genre.id ? `/movies?genre=${genre.id}` : '/movies'}
          className={'genre-btn' + (genre.id === selectedGenre ? ' active' : '')}
          onClick = {() => handleSelect(genre.id)}
        >
          {genre.label}
          
        </button>
      ))}
    </div>
  );
}