// FILEPATH: /c:/Users/jrossi04/marvel-app/src/pages/ContactPage.test.jsx

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';
import { BrowserRouter } from 'react-router-dom';

test('render ContactPage component', () => {
  // Render the ContactPage component
  render(<ContactPage />, { wrapper: BrowserRouter });

  // Expect the document title to be "Contact | Marvel App"
  expect(document.title).toBe('Contact | Marvel App');

  // Expect the heading 'Contact Us' to be in the document
  const h2Element = screen.getByRole('heading', { level: 2, name: "Contact Us" });
  expect(h2Element).toBeInTheDocument();

  // Expect the contact email to be in the document
  const emailElement = screen.getByText('marvelApp@gmail.com');
  expect(emailElement).toBeInTheDocument();

  // Expect the email link to have the correct href attribute
  const emailLinkElement = screen.getByRole('link', { name: 'marvelApp@gmail.com' });
  expect(emailLinkElement).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
});