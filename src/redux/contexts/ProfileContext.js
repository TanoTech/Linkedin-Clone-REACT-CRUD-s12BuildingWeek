import { createContext, useState, useCallback } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [getAllPeople, setGetAllPeople] = useState ([]);
    const [jobResults, setJobResults] = useState([]); 
    const [currentJob, setCurrentJob] = useState(null);
    const [selectedToken, setSelectedToken] = useState("");

    
    const performSearch = useCallback(async (searchTerm) => {
        if (!selectedToken) return; 

        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/?search=${searchTerm}`, {
                headers: {
                    'Authorization': `Bearer ${selectedToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Errore nella ricerca');
            }

            const profiles = await response.json();
            setSearchResults(profiles); 
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, [selectedToken]); 

    const fetchUsers = useCallback(async () => {
        if (!selectedToken) return; 

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                headers: {
                    'Authorization': `Bearer ${selectedToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Errore nella ricerca');
            }

            const allPeople = await response.json();
            setGetAllPeople(allPeople);
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, [selectedToken]);

    const fetchJobs = useCallback(async ({ query = '', limit = '' }) => {
        if (!selectedToken) return;

        try {
            let url = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}&limit=${limit}`;

            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${selectedToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Errore nella richiesta dei lavori');
            }

            const result = await response.json();
            setJobResults(result.data); 
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, [selectedToken]);

    const fetchNews = useCallback(async () => {

        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=50&title_contains=tech', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Errore nel recupero delle notizie');
            }

            const news = await response.json();
            return news;
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, []);

    return (
        <ProfileContext.Provider value={{ 
            profile, 
            setProfile, 
            searchResults, 
            performSearch, 
            getAllPeople, 
            fetchUsers, 
            jobResults, 
            fetchJobs, 
            fetchNews, 
            currentJob, 
            selectedToken, 
            setSelectedToken 
        }}>
            {children}
        </ProfileContext.Provider>
    );
};