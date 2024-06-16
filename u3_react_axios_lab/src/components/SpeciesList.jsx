export default function SpeciespList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.species) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="speciesPage">
                <div className="species">
                    {
                        props.species.map((species, index)=>(
                          <div key={index}  className="speciesContainer">
                            <div className="cardContent">
                            <h2>{species.name}</h2>
                            <h4>Classification:</h4> <p>{species.classification}</p>
                            <h4>Language:</h4><p>{species.language}</p>
                            </div>  
                          </div>  
                         
                        ))
                    }
                     </div>
                </div>
            )
        }}