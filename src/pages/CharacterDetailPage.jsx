// src/pages/CharacterDetailPage.jsx

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail'; // Assurez-vous d'importer ce composant

const CharacterDetailPage = () => {
    const character = useLoaderData();

    return (
        <div>
            <h2>{character.name}</h2>
            <CharacterDetail character={character} />
        </div>
    );
};

export default CharacterDetailPage;
