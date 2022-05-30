import React , {Component} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Map, MarkerLayer, Marker, CompassControl, MouseControl, SyncControl } from 'react-mapycz'
import './ContactUs.css';

function ContactUs() {
  return (
    <>
    <h1 className="Kde">Kde nás najdete</h1>
    <div className='Maps'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.3428777807226!2d18.33880921587496!3d49.66667965140695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f6de8d68b557%3A0xe0b042b44bb8ef1a!2zQi4gTWFydGluxa8gMjM0NCwgTcOtc3RlaywgNzM4IDAxIEZyw71kZWstTcOtc3Rlaw!5e0!3m2!1scs!2scz!4v1643726550402!5m2!1scs!2scz" 
      width="50%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      <iframe style={{border:0}} src="https://frame.mapy.cz/s/pulukanada" width="50%" height="450" frameborder="0"></iframe>
    </div>
    
    </>
  )
}

export default ContactUs;
