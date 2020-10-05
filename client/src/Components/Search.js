import React, {useState} from 'react'

function Search() {
    const [search, setSearch] = useState('')
    return (
        <div>
            <input type='text' placeholder='Cerca' 
            onChange = {e => setSearch(e.target.value)}/>
        </div>
    )
}

export default Search
