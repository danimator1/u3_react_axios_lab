import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PlanetsList() {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      setPlanets(response.data.results)
    }
    getPlanets()
  }, [])

  let navigate = useNavigate()

  const showPlanet = (index) => {
    navigate(`/planets/${index}`)
  }

  return (
    <div className="planet">
      <h2>List of Planet</h2>
      {
        planets.map((planet, index) => (
          <div key={index} onClick={() => showPlanet(index)} className="card">
            <h3>{planet.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
