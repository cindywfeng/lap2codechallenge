import React, {useState} from 'react'
import Results from "./Results"
import axios from 'axios'
import 'regenerator-runtime/runtime'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [repos, setRepos] = useState([]);

    const handleChange = e => {
        setSearchInput(e.target.value)
    }

    const handleClick = async () => {
        //console.log(searchInput);

        // Fetching from GitHub API
        //Handling Errors
        try {

            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);

            // const result = fetch(`https://api.github.com/users/${searchInput}`)
            // .then(res => console.log(res))
            
        setRepos(result);
        }catch(err) {
            console.log(err)
        }
    }


    
    return (

        <>
        <div id="search">
            <input 
                id="searchBar"
                type="text" 
                placeholder="username"
                value={searchInput}
                onChange={handleChange}    
            />
            <button id="searchButton"onClick={handleClick}>Search</button>
        </div>
        <Results repos={repos} />
        </>
    )
}

export default SearchBar
