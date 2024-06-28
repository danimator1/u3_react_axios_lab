import { Route, Routes } from 'react-router-dom'
import StarshipList from './StarshipList'
import FilmsList from './FilmsList'
import PlanetsList from './PlanetsList'
import PeopleList from './PeopleList'
import VehiclesList from './VehiclesList'
import SpeciesList from './SpeciesList'
import ShipDetails from './StarshipDetails'
import PeopleDetails from './PeopleDetails'
import VehicleDetails from './VehiclesDetails'
import SpeciesDetails from './SpeciesDetails'
import FilmDetails from './FilmsDetails'
import PlanetDetails from './PlanetDetails'
import Home from './Home'

export default function Main(props) {
  return (
    <div className="Main">
      <Routes>
        <Route path="/starshiplist" element={<StarshipList starShips={props.starShips} />} />
        <Route path="/starship/:id" element={<ShipDetails starShips={props.starShips} />} />
        <Route path="/filmslist" element={<FilmsList films={props.films} />} />
        <Route path="/Films/:id" element={<FilmDetails films={props.films} />} />
        <Route path="/planetslist" element={<PlanetsList planets={props.planets} />} />
        <Route path="/planets/:id" element={<PlanetDetails planets={props.planets} />} />
        <Route path="/peoplelist" element={<PeopleList people={props.people} />} />
        <Route path="/people/:id" element={<PeopleDetails people={props.people} />} />
        <Route path="/vehicleslist" element={<VehiclesList vehicles={props.vehicles} />} />
        <Route path="/vehicle/:id" element={<VehicleDetails vehicles={props.vehicles} />} />
        <Route path="/specieslist" element={<SpeciesList species={props.species} />} />
        <Route path="/species/:id" element={<SpeciesDetails species={props.species} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
