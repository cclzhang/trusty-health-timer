import React, {useState, useRef, useEffect} from 'react';
import shortAudio1 from '../assets/music/short1.mp3';
import longAudio1 from '../assets/music/long1.mp3';

const Player = ({ type, isOnBreak, setIsOnBreak, setIsActive, breakLengthShort, breakLengthLong}) => {

  const audioEl = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [audioFile, setAudioFile] = useState(shortAudio1);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  const fetchVideoAndPlay = () => {
    if (isOnBreak && type === 'short') {
      console.log('short audio and break is true')
      fetch(shortAudio1)
      .then(() => {
        setAudioFile(shortAudio1);
      })
      .then(()=> {
        // setIsPlaying(true);
        return audioEl.current.play();
      })
      .catch(error => {
        alert("this is the short audio error: ", error)
      })
    } else if (isOnBreak && type === 'long') {
      console.log('long audio and break is true')
      fetch(longAudio1)
      .then(() => {
        setAudioFile(longAudio1);
      })
      .then(() => {
        // setIsPlaying(true);
        return audioEl.current.play();
      })
      .catch(error => {
        alert("this is the long audio error: ", error)
      })
    } else {
      alert('short and long audio is false')
    }
  }

  // useEffect(()=> {
  //   fetchVideoAndPlay();
  //   setIsPlaying(!isPlaying);
  //   console.log('break is changing')
  // }, [isOnBreak])
let duration2 = 0;
  useEffect(() => {
    // setDuration(audioEl.current.duration);
    duration2 = audioEl.current.duration
    console.log("before fetch vid and play. type: ", type, " Is on break: ", isOnBreak, "audioel.current: ", audioEl.current.duration, "duration: ", duration2)
    fetchVideoAndPlay();
    console.log("after fetch vid and play but before interval. type: ", type, " Is on break: ", isOnBreak, "audioel.current: ", audioEl.current.duration, "duration: ", duration2)

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);

  }, [isOnBreak]);

  // const audioDuration = new Promise((resolve, reject) => {
  //   audioEl.current.duration ? resolve('audio duration found') : reject('no duration for audio')
  // });

  // audioDuration
  //   .then(message => {
  //     setDuration(Math.floor(audioEl.current.duration));
  //     // setIsPlaying(true);
  //     console.log('this is the then ' + message);
  //   })
  //   // error occuring here x6
  //   .catch(errMessage => console.log('this is the duration error: ' + errMessage))

  const audioEnd = () =>{
    setIsOnBreak(false)
    setIsActive(true);
    setIsMuted(false);
    // setIsPlaying(false);
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


      {/* <p>{duration2 - seconds} secs of breaktime left</p> */}
      <p>{type === 'short' ? breakLengthShort - seconds : breakLengthLong - seconds} secs of breaktime left</p>
      {/* <p>{seconds}</p> */}
    </section>
  )
}

export default Player

