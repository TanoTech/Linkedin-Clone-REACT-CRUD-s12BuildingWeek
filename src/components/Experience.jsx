import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

import {format} from 'date-fns';

const Experience = ({ data }) => {
    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState({
        role: '',
        company: '',
        startDate: null,
        endDate: null,
        description: '',
        area: '',
    });

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlM2Y1ZDYwMGJlMTAwMTgzYTg2OWMiLCJpYXQiOjE3MDU5MTgzMDEsImV4cCI6MTcwNzEyNzkwMX0.oC8mhZ_YldjX2-Ab-I6p9knSGsc-L2IlVxX95iBN73o';

    useEffect(() => {
        axios.get(`https://striveschool-api.herokuapp.com/api/profile/${data}/experiences`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => {
                setExperiences(response.data);
            })
            .catch((error) => {
                console.error('Errore nella richiesta GET:', error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewExperience((prevExperience) => ({
            ...prevExperience,
            [name]: value,
        }));
    };

    const handleDateChange = (date, name) => {
        setNewExperience((prevExperience) => ({
            ...prevExperience,
            [name]: date,
        }));
    };

    const handleAddExperience = () => {
        axios.post(`https://striveschool-api.herokuapp.com/api/profile/${data}/experiences`, newExperience, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((response) => {
                setExperiences((prevExperiences) => [...prevExperiences, response.data]);
                setNewExperience({
                    role: '',
                    company: '',
                    startDate: null,
                    endDate: null,
                    description: '',
                    area: '',
                });
            })
            .catch((error) => {
                console.error('Errore nella richiesta POST:', error);
            });
    };

    const handleDeleteExperience = (expId) => {
        axios.delete(`https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(() => {
                setExperiences((prevExperiences) => prevExperiences.filter((exp) => exp._id !== expId));
            })
            .catch((error) => {
                console.error('Errore nella richiesta DELETE:', error);
            });
    };

    const handleEditExperience = (expId) => {
        const updatedExperience = {
            role: newExperience.role,
            company: newExperience.company,
            startDate: newExperience.startDate,
            endDate: newExperience.endDate,
            description: newExperience.description,
            area: newExperience.area,
        };
    
        axios.put(`https://striveschool-api.herokuapp.com/api/profile/${data}/experiences/${expId}`, updatedExperience, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((response) => {
            setExperiences((prevExperiences) => {
                const updatedExperiences = prevExperiences.map((exp) => {
                    if (exp._id === expId) {
                        return response.data;
                    } else {
                        return exp;
                    }
                });
                return updatedExperiences;
            });
    
            setNewExperience({
                role: '',
                company: '',
                startDate: null,
                endDate: null,
                description: '',
                area: '',
            });
        })
        .catch((error) => {
            console.error('Errore nella richiesta PUT:', error);
        });
    };

    return (
        <Container>
            <h1>Esperienze Lavorative</h1>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience._id}>
                        <h2>{experience.role} at {experience.company}</h2>
                        <p>Area: {experience.area}</p>
                        <p>Descrizione: {experience.description}</p>
                        <p>Data di Inizio: {format(new Date(experience.startDate), 'dd/MM/yyyy')}</p>
                        <p>Data di Fine: {experience.endDate ? format(new Date(experience.endDate), 'dd/MM/yyyy') : 'In corso'}</p>
                        <button onClick={() => handleDeleteExperience(experience._id)}>Elimina</button>
                    </li>
                ))}
            </ul>

            <h2>Aggiungi una Nuova Esperienza</h2>
            <div>
                <input type="text" name="role" placeholder="Ruolo" onChange={handleInputChange} value={newExperience.role} />
                <input type="text" name="company" placeholder="Azienda" onChange={handleInputChange} value={newExperience.company} />
                <DatePicker
                    selected={newExperience.startDate}
                    onChange={(date) => handleDateChange(date, "startDate")}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Data di Inizio"
                />
                <DatePicker
                    selected={newExperience.endDate}
                    onChange={(date) => handleDateChange(date, "endDate")}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Data di Fine"
                />
                <input type="text" name="description" placeholder="Descrizione" onChange={handleInputChange} value={newExperience.description} />
                <input type="text" name="area" placeholder="Area" onChange={handleInputChange} value={newExperience.area} />
                <button onClick={handleAddExperience}>Aggiungi</button>
            </div>
        </Container>
    );
};

export default Experience;