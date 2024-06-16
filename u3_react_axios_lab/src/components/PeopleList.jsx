export default function PeopleList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.people) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="people">
                    {
                        props.people.map((people, index)=>(
                          <div key={index}  className="peopleContainer">
                            <div className="cardContent">
                            <h2> {people.name}</h2>
                            <h4> Gender:</h4><p> {people.gender}</p>
                            <h4> height:</h4><p> {people.height}</p>
                            <h4> Birth Year:</h4><p> {people.birth_year}</p>
                            </div>
                          </div>  
                        ))
                    }
                </div>
            )
        }}