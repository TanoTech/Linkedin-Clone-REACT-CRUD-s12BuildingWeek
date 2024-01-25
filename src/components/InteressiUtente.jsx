import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

export const contenutiPerAziende = [
  {
    id: 1,
    logo: "https://www.svgrepo.com/show/349454/microsoft.svg",
    nome: "Microsoft",
    follower: 100000,
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/archive/c/c1/20230822192910%21Google_%22G%22_logo.svg",
    nome: "Google",
    follower: 90000,
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Apple.inc.gif",
    nome: "Apple",
    follower: 80000,
  },
  {
    id: 4,
    logo: "https://www.svgrepo.com/show/327331/logo-amazon.svg",
    nome: "Amazon",
    follower: 75000,
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    nome: "Facebook",
    follower: 70000,
  },
  {
    id: 6,
    logo: "https://www.svgrepo.com/show/303391/tesla-9-logo.svg",
    nome: "Tesla",
    follower: 65000,
  },
  {
    id: 7,
    logo: "https://www.svgrepo.com/show/303265/samsung-logo.svg",
    nome: "Samsung",
    follower: 60000,
  },
  {
    id: 8,
    logo: "https://www.svgrepo.com/show/303377/ibm-logo.svg",
    nome: "IBM",
    follower: 55000,
  },
  {
    id: 9,
    logo: "https://www.svgrepo.com/show/303115/twitter-3-logo.svg",
    nome: "Twitter",
    follower: 50000,
  },
  {
    id: 10,
    logo: "https://www.svgrepo.com/show/303299/linkedin-icon-2-logo.svg",
    nome: "LinkedIn",
    follower: 45000,
  },
  {
    id: 11,
    logo: "https://i.pinimg.com/564x/21/07/ab/2107ab4c2502bced8bec96d6192dd943.jpg",
    nome: "Alienware",
    follower: 40000,
  },
  {
    id: 12,
    logo: "https://www.svgrepo.com/show/303303/oracle-6-logo.svg",
    nome: "Oracle",
    follower: 35000,
  },
];

