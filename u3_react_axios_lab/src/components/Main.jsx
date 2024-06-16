import { Route,Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import FilmsList from './FilmsList'
import PlanetsList from './PlanetsList'
import PeopleList from './PeopleList'
import Home from './Home'

export default function Main (props) {
    // console.log(props)
    // const thing = ""

    return (
        <div className="Main">
            {/* <h2>Main</h2> */}
        <Routes>
            <Route path="/starshiplist" element = {<StarshipList starShips = {props.starShips}/>}/>
            <Route path="/FilmsList" element = {<FilmsList films = {props.films}/>}/>
            <Route path="/PlanetsList" element = {<PlanetsList planets = {props.planets}/>}/>
            <Route path="/PeopleList" element = {<PeopleList people = {props.people}/>}/>
        </Routes>
    </div>
    )

  }