import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function PeopleDetails({ people }) {
  const [pep, setStarship] = useState(null)
  let { id } = useParams()

  useEffect(() => {
    const selectedPeople = people[id]
    setStarship(selectedPeople)
  }, [id, people])

  return pep ? (
    <div className="detail">
      <h2> {pep.name}</h2>
      <h4> Gender:</h4><p> {pep.gender}</p>
      <h4> height:</h4><p> {pep.height}</p>
      <h4> Birth Year:</h4><p> {pep.birth_year}</p>
      <Link to="/peoplelist"> Return People list</Link>
    </div>
  ) : <h3>Finding People...</h3>
}
