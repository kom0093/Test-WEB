import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './PlayVideo.js';
import './Photos.js';

const images = [
  "/images/img-1.jpg",
  '/images/img-2.jpg',
  '/images/img-3.jpg',
  '/images/img-4.jpg'
]
//const url = '/images/img-1.jpg'



function HeroSection() {
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation('translation');

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(index === images.length - 1) {
          setIndex(0);
        } 
        else {
          setIndex(index + 1);
        }
    }, 10000)
    
    return () => clearInterval(intervalId);
}, [index])


  
  return <div className='hero-container'>
      {/*<video src={url} autoPlay loop muted/>*/}
      {<img src={images[index]} className="background-image"></img>}
      <h1>{t('home.adventure-awaits')}</h1>
      <p>{t('home.travel-with-us')}</p>
      <i class="fas fa-chevron-right" onClick={() => index == images.length - 1? setIndex(0) : setIndex(index + 1)}></i>
          <i class="fas fa-chevron-left" onClick={() => index == 0 ? setIndex(images.length - 1) : setIndex(index - 1)}></i>
      <div className='hero-btns'>
          <Button lnk='/sign-up' className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>{t('navbar.sign-up')}</Button>
          <Button lnk='ytvideo' className='btn' scroll='true' buttonStyle='btn--primary' buttonSize='btn--medium'>{t('navbar.watch-trailer')} <i class="fas fa-play-circle"></i> </Button>
          <Button lnk='/gallery' className='btn' buttonStyle='btn--outline' buttonSize='btn--medium'>{t('home.view-gallery')} <i class="fas fa-images"></i></Button>
      </div>
    </div>;
}


export default HeroSection;