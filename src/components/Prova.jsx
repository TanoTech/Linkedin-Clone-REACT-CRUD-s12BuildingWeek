
import React, { createContext, useState, useCallback, useContext } from 'react';
import { ProfileContext } from '../redux/contexts/ProfileContext'


const YourComponent = () => {
    const { performSearch, searchResults } = useContext(ProfileContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        performSearch(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Cerca</button>

            <ul>
                {searchResults.map((profile) => (
                    <li key={profile._id}>{profile.name}</li>
                ))}
            </ul>
        </div>
    );
};  

export default YourComponent;