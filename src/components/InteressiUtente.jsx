import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from "react-bootstrap";



export const contenutiPerAziende = [
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

export const contenutiPerNewsletter = [
    'Contenuto N1',
    'Contenuto N2',
    'Contenuto N3',
];

export const contenutiPerScuoleUniversita = [
    {
        id: 1,
        logo: 'https://seeklogo.com/images/P/Politecnico_di_Milano-logo-CE81376DCF-seeklogo.com.png',
        nome: 'Politecnico di Milano',
        citta: 'Milano',
        follower: 50000,
      },
      {
        id: 2,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Stemma_sapienza.png',
        nome: 'Università La Sapienza di Roma',
        citta: 'Roma',
        follower: 45000,
      },
      {
        id: 3,
        logo: 'https://www.svgrepo.com/show/74225/university-of-oxford-badge-logo.svg',
        nome: 'University of Oxford',
        citta: 'Oxford',
        follower: 80000,
      },
      {
        id: 4,
        logo: 'https://www.logo.wine/a/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.svg',
        nome: 'University of Cambridge',
        citta: 'Cambridge',
        follower: 75000,
      },
      {
        id: 5,
        logo: 'https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png',
        nome: 'Harvard University',
        citta: 'Cambridge, MA',
        follower: 90000,
      },
      {
        id: 6,
        logo: 'https://ethz.ch/etc/designs/ethz/img/header/ethz_logo_black.svg',
        nome: 'ETH Zurich',
        citta: 'Zurigo',
        follower: 60000,
      },
      {
        id: 7,
        logo: 'https://docenhance.eu/wordpress/wp-content/uploads/2020/07/TUM_Logo_extern_mt_EN_RGB_p.png',
        nome: 'Technical University of Munich (TUM)',
        citta: 'Monaco',
        follower: 55000,
      },
      {
        id: 8,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Logo_Universit%C3%A9_Paris-Saclay.svg/1024px-Logo_Universit%C3%A9_Paris-Saclay.svg.png',
        nome: 'Université Paris-Saclay',
        citta: 'Parigi',
        follower: 70000,
      },
      {
        id: 9,
        logo: 'https://www.logotypes101.com/logos/932/4BDCBA5FAE7EF6FA23D793E1FACCFB99/KTH.png',
        nome: 'KTH Royal Institute of Technology',
        citta: 'Stoccolma',
        follower: 48000,
      },
      {
        id: 10,
        logo: 'https://www.bestarchitecturemasters.com/wp-content/uploads/2020/03/logo-tu-dresden.jpg',
        nome: 'Technische Universität Dresden',
        citta: 'Dresda',
        follower: 52000,
      },
      {
        id: 11,
        logo: 'https://www.epfl.ch/wp/6/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg?refresh=now',
        nome: 'École Polytechnique Fédérale de Lausanne (EPFL)',
        citta: 'Losanna',
        follower: 58000,
      },
      {
        id: 12,
        logo: 'https://www.abdn.ac.uk/img/450x/study/feature-images/UBC-logo-FL_rdax_450x254.png',
        nome: 'University of British Columbia',
        citta: 'Vancouver',
        follower: 67000,
      },
      {
        id: 13,
        logo: 'https://cdn.freebiesupply.com/logos/large/2x/tel-aviv-university-logo-png-transparent.png',
        nome: 'Tel Aviv University',
        citta: 'Tel Aviv',
        follower: 51000,
      },
];





const InteressiUtente = ({ sezioneAttiva, risultatiAttuali, showUnfollowButton }) => {
  const [listaRisultati, setListaRisultati] = useState(risultatiAttuali);

  useEffect(() => {
    setListaRisultati(risultatiAttuali);
  }, [risultatiAttuali]);

  const handleSmettiDiSeguire = (id) => {
    const nuovaLista = listaRisultati.filter((contenuto) => contenuto.id !== id);
    setListaRisultati(nuovaLista);
  };

  return (
    <Row>
      <Col>
        {listaRisultati.map((contenutoCasuale, index) => (
          <div key={contenutoCasuale.id}>
            <p>
              <img
                className="logo-img"
                src={contenutoCasuale.logo}
                alt={contenutoCasuale.nome}
              />
            </p>
            <p>{contenutoCasuale.nome}</p>
            {contenutoCasuale.follower && (
              <p>
                Follower: {contenutoCasuale.follower}{' '}
                {showUnfollowButton && (
                  <Button
                    key={`unfollow-${contenutoCasuale.id}`}
                    variant="light"
                    className="ps-3 pe-3 me-2 text-primary border-primary rounded-pill fw-bold"
                    onClick={() => handleSmettiDiSeguire(contenutoCasuale.id)}
                  >
                    Unfollow
                  </Button>
                )}
              </p>
            )}
            {index < listaRisultati.length - 1 && <hr />}
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default InteressiUtente;

  
  