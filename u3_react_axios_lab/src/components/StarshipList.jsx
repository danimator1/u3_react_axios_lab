export default function StarshipList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.starShips) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="starShipsPage">
                <div className="starShips">
                    {
                        props.starShips.map((starShip, index)=>(
                          <div key={index}  className="starShipContainer">
                            <div className="cardContent">
                            <h2>{starShip.name}</h2>
                            <h4>Model:</h4> <p>{starShip.model}</p>
                            <h4>manufacturer:</h4><p>{starShip.manufacturer}</p>
                            </div>  
                          </div>  
                         
                        ))
                    }
                     </div>
                </div>
            )
        }}
    