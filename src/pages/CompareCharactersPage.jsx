import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const CompareCharactersPage = () => {
    document.title = "Compare | Marvel App";

    // État des personnages
    const [characters, setCharacters] = useState([]);
    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);

    // Charger les données des personnages
    useEffect(() => {
        // Remplacez ceci par une vraie API ou une source de données
        const fetchCharacters = async () => {
            const response = await fetch('/api/characters'); // Modifier en fonction de votre backend
            const data = await response.json();
            setCharacters(data);
            setSelected1(data[0]);
            setSelected2(data[1]);
        };
        fetchCharacters();
    }, []);

    // Vérifiez que les personnages sont chargés
    if (!characters.length) {
        return <p>Loading characters...</p>;
    }

    // Données pour le graphique
    const data = [
        { attribute: 'Strength', char1: selected1?.strength, char2: selected2?.strength },
        { attribute: 'Speed', char1: selected1?.speed, char2: selected2?.speed },
        { attribute: 'Intelligence', char1: selected1?.intelligence, char2: selected2?.intelligence },
        // Ajoutez d'autres attributs ici
    ];

    return (
        <div>
            <h2>Compare Characters</h2>
            <div>
                <select
                    value={selected1?.id}
                    onChange={(e) => setSelected1(characters.find(c => c.id === e.target.value))}
                >
                    {characters.map(character => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>

                <select
                    value={selected2?.id}
                    onChange={(e) => setSelected2(characters.find(c => c.id === e.target.value))}
                >
                    {characters.map(character => (
                        <option key={character.id} value={character.id}>
                            {character.name}
                        </option>
                    ))}
                </select>
            </div>

            <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="attribute" />
                <PolarRadiusAxis />
                <Radar name={selected1?.name} dataKey="char1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={selected2?.name} dataKey="char2" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
};

export default CompareCharactersPage;
