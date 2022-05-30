import React from 'react';
import './PlayVideo.css';

function PlayVideo() {
  return (
  <>
  <section id="ytvideo">
    <div className='bigDiv'>&nbsp;</div>
    <div className="video">
      <iframe width="550" height="275" src="https://www.youtube.com/embed/aETNYyrqNYE" title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

    </div>
  </section>
  </>
  )
}

export default PlayVideo;
