import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CompareCharactersPage = () => {
    // Change the title of the page
    document.title = "Compare | Marvel App";

    // State to hold characters and selected options
    const [characters, setCharacters] = useState([]); // Liste des personnages
    const [option1, setOption1] = useState(null); // Premier personnage sélectionné
    const [option2, setOption2] = useState(null); // Deuxième personnage sélectionné
    const [loading, setLoading] = useState(true); // Indicateur de chargement
    const [error, setError] = useState(null); // Gestion des erreurs

    // Charger les personnages depuis le fichier JSON local
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch('data/characters.json'); // Chemin du fichier JSON
                if (!response.ok) {
                    throw new Error(`Failed to fetch characters: ${response.statusText}`);
                }
                const data = await response.json();
                setCharacters(data);
                // Set default options to the first two characters
                setOption1(data[0]);
                setOption2(data[1]);
            } catch (err) {
                console.error('Error fetching characters:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    // Handle loading state
    if (loading) {
        return <p>Loading characters...</p>;
    }

    // Handle error state
    if (error) {
        return <p>Error: {error}</p>;
    }

    // Handle no characters available
    if (!characters.length) {
        return <p>No characters available to compare.</p>;
    }

    // Prepare data for RadarChart
    const data = [
        {
            attribute: 'Force',
            char1: option1?.capacities.force || 0,
            char2: option2?.capacities.force || 0,
        },
        {
            attribute: 'Intelligence',
            char1: option1?.capacities.intelligence || 0,
            char2: option2?.capacities.intelligence || 0,
        },
        {
            attribute: 'Durability',
            char1: option1?.capacities.durability || 0,
            char2: option2?.capacities.durability || 0,
        },
        {
            attribute: 'Energy',
            char1: option1?.capacities.energy || 0,
            char2: option2?.capacities.energy || 0,
        },
        {
            attribute: 'Speed',
            char1: option1?.capacities.speed || 0,
            char2: option2?.capacities.speed || 0,
        },
    ];

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            <h2>Compare Characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid="select-character-1"
                    value={option1?.id || ''}
                    onChange={(event) =>
                        setOption1(characters.find((c) => c.id === event.target.value))
                    }
                >
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
                &nbsp; with &nbsp;
                <select
                    data-testid="select-character-2"
                    value={option2?.id || ''}
                    onChange={(event) =>
                        setOption2(characters.find((c) => c.id === event.target.value))
                    }
                >
                    {characters.map((character) => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </p>

            {option1 && option2 && (
                <>
                    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="attribute" />
                        <PolarRadiusAxis />
                        <Radar
                            name={option1.name}
                            dataKey="char1"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                        />
                        <Radar
                            name={option2.name}
                            dataKey="char2"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            fillOpacity={0.6}
                        />
                    </RadarChart>

                    <div style={centerStyle}>
                        <h3>Character Details</h3>
                        <p>{option1.name}: {option1.description || 'No description available.'}</p>
                        <p>{option2.name}: {option2.description || 'No description available.'}</p>
                    </div>
                </>
            )}
        </>
    );
};

export default CompareCharactersPage;
