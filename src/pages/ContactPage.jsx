import React, { useEffect } from 'react';

const ContactPage = () => {
  // Modifier le titre de la page
  useEffect(() => {
    document.title = "Contact | Marvel App"; // Changer le titre de la page
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Feel free to contact us at 
        <a href="mailto:marvelApp@gmail.com"> marvelApp@gmail.com</a>.
      </p>
    </div>
  );
};

export default ContactPage;
