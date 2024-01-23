import React from 'react';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const contenutiPerAziende = [
    { id: 1, logo: 'https://www.svgrepo.com/show/349454/microsoft.svg', nome: 'Microsoft', follower: 100000 },
    { id: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg', nome: 'Google', follower: 90000 },
    { id: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Apple.inc.gif', nome: 'Apple', follower: 80000 },
    { id: 4, logo: 'https://www.svgrepo.com/show/327331/logo-amazon.svg', nome: 'Amazon', follower: 75000 },
    { id: 5, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', nome: 'Facebook', follower: 70000 },
    { id: 6, logo: 'https://www.svgrepo.com/show/303391/tesla-9-logo.svg', nome: 'Tesla', follower: 65000 },
    { id: 7, logo: 'https://www.svgrepo.com/show/303265/samsung-logo.svg', nome: 'Samsung', follower: 60000 },
    { id: 8, logo: 'https://www.svgrepo.com/show/303377/ibm-logo.svg', nome: 'IBM', follower: 55000 },
    { id: 9, logo: 'https://www.svgrepo.com/show/303115/twitter-3-logo.svg', nome: 'Twitter', follower: 50000 },
    { id: 10, logo: 'https://www.svgrepo.com/show/303299/linkedin-icon-2-logo.svg', nome: 'LinkedIn', follower: 45000 },
    { id: 11, logo: 'https://www.brandforum.it/wp-content/uploads/2022/02/brandforum_logo_tales_intel_inside.png', nome: 'Intel', follower: 40000 },
    { id: 12, logo: 'https://www.svgrepo.com/show/303303/oracle-6-logo.svg', nome: 'Oracle', follower: 35000 },
];

const contenutiPerNewsletter = [
  'Contenuto N1',
  'Contenuto N2',
  'Contenuto N3',
];

const contenutiPerScuoleUniversita = [
    {
        id: 1,
        logo: 'https://it.wikipedia.org/wiki/File:Logo_Politecnico_Milano.png',
        nome: 'Politecnico di Milano',
        citta: 'Milano',
        follower: 50000,
      },
      {
        id: 2,
        logo: 'URL_DEL_LOGO_SAPIENZA',
        nome: 'Università La Sapienza di Roma',
        citta: 'Roma',
        follower: 45000,
      },
      {
        id: 3,
        logo: 'URL_DEL_LOGO_OXFORD',
        nome: 'University of Oxford',
        citta: 'Oxford',
        follower: 80000,
      },
      {
        id: 4,
        logo: 'URL_DEL_LOGO_CAMBRIDGE',
        nome: 'University of Cambridge',
        citta: 'Cambridge',
        follower: 75000,
      },
      {
        id: 5,
        logo: 'URL_DEL_LOGO_HARVARD',
        nome: 'Harvard University',
        citta: 'Cambridge, MA',
        follower: 90000,
      },
      {
        id: 6,
        logo: 'URL_DEL_LOGO_ETH',
        nome: 'ETH Zurich',
        citta: 'Zurigo',
        follower: 60000,
      },
      {
        id: 7,
        logo: 'URL_DEL_LOGO_TUM',
        nome: 'Technical University of Munich (TUM)',
        citta: 'Monaco',
        follower: 55000,
      },
      {
        id: 8,
        logo: 'URL_DEL_LOGO_UPS',
        nome: 'Université Paris-Saclay',
        citta: 'Parigi',
        follower: 70000,
      },
      {
        id: 9,
        logo: 'URL_DEL_LOGO_KTH',
        nome: 'KTH Royal Institute of Technology',
        citta: 'Stoccolma',
        follower: 48000,
      },
      {
        id: 10,
        logo: 'URL_DEL_LOGO_TUD',
        nome: 'Technische Universität Dresden',
        citta: 'Dresda',
        follower: 52000,
      },
      {
        id: 11,
        logo: 'URL_DEL_LOGO_EPFL',
        nome: 'École Polytechnique Fédérale de Lausanne (EPFL)',
        citta: 'Losanna',
        follower: 58000,
      },
      {
        id: 12,
        logo: 'URL_DEL_LOGO_UBC',
        nome: 'University of British Columbia',
        citta: 'Vancouver',
        follower: 67000,
      },
      {
        id: 13,
        logo: 'URL_DEL_LOGO_TAU',
        nome: 'Tel Aviv University',
        citta: 'Tel Aviv',
        follower: 51000,
      },
  // ... altri dati per scuole e università
];

const InteressiUtente = ({ sezioneAttiva }) => {
  const selezionareContenutoCasuale = () => {
    switch (sezioneAttiva) {
      case 'aziende':
        return contenutiPerAziende[getRandomInt(0, contenutiPerAziende.length - 1)];
      case 'newsletter':
        return contenutiPerNewsletter[getRandomInt(0, contenutiPerNewsletter.length - 1)];
      case 'scuole-universita':
        return contenutiPerScuoleUniversita[getRandomInt(0, contenutiPerScuoleUniversita.length - 1)];
      default:
        return null;
    }
  };

  const contenutoCasuale = selezionareContenutoCasuale();

  return (
    <div>
      {contenutoCasuale && (
        <>
          
          <p><img className="logo-img" src={contenutoCasuale.logo} alt={contenutoCasuale.nome} /></p>
          <p>{contenutoCasuale.nome}</p>
          <p>Follower: {contenutoCasuale.follower}</p>
        </>
      )}
    </div>
  );
};

export default InteressiUtente;