import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { DEFAULT_ORDER, DEFAULT_ORDERBY } from '../api/characters-api';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));

describe('CharactersPage', () => {

    test('render CharactersPage component', () => {
        // when

        // then
        render(<BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}><CharactersPage /></BrowserRouter>);

        // expect the document title to be "Marvel App"
        expect(document.title).toBe('Marvel App');


        // expect the heading 'Marvel Characters' to be in the document
        const h2Element = screen.getByRole('heading', { level: 2, name: "Marvel Characters" });
        expect(h2Element).toBeInTheDocument();

        // expect the character Thor to be in the document
        const thorElement = screen.getByText(characters[0].name);
        expect(thorElement).toBeInTheDocument();

        // expect the charater Captain America to be in the document
        const captainAmericaElement = screen.getByText(characters[1].name);
        expect(captainAmericaElement).toBeInTheDocument();

        // expect the number of characters to be in the document
        const numberOfCharactersElement = screen.getByText(`There are ${characters.length} characters`);
        expect(numberOfCharactersElement).toBeInTheDocument();
    });

    test('render CharactersPage component with order and orderBy from search params', async () => {
        // when
        const order = 'desc';
        const orderBy = 'modified';

        // then
        render(
            <MemoryRouter initialEntries={[`/?order=${order}&orderBy=${orderBy}`]} >
                <CharactersPage />
            </MemoryRouter>
        );

        // screen.debug()

        // expect the order to be the same as the search params
        const orderBySelectElement = screen.getByTestId('orderBy');
        expect(orderBySelectElement).toHaveValue(orderBy);

        // expect the orderBy to be the same as the search params
        const orderSelectElement = screen.getByTestId('order');
        expect(orderSelectElement).toHaveValue(order);
    });

    test('render CharactersPage component with order and orderBy when the select changes', async () => {
        // when
        const order = 'desc';
        const orderBy = 'modified';

        // then
        render(
            <MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }} initialEntries={[`/`]} >
                <CharactersPage />
            </MemoryRouter>
        );

        // expect the order to be the default value
        const orderBySelectElement = screen.getByTestId('orderBy');
        expect(orderBySelectElement).toHaveValue(DEFAULT_ORDERBY);

        // expect the orderBy to be default value
        const orderSelectElement = screen.getByTestId('order');
        expect(orderSelectElement).toHaveValue(DEFAULT_ORDER);

        // when
        act(() => {
            // change the order select to desc
            const orderSelect = screen.getByTestId('order');
            orderSelect.value = order;
            orderSelect.dispatchEvent(new Event('change', { bubbles: true }));

            // then
            expect(orderSelect).toHaveValue(order);

            // change the orderBy select to modified
            const orderBySelect = screen.getByTestId('orderBy');
            orderBySelect.value = orderBy;
            orderBySelect.dispatchEvent(new Event('change', { bubbles: true }));

            // then
            expect(orderBySelect).toHaveValue(orderBy);
        });
    })

});