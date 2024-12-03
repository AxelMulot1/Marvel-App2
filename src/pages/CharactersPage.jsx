import React, { useState } from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
import { useLoaderData } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_ORDER, DEFAULT_ORDER_BY } from '../api/characters-api';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    const characters = useLoaderData();

    // get the search params from the URL
    let [searchParams, setSearchParams] = useSearchParams();

    // Get the order and orderBy from the search params or set the default values
    const [orderBy, setOrderBy] = useState(searchParams.get('orderBy') || DEFAULT_ORDER_BY)
    const [order, setOrder] = useState(searchParams.get('order') || DEFAULT_ORDER)


    // Update the search params when the order or orderBy state changes
    React.useEffect(() => {
        setSearchParams({ order, orderBy })
    }, [order, orderBy, setSearchParams])

    return (
        <>
            <h2>Marvel Characters</h2>
            {/* Order by  */}
            <label htmlFor="orderBy">Order by:</label>
            <select id='orderBy' data-testid='orderBy' value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="modified">Modified</option>
            </select>
            &nbsp;
            {/* Order */}
            <label htmlFor="order">Order:</label>
            <select id='order' data-testid='order' value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;