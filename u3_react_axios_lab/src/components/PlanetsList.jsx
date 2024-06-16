export default function PlanetsList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.planets) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="planets">
                    {
                        props.planets.map((planets, index)=>(
                          <div key={index}  className="planetsContainer">
                             <div className="cardContent">
                            <h2> {planets.name}</h2>
                            <h4>Population:</h4><p>{planets.population}</p>
                            <h4>Climate:</h4><p>{planets.climate}</p>
                            <h4>terrain:</h4><p>{planets.terrain}</p>
                          </div>  
                          </div>  
                        ))
                    }
                </div>
            )
        }}