export const contenutiPerNewsletter = [
  {
    id: 1,
    logo: "https://media.licdn.com/dms/image/D5612AQGqmBhn8r7WxA/series-logo_image-shrink_200_200/0/1675038234107?e=1711584000&v=beta&t=PVj69WnXXQaxJmb5N-wX01HhANGizJrfrDLNcwyfZvI",
    nome: "The AI Beat Newsletter",
    follower: 22300,
    link: "https://www.linkedin.com/newsletters/7025619738558926848/",
  },
  {
    id: 2,
    logo: "https://www.deeplearning.ai/site-meta.png",
    nome: "The Batch Newsletter",
    follower: 17450,
    link: "https://www.deeplearning.ai/the-batch/",
  },
  {
    id: 3,
    logo: "https://media.licdn.com/dms/image/D4E12AQGo8rcbTy2D6Q/series-logo_image-shrink_300_300/0/1664871180519?e=1711584000&v=beta&t=9oqaXac17wYOZdjQpnTm-aLfKrXwIv_q9Qs6Dlh5ylU",
    nome: "Future Tech Trends Nnewsletter",
    follower: 21000,
    link: "https://www.linkedin.com/newsletters/6511122508790394880/",
  },
  {
    id: 4,
    logo: "https://media.licdn.com/dms/image/C4E12AQH8iziPpGsDaA/series-logo_image-shrink_200_200/0/1587706616360?e=1711584000&v=beta&t=LsJv53G2mn2Y0PsYCr2Pz91QrJCwTIKcjGd6T9Er3iQ",
    nome: "Artificial Intelligence Newsletter",
    follower: 28430,
    link: "https://www.linkedin.com/newsletters/artificial-intelligence-6598352935271358464/",
  },
  {
    id: 5,
    logo: "https://media.licdn.com/dms/image/D4E12AQHaGtGMmpELsQ/series-logo_image-shrink_200_200/0/1668522853330?e=1711584000&v=beta&t=5-CwQgCQ4OiU3CTvKMqCNsb8hKxhbMn0p_ZgyLpRKVQ",
    nome: "What's Next in Tech Newsletter",
    follower: 31290,
    link: "https://www.linkedin.com/newsletters/what-s-next-in-tech-6998292087490101249/",
  },
  {
    id: 6,
    logo: "https://media.licdn.com/dms/image/D4D12AQHlkbr-3oxaww/series-logo_image-shrink_300_300/0/1679072350240?e=1711584000&v=beta&t=N7KPypkCOB_lWegJgnGXHledr9R_Z3ohGW-f0sDU0Dk",
    nome: "This Week in Web3 Nwesletter",
    follower: 11300,
    link: "https://www.linkedin.com/newsletters/7042539921454043136/",
  },
  {
    id: 7,
    logo: "https://media.licdn.com/dms/image/D4D12AQFmRXRKs8dkVw/series-logo_image-shrink_300_300/0/1660028206984?e=1711584000&v=beta&t=PPw76DyU9aNOqwjusxjFL8ES36aSUCrgRIFKnlP9xLc",
    nome: "Emerging Technologies Newsletter",
    follower: 14260,
    link: "https://www.linkedin.com/newsletters/emerging-technologies-6962662970698948608/",
  },
  {
    id: 8,
    logo: "https://substack-post-media.s3.amazonaws.com/public/images/b34dfde7-d5d1-4da8-9ae5-1be3e400cca8_1024x1024.png",
    nome: "Technicisms, the weekly newsletter on the new trends and the news related to the world of innovation, technology and business.",
    follower: 7510,
    link: "https://technicismi.substack.com/",
  },
  {
    id: 9,
    logo: "https://play-lh.googleusercontent.com/ZgcWsjG13tSRXp9zwFw3C6gB3nPvLf90zg2LouD4kD0xE0DlV3RaeKYh1FxGBRseRm4",
    nome: "Metal Hammer is the leader of the Hard and Heavy sector throughout Europe.",
    follower: 268410,
    link: "http://www.metalhammer.it/news/",
  },
  {
    id: 10,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_everyeye.it.png",
    nome: "Discover on Everyeye.it the news on PlayStation 5, articles and reviews on video games for PS5 outgoing.",
    follower: 45000,
    link: "https://www.everyeye.it/ps5/",
  },
  {
    id: 11,
    logo: "https://substackcdn.com/image/fetch/w_1360,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fa4e2d3e4-4bcb-4ac8-aca4-7f8466a55971_1279x853.png",
    nome: "VINCOS Newsletter, every week marketing and technology reflections.",
    follower: 16280,
    link: "https://vincos.substack.com/",
  },
  {
    id: 12,
    logo: "https://substackcdn.com/image/fetch/w_1360,c_limit,f_webp,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F68ce07df-2f2a-4c91-bec2-4b519763b967_1280x960.png",
    nome: "Guerre di Rete, News and analysis on Cyber Security, Privacy, Network and Politics.",
    follower: 28650,
    link: "https://guerredirete.substack.com/",
  },
];

