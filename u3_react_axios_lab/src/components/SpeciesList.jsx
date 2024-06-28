import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SpeciesList() {
  const [speciman, setSepecies] = useState([])

  useEffect(() => {
    const getSpecies = async () => {
      const response1 = await axios.get("https://swapi.dev/api/species")
      const response2 = await axios.get("https://swapi.dev/api/species/?page=2")
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setSepecies(combinedResults)
    }
    getSpecies()
  }, [])

  let navigate = useNavigate()

  const showSpecies = (index) => {
    navigate(`/species/${index}`)
  }

  return (
    <div className="species">
      <h2>List of Species</h2>
      {
        speciman.map((speciman, index) => (
          <div key={index} onClick={() => showSpecies(index)} className="card">
            <h3>{speciman.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
