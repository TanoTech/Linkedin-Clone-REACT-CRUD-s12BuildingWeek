import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Ads = () => {
    const backgroundImages = [
        '/assets/ads/adsMerenda.png',
        '/assets/ads/antonio.png',
        '/assets/ads/gaePhone.png',
        '/assets/ads/mc.png',
        '/assets/ads/profumiandrea.png',
        '/assets/ads/profumo.png',
        '/assets/ads/treno.png'

    ];

    const [currentBackgroundImage, setCurrentBackgroundImage] = useState('');

    function getRandomImageIndex() {
        return Math.floor(Math.random() * backgroundImages.length);
    }

    useEffect(() => {
        const randomIndex = getRandomImageIndex();
        setCurrentBackgroundImage(`url('${backgroundImages[randomIndex]}')`);
    }, []);

    const containerStyle = {
        marginTop: '.5em',
        backgroundImage: currentBackgroundImage,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        width: '20em',
        height: '9.6em',
        cursor: 'pointer',
    };

    return (
        <Container className="adsContainer border border-solid rounded" style={containerStyle}>
            <p className="p-0 m-0 mt-2 w-25 text-center rounded">ADS</p>
        </Container>
    );
}

export default Ads;