import React, { useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList";


import hogs from "../porkers_data";


function App() {

	const [greaseFilter, setGreaseFilter] = useState(false)

	const showFilter = () =>  {
		setGreaseFilter(!greaseFilter)
	}

	const [sort, setSort] = useState('')

	const toggleSort = sortValue => {
		setSort(sortValue)
	}

	const filteredHogs = greaseFilter ? hogs.filter(hog => hog.greased ? true : false ) : hogs

	const sortedHogs = [...filteredHogs].sort((a, b) => {
		switch( sort ){
			case 'name' : 
				if (a.name < b.name) {
					return -1
				} else {
					return 1}
			case 'weight': 
				return a.weight - b.weight	
			default: 
				return 0
		}
	})

	return (
		<div className="App">
			<Nav showFilter={showFilter} toggleSort={toggleSort}/>
			<div>
			<TileList hogs={ sortedHogs }/>
			</div>
		</div>
	);
}

export default App;
