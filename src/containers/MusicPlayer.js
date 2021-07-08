import React, { useState, useEffect } from "react";
import soundfile from '../../public/music/music.mp3';

const MusicPlayer = () => {
  const [audio] = useState(new Audio(''));
  const [playing, setPlaying] = useState(false);

  // if (break) {
  //   setPlaying(!playing);
  // }
  const [mute, setMute] = useState(false);
  const toggle = () => {
    setMute(!mute);
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return(
    <section>
      <p>--------------------</p>
      <p>music player</p>
      <button onClick={toggle}>{mute ? "muted" : "unmuted"}</button>
    </section>
  )
}

export default MusicPlayer;