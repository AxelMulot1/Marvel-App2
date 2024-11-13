import React, { useEffect } from 'react';

const AboutPage = () => {
  // Utilisé pour changer le titre de la page
    useEffect(() => {
      document.title = "About | Marvel App"; // Modification du titre de la page
    }, []);

  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a team of Marvel fans who love to create awesome apps !
      </p>
    </div>
  );
};

export default AboutPage;
