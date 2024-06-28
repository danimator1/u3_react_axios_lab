import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PeopleList() {
  const [pep, setPeople] = useState([])

  useEffect(() => {
    const getPeople = async () => {
      const response1 = await axios.get("https://swapi.dev/api/people")
      const response2 = await axios.get("https://swapi.dev/api/people/?page=2")
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setPeople(combinedResults)
    }
    getPeople()
  }, [])

  let navigate = useNavigate()

  const showPeople = (index) => {
    navigate(`/people/${index}`)
  }

  return (
    <div className="pepole">
      <h2>List of People</h2>
      {
        pep.map((pep, index) => (
          <div key={index} onClick={() => showPeople(index)} className="card">
            <h3>{pep.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