export const contenutiPerScuoleUniversita = [
  {
    id: 1,
    logo: "https://seeklogo.com/images/P/Politecnico_di_Milano-logo-CE81376DCF-seeklogo.com.png",
    nome: "Politecnico di Milano",
    citta: "Milano",
    follower: 50000,
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Stemma_sapienza.png",
    nome: "La Sapienza University of Rome",
    citta: "Roma",
    follower: 45000,
  },
  {
    id: 3,
    logo: "https://www.svgrepo.com/show/74225/university-of-oxford-badge-logo.svg",
    nome: "University of Oxford",
    citta: "Oxford",
    follower: 80000,
  },
  {
    id: 4,
    logo: "https://yt3.googleusercontent.com/9CJOHDbi-LSvkIlw8P9BwhOImA0rIl2PQhzct9fiiQiZJAVfFXla8_CD3XC1Gji9I4-xbNjSNX4=s900-c-k-c0x00ffffff-no-rj",
    nome: "University of Cambridge",
    citta: "Cambridge",
    follower: 75000,
  },
  {
    id: 5,
    logo: "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png",
    nome: "Harvard University",
    citta: "Cambridge, MA",
    follower: 90000,
  },
  {
    id: 6,
    logo: "https://masterschool.climate-kic.org/wp-content/uploads/sites/8/2019/08/ETH-Zurich.jpg",
    nome: "ETH Zurich",
    citta: "Zurigo",
    follower: 60000,
  },
  {
    id: 7,
    logo: "data:image/png;base64,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",
    nome: "Technical University of Munich (TUM)",
    citta: "Monaco",
    follower: 55000,
  },
  {
    id: 8,
    logo: "https://pbs.twimg.com/profile_images/1239918796074336256/RUzCBBp1_400x400.png",
    nome: "Université Paris-Saclay",
    citta: "Parigi",
    follower: 70000,
  },
  {
    id: 9,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/KTH_Royal_Institute_of_Technology_logo.svg/1200px-KTH_Royal_Institute_of_Technology_logo.svg.png",
    nome: "KTH Royal Institute of Technology",
    citta: "Stoccolma",
    follower: 48000,
  },
  {
    id: 10,
    logo: "https://image-cache.xingcdn.com/images/attachments/165/603/368/original/d443d0ce_e558_4b41_8bd4_a1afd24511ea.jpg?Expires=1706727188&Signature=hpHYHpzPGcxVHhWKrGhfayxuB~ODv-jNflMQIjmArj0c5MwWBvWQpzvvhXTT9ZdSSkBzooajmto~XqvqUtL~5mr~e04ZQV7-U1fLtVr18PA2TuB0060xIWQzHIaQ0Ai3j0Pee82vWoUQ5XUm2Q1MjfE5475-H59gm076urk3QFgZCJB9T16jSVXZ4LlTJdU48LwE3LDSSAKuOPfRFMASt8XZuaUomqCzDSsrltbuY3owT9NHOp5QYvnZZrFRgC3ykOR2lkwbNeg7d14QFeC12ccXZEBB086o40jYErdtZUY0LAwfoZtaKmY0GUZ0CWll2FXU1hoWg5EhHKPLOH4DKA__&Key-Pair-Id=APKAJ7DHXHPGL3QFZP4Q",
    nome: "Technische Universität Dresden",
    citta: "Dresda",
    follower: 52000,
  },
  {
    id: 11,
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/mgnhcjkgon7o7sk76iyl",
    nome: "École Polytechnique Fédérale de Lausanne (EPFL)",
    citta: "Losanna",
    follower: 58000,
  },
  {
    id: 12,
    logo: "https://ires.ubc.ca/files/2019/10/ubc-logo.png",
    nome: "University of British Columbia",
    citta: "Vancouver",
    follower: 67000,
  },
  {
    id: 13,
    logo: "https://cdn.freebiesupply.com/logos/large/2x/tel-aviv-university-logo-png-transparent.png",
    nome: "Tel Aviv University",
    citta: "Tel Aviv",
    follower: 51000,
  },
];

const InteressiUtente = ({
  sezioneAttiva,
  risultatiAttuali,
  showUnfollowButton,
}) => {
  const [listaRisultati, setListaRisultati] = useState(risultatiAttuali);

  useEffect(() => {
    setListaRisultati(risultatiAttuali);
  }, [risultatiAttuali]);

  const handleSmettiDiSeguire = (id) => {
    const nuovaLista = listaRisultati.filter(
      (contenuto) => contenuto.id !== id
    );
    setListaRisultati(nuovaLista);
  };

  return (
    <Row>
      <Col>
        {listaRisultati.map((contenutoCasuale, index) => (
          <div key={contenutoCasuale.id}>
            {contenutoCasuale.logo && (
              <p>
                <img
                  className="logo-img"
                  src={contenutoCasuale.logo}
                  alt={contenutoCasuale.nome}
                />
              </p>
            )}

            <p>{contenutoCasuale.nome}</p>

            {contenutoCasuale.link && (
              <p>
                Link:{" "}
                <a
                  href={contenutoCasuale.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contenutoCasuale.link}
                </a>
              </p>
            )}

            {contenutoCasuale.follower && (
              <p>
                Follower: {contenutoCasuale.follower}{" "}
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
