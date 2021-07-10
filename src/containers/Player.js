import React, {useState, useRef, useEffect} from 'react';
import shortAudio1 from '../assets/music/short1.mp3';
import longAudio1 from '../assets/music/long1.mp3';

const Player = ({ type, isOnBreak, setIsOnBreak, setIsActive}) => {

  const audioEl = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [audioFile, setAudioFile] = useState(shortAudio1);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);

  const fetchVideoAndPlay = () => {
    if (isOnBreak && type === 'long') {
      fetch(longAudio1)
      .then(() => {
        setAudioFile(longAudio1)
      })
      .then(()=> {
        return audioEl.current.play();
      })
      .catch(error => {
        console.log(error)
      })
    } else if (isOnBreak && type === 'short') {
      fetch(shortAudio1)
      .then(() => {
        setAudioFile(shortAudio1)
      })
      .then(() => {
        return audioEl.current.play();
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
  useEffect(() => {
    fetchVideoAndPlay()
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isOnBreak, type]);

  const audioEnd = () =>{
    setIsOnBreak(false)
    setIsActive(true);
  }

  return (
    <section className="musicPlayer">
      
      <button onClick={()=>{setIsMuted(!isMuted)}}>mute</button>
      {isMuted 
        ? <audio muted src={audioFile} ref={audioEl} onEnded={audioEnd}></audio>
        : <audio src={audioFile} ref={audioEl} onEnded={audioEnd}></audio>
      }

      {type === 'short'
        ? <h4>time to relax your eyes </h4> 
        : <h4>time to go for a walk</h4>
      }


      <p>time till break ends: {
        type === 'short'
          ? (20 - seconds).toString()
          : (120 - seconds).toString()
        } seconds</p>
      {/* <p>duration: {audioEl.current.duration}</p> */}
    </section>
  )
}

export default Player

