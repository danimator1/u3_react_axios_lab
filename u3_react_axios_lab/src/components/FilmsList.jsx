export default function FilmsList (props) {
    // console.log(props)
    // const thing = ""
    if (!props.films) {
        return <h1> Loading Please Wait </h1>
        } else {
              return (
                <div className="films">
                    {
                        props.films.map((films, index)=>(
                          <div key={index}  className="filmsContainer">
                            <div className="cardContent">
                            <h4> Name:</h4><p> {films.title}</p>
                            <h4> Episode:</h4><p> {films.episode_id}</p>
                            <h4> Director:</h4><p> {films.director}</p>
                          </div> 
                          </div> 
                        ))
                    }
                </div>
            )
        }}
    