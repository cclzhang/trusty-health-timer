import React, { useState } from "react";

const MusicPlayer = () => {
  const [mute, setMute] = useState(false);
  const toggle = () => {
    setMute(!mute);
  }

  return(
    <section>
      <p>--------------------</p>
      <p>music player</p>
      <button onClick={toggle}>{mute ? "muted" : "unmuted"}</button>
    </section>
  )
}

export default MusicPlayer;