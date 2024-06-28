import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function planetDetails({ planets }) {
  const [planet, setPlanet] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedPlanet = planets[id]
    setPlanet(selectedPlanet)
  }, [id, planets])

  return planet ? (
    <div className="detail">
       <h2> {planet.name}</h2>
       <h4>Population:</h4><p>{planet.population}</p>
       <h4>Climate:</h4><p>{planet.climate}</p>
        <h4>terrain:</h4><p>{planet.terrain}</p>

      <Link to="/Planetslist"> Return Planets list</Link>
    </div>
  ) : <h3>Finding Planet...</h3>
}
