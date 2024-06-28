import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function ShipDetails({ starShips }) {
  const [starship, setStarship] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedStarship = starShips[id]
    setStarship(selectedStarship)
  }, [id, starShips])

  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <h4>Model:</h4> <p>{starship.model}</p>
      <h4>Manufacturer:</h4><p>{starship.manufacturer}</p>
      <Link to="/starshiplist"> Return to starship list</Link>
    </div>
  ) : <h3>Finding starships...</h3>
}
