// Cette façon de faire fonctionne, mais elle n'est pas optimale. Elle mélange la récupération des données et l'affichage des composants.
// react_router nous permet de faire mieux en utilisant des hooks pour récupérer les données avant d'afficher le composant et ainsi de séparer récupération des données et affichage.
// Adapter le code pour utiliser react_router et les hooks comme dans l'exemple du guide, grâce aux concepts de loader et useLoaderData . On appelera directement la fonction getCharacters dans le loader (pas de fonction fetch ).
import { NumberOfCharacters } from '../components/NumberOfCharacters'; // Chemin d'accès pour l'importation

import { useLoaderData } from "react-router-dom";
import React, { useEffect } from 'react';

export default function CharactersPage() {
    const characters = useLoaderData(); // Assurez-vous que cette fonction soit importée correctement
    // Utilisé pour changer le titre de la page
    useEffect(() => {
        document.title = "Marvel App"; // Modification du titre de la page
    }, []);

    return (
        <div>
            <h2>Marvel Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <a href={`/character/${character.id}`}>{character.name}</a>
                    </li>
                ))}
            </ul>
            <NumberOfCharacters characters={characters} />
        </div>
    );
}
