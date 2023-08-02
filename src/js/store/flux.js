const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterStarWars: [],
			planetsStarWars: [],
			vehiclesStarWars: [],
			peopleInfo: [],
			planetInfo: [],
			vehicleInfo: [],
			favorites: []
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
			},
			getPeopleById: (index) => {
				fetch("https://www.swapi.tech/api/people/" + index)
					.then(res => res.json())
					.then(data => {
						console.log(data.result);
						setStore({ peopleInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},
			getPlanetById: (index) => {
				fetch("https://www.swapi.tech/api/planets/" + index)
					.then(res => res.json())
					.then(data => {
						console.log(data.result);
						setStore({ planetInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},
			getVehicleById: (index) => {
				fetch("https://www.swapi.tech/api/vehicles/" + index)
					.then(res => res.json())
					.then(data => {
						console.log(data.result);
						setStore({ vehicleInfo: data.result.properties })
					})
					.catch(err => console.error(err))
			},
			addFavorite: (type, data) => {
				const isAlreadyFavorited = getStore().favorites.find(
					(item) => item.type === type && item.data.url === data.url
				);
				if (!isAlreadyFavorited) {
					setStore({
						...getStore(),
						favorites: [...getStore().favorites, { type, data }],
					});
				}
			}

		}
	}
};


export default getState;
