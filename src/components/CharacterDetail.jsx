// src/components/CharacterDetail.jsx

import React from 'react';

const CharacterDetail = ({ character }) => {
    const { description, thumbnail, modified} = character;

    return (
        <div>
            {thumbnail && (
                <img
                    src={`${thumbnail.path}/standard_large.${thumbnail.extension}`}
                    alt={character.name}
                />
            )}
            <p>{description || "No description available."}</p>
            <p>{modified || "No modification date available."}</p>
        </div>
    );
};

export default CharacterDetail;
