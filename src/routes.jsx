// Importez les fonctions nécessaires depuis characters-api.js
import { getCharacters, getCharacterById } from './api/characters-api';
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import CharacterDetailPage from "./pages/CharacterDetailPage"; // Assurez-vous d'importer votre composant

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <CharactersPage />, loader: getCharacters }, // Vous pouvez maintenant utiliser getCharacters directement
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
            {
                path: "/character/:id", // Route pour afficher les détails d'un personnage
                element: <CharacterDetailPage />,
                loader: async ({ params }) => {
                    const character = getCharacterById(params.id); // Appel direct à getCharacterById
                    if (!character) {
                        throw new Response("Character not found", { status: 404 });
                    }
                    return character;
                },
            },
        ],
    },
];

export default routes;
