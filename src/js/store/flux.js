const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterStarWars: [],
			planetsStarWars: [],
			vehiclesStarWars: []
		},
		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ characterStarWars: data.results }))
					.catch(err => console.error(err))

			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planetsStarWars: data.results }))
					.catch(err => console.error(err))

			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(res => res.json())
					.then(data => setStore({ vehiclesStarWars: data.results }))
					.catch(err => console.error(err))
			}

		}
	}
};


export default getState;
