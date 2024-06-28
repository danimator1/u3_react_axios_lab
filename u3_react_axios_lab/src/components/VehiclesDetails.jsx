import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function VehicleDetails({ vehicles }) {
  const [vehicle, setStarship] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedVehicle = vehicles[id]
    setStarship(selectedVehicle)
  }, [id, vehicles])

  return vehicle ? (
    <div className="detail">
      <h2>{vehicle.name}</h2>
      <h4>Model:</h4> <p>{vehicle.model}</p>
      <h4>manufacturer:</h4><p>{vehicle.manufacturer}</p>
      <Link to="/vehicleslist"> Return Vehicle list</Link>
    </div>
  ) : <h3>Finding People...</h3>
}
