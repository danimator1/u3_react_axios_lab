import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Home from './components/Home'

function App() {
  const [starShips, setStarShip] = useState([])
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [species, setSpecies] = useState([])


  useEffect(() =>{
    const getStarShips = async () => {
        const response1 = await axios.get('https://swapi.dev/api/starships')
        const response2 = await axios.get('https://swapi.dev/api/starships/?page=2')
        const response3 = await axios.get('https://swapi.dev/api/starships/?page=3')
        const combinedResults = [...response1.data.results, ...response2.data.results,...response3.data.results]
        setStarShip(combinedResults)
      // console.log('data', response)
    }
    getStarShips()

  }, [])

  console.log(starShips)

  useEffect(() =>{
    const getFilms = async () => {
      const response = await axios.get(`https://swapi.dev/api/films`)
      // console.log('data', response)
      setFilms(response.data.results)
    }
    getFilms()

  }, [])

  console.log(films)

  useEffect(() =>{
    const getPlanets = async () => {
      const response = await axios.get(`https://swapi.dev/api/planets`)
      // console.log('data', response)
      setPlanets(response.data.results)
    }
    getPlanets()

  }, [])

  console.log(planets)


  useEffect(() =>{
    const getPeople = async () => {
      const response1 = await axios.get(`https://swapi.dev/api/people`)
      const response2 = await axios.get(`https://swapi.dev/api/people/?page=2`)
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setPeople(combinedResults)
    }
    getPeople()

  }, [])

  console.log(people)

  useEffect(() =>{
    const getVehicles = async () => {
      const response1 = await axios.get(`https://swapi.dev/api/vehicles`)
      const response2 = await axios.get(`https://swapi.dev/api/vehicles/?page=2`)
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setVehicles(combinedResults)
    }
    getVehicles()

  }, [])

  console.log(vehicles)

  useEffect(() =>{
    const getSpecies = async () => {
      const response1 = await axios.get(`https://swapi.dev/api/species`)
      const response2 = await axios.get(`https://swapi.dev/api/species/?page=2`)
      const combinedResults = [...response1.data.results, ...response2.data.results]
      setSpecies(combinedResults)
    }
    getSpecies()

  }, [])

  console.log(species)


  return (
    <>
    <Header/>

    <Main starShips ={starShips}
              films ={films}
            planets ={planets}
             people ={people}
           vehicles ={vehicles}
            species ={species}/>

    </>
  )
}

export default App
