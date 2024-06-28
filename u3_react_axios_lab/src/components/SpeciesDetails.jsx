import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function SpeciesDetails({ species }) {
  const [speciman, setStarship] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedVehicle = species[id]
    setStarship(selectedVehicle)
  }, [id, species])

  return speciman ? (
    <div className="detail">
      <h2>{speciman.name}</h2>
     <h4>Classification:</h4> <p>{speciman.classification}</p>
     <h4>Language:</h4><p>{speciman.language}</p>
      <Link to="/specieslist"> Return Species list</Link>
    </div>
  ) : <h3>Finding Species...</h3>

}