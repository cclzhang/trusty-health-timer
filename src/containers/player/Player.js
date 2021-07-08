import React, {useState, useRef, useEffect} from 'react';
import PlayerControls from './PlayerControls';

const Player = ({ type, isOnBreak, setIsOnBreak}) => {
  console.log(isOnBreak);
  const [shortSongs, setShortSongs] = useState([
    {
      src: '../../../public/music/music.mp3',
    }, 
    {
      src: '',
    }, 
    {
      src: '',
    }, 
  ])

  const[longSongs, setLongSongs] = useState([
    {
      src: '../../../public/music/longmusic.mp3',
    },
    {
      src: '',
    },
    {
      src: '',
    },
  ])

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [songSrc, setSongSrc] = useState('');

  // if (type === 'short') {
  //   setSongSrc(shortSongs[0].src);
  // } else if (type === 'long') {
  //   setSongSrc(longSongs[0].src);
  // } else {
  //   console.log('no type');
  //   return '';
  // }

  // useEffect(() => {
  //   if (isPlaying) {
  //     audioEl.current.play();
  //   } else {
  //     audioEl.current.pause();
  //   }
  // });
  console.log(audioEl.current);


  // useEffect(() => {
  //   if (type === 'short') {
  //     setSongSrc(shortSongs[0].src);
  //   } else if (type === 'long') {
  //     setSongSrc(longSongs[0].src);
  //   } else {
  //     console.log('no type');
  //     return '';
  //   }
  // }, [type]);

  return (
    <section className="musicPlayer">
      
      <audio src={shortSongs[0].src}></audio>
{/* 
      {isMuted 
        ? <audio muted src={songSrc} ref={audioEl}></audio> 
        : <audio src={songSrc} ref={audioEl}></audio>
      } */}

      {/* {type === 'short' 
        ? <h4>time to relax your eyes </h4> 
        : <h4>time to go for a walk</h4>
      } */}

      {/* <PlayerControls 
        isMuted={isMuted} 
        setIsMuted={setIsMuted}
      /> */}

      <p>time till break ends: time</p>
    </section>
  )
}

export default Player

