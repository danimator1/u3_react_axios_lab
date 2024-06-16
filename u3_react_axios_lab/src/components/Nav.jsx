import { Link } from 'react-router-dom'

export default function Nav (props) {
    return (
        <div className= 'Nav'>
            {/* <h2> Nav</h2> */}

            <Link to="/home">
            <h2> Home </h2>
            </Link>

            <Link to="/starshiplist">
            <h2>Starships</h2>
            </Link>

            <Link to="/filmslist">
            <h2>Films</h2>
            </Link>

            <Link to="/peoplelist">
            <h2>People</h2>
            </Link>

            <Link to="/planetslist">
            <h2>Planet</h2>
            </Link>

            <Link to="/vehicleslist">
            <h2>Vehicles</h2>
            </Link>

            <Link to="/specieslist">
            <h2>Species</h2>
            </Link>





        </div>

    )
}
