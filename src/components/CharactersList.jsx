import React from 'react';
import { Link } from 'react-router-dom';

export function CharactersList({ characters = [] }) {
    return (
        <ul id="characters">
            {characters.map((character) => (
                <li key={character.id}>
                    <h2>
                        <Link to={`/characters/${character.id}`}>
                            {character.name}
                        </Link>
                    </h2>
                </li>
            ))}
        </ul>
    );
}
