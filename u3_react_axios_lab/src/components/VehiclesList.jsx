import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function VehicleList() {
  const [vehicle, setVehicle] = useState([])

  useEffect(() => {
    const getVehicle = async () => {
      const response1 = await axios.get("https://swapi.dev/api/vehicles")
      const response2 = await axios.get("https://swapi.dev/api/vehicles/?page=2")
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setVehicle(combinedResults)
    }
    getVehicle()
  }, [])

  let navigate = useNavigate()

  const showVehicle = (index) => {
    navigate(`/vehicle/${index}`)
  }

  return (
    <div className="vehicle">
      <h2>List of Vehicle</h2>
      {
        vehicle.map((vehicle, index) => (
          <div key={index} onClick={() => showVehicle(index)} className="card">
            <h3>{vehicle.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
