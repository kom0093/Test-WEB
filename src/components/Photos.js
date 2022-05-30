import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Photos.css';

function Photos() {
  let data = [
    {
      id:1,
      imgSrc: '/images/img-1.jpg',
    },
    {
      id:2,
      imgSrc: '/images/img-2.jpg',
    },
    {
      id:3,
      imgSrc: '/images/img-3.jpg',
    },
    {
      id:4,
      imgSrc: '/images/img-4.jpg',
    },
    {
      id:5,
      imgSrc: '/images/img-5.jpg',
    },
    {
      id:6,
      imgSrc: '/images/img-9.jpg',
    },
    {
      id:7,
      imgSrc: '/images/img-home.jpg',
    },
    {
      id:8,
      imgSrc: '/images/img-6.jpg',
    },
    {
      id:9,
      imgSrc: '/videos/video-3.mp4',
    },
    {
      id:10,
      imgSrc: '/videos/video-1.mp4',
    },
    {
      id:11,
      imgSrc: '/images/img-7.jpg',
    },
    {
      id:12,
      imgSrc: '/images/img-8.jpg',
    },
    {
      id:13,
      imgSrc: '/videos/video-2.mp4',
    },
    {
      id:14,
      imgSrc: '/images/img-8.jpg',
    },
    {
      id:15,
      imgSrc: '/images/img-1.jpg',
    },
    {
      id:16,
      imgSrc: '/images/img-2.jpg',
    },
    {
      id:17,
      imgSrc: '/images/img-3.jpg',
    },
    {
      id:18,
      imgSrc: '/images/img-5.jpg',
    },
    {
      id:19,
      imgSrc: '/images/img-6.jpg',
    },
    {
      id:20,
      imgSrc: '/images/img-1.jpg',
    },
    {
      id:21,
      imgSrc: '/videos/video-2.mp4',
    },
    
    
    

  ]
  
  var i = 0;
  const [tmp, setTmp] = useState(0);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (id, str) => {
    if (str == 'right')
    {
      id = id === data.length - 1 ? 0 : id + 1;
      setTmp(id);
    }
    else if (str == 'left'){
      id = id === 0 ? data.length -1 : id - 1;
      setTmp(id);
    }
    else if (str == '' ){
      setTmp(id);
    }
    
    i = data[id].imgSrc;
    setTempImgSrc(i);
    setModel(true);
  }

  return (
      <>
        <div className={model? "model open" : "model"}>
          {model == true && tempimgSrc.includes('videos') ? <video playsInline src={tempimgSrc} autoPlay controls/> : <img src={tempimgSrc} />}
          <i class="fas fa-window-close" onClick={() => setModel(false)}></i>
          <i class="fas fa-chevron-right" onClick={() => getImg(tmp, 'right')}></i>
          <i class="fas fa-chevron-left" onClick={() => getImg(tmp, 'left')}></i>
        </div>
        <h1>Image gallery</h1>
        <div className="gallery">
          {data.map((item, index) => {
            if (item.imgSrc.includes('videos'))
            {
              return (
                <div className='pictures' key={index} onClick={() => getImg(index, '')}>
                  <video playsInline className='picture' src={item.imgSrc} autoPlay loop muted></video>
                </div>
              )
            }
            else {
            return(
                <div className='pictures' key={index} onClick={() => getImg(index, '')}>
                  <img src={item.imgSrc} className='picture' />
                </div>
            )}
          })}
        </div>
      </>
  );
}

export default Photos;
