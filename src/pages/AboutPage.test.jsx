// FILEPATH: /c:/Users/jrossi04/marvel-app/src/pages/AboutPage.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

test('render AboutPage component', () => {
    // Render the AboutPage component
    render(<AboutPage />);

    // Expect the document title to be "About | Marvel App"
    expect(document.title).toBe('About | Marvel App');

    // Expect the heading 'About Us' to be in the document
    const h2Element = screen.getByRole('heading', { level: 2, name: "About Us" });
    expect(h2Element).toBeInTheDocument();

    // Expect the paragraph with the text 'We are a team of Marvel fans who love to create awesome apps !' to be in the document
    const paragraphElement = screen.getByText('We are a team of Marvel fans who love to create awesome apps !');
    expect(paragraphElement).toBeInTheDocument();
});