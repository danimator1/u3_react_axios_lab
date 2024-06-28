import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function FilmsList() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`)
      setFilms(response.data.results)
    }
    getFilms()
  }, [])

  let navigate = useNavigate()

  const showFilm = (index) => {
    navigate(`/films/${index}`)
  }

  return (
    <div className="film">
      <h2>List of Film</h2>
      {
        films.map((film, index) => (
          <div key={index} onClick={() => showFilm(index)} className="card">
            <h3>{film.title}</h3>
          </div>
        ))
      }
    </div>
  )
}
