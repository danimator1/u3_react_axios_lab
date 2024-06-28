import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function FilmDetails({ films }) {
  const [film, setFilm] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedFilm = films[id]
    setFilm(selectedFilm)
  }, [id, films])

  return film ? (
    <div className="detail">
      <h2> Title:</h2><p> {film.title}</p>
      <h4> Episode:</h4><p> {film.episode_id}</p>
      <h4> Director:</h4><p> {film.director}</p>
      <Link to="/filmslist"> Return Films list</Link>
    </div>
  ) : <h3>Finding Film...</h3>
}
