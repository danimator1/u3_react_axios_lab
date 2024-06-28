import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function StarshipsList() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const getStarships = async () => {
      const response1 = await axios.get("https://swapi.dev/api/starships/")
      const response2 = await axios.get("https://swapi.dev/api/starships/?page=2")
      const response3 = await axios.get("https://swapi.dev/api/starships/?page=3")
      const combinedResults = [...response1.data.results, ...response2.data.results, ...response3.data.results]
      setStarships(combinedResults)
    }
    getStarships()
  }, [])

  let navigate = useNavigate()

  const showShip = (index) => {
    navigate(`/starship/${index}`)
  }

  return (
    <div className="starship">
      <h2>List of Starships</h2>
      {
        starships.map((starship, index) => (
          <div key={index} onClick={() => showShip(index)} className="card">
            <h3>{starship.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
