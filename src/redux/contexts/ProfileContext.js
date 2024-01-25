import { createContext, useState, useCallback } from 'react';

export const ProfileContext = createContext();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOTQyMmJkNWQxMjAwMTg5MGQ0M2QiLCJpYXQiOjE3MDYwMDU1MzksImV4cCI6MTcwNzIxNTEzOX0.FCMdZrjjRxkJ279ok18O8GpY0L5AughCi-lX6jUDQPg';

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [getAllPeople, setGetAllPeople] = useState ([]);
    const [jobResults, setJobResults] = useState([]); 
    const [currentJob, setCurrentJob] = useState(null);

    //campo di ricerca
    const performSearch = useCallback(async (searchTerm) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/?search=${searchTerm}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Errore nella ricerca');
            }
            const profiles = await response.json();

            const filteredProfiles = profiles.filter(profile =>
                profile.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(filteredProfiles);
            console.log('questi sono i risultati di cosa cerchi')
            console.log(filteredProfiles)
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, []);

    //prende tutti gli utenti registrati
    const fetchUsers = useCallback(async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Errore nella ricerca');
            }
            const getAllPeople = await response.json();

            setGetAllPeople(getAllPeople);
            console.log('questi sono tutti gli utenti')
            console.log(getAllPeople)
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, []);

    //prende i lavori 
    const fetchJobs = useCallback(async ({ query, limit }) => {
        try {
            let url = 'https://strive-benchmark.herokuapp.com/api/jobs?';
            if (query) {
                url += `search=${query}&`;
            }
    
            if (limit) {
                url += `limit=${limit}&`;
            }
    
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Errore nella richiesta dei lavori');
            }
    
            const result = await response.json();
            const jobs = result.data;
            setJobResults(jobs);
            console.log('Ecco gli annunci di lavoro trovati:', jobs);
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, []);

    //prende le notizie 

    const fetchNews = useCallback(async () => {
        try {
            const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=30&title_contains=Job'
            , {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error('Errore nel recupero delle notizie');
            }
    
            const news = await response.json();
            console.log('Ecco le notizie:', news);
            return news;
        } catch (error) {
            console.error('Errore: ', error);
        }
    }, []);

    return (
        <ProfileContext.Provider value={{ profile, setProfile, searchResults, performSearch, getAllPeople, fetchUsers, jobResults, fetchJobs, fetchNews, currentJob }}>
            {children}
        </ProfileContext.Provider>
    );
};