export default function VehiclespList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.vehicles) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="vehiclesPage">
                <div className="vehicles">
                    {
                        props.vehicles.map((vehicles, index)=>(
                          <div key={index}  className="vehiclesContainer">
                            <div className="cardContent">
                            <h2>{vehicles.name}</h2>
                            <h4>Model:</h4> <p>{vehicles.model}</p>
                            <h4>manufacturer:</h4><p>{vehicles.manufacturer}</p>
                            </div>  
                          </div>  
                         
                        ))
                    }
                     </div>
                </div>
            )
        }}