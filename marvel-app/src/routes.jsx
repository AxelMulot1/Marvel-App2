import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <CharactersPage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;