import React from 'react';

const PlayerControls = ({isMuted, setIsMuted}) => {
  return (
    <div className="playerControls">
      <button className="muteBtn" onClick={setIsMuted(!isMuted)}>
        {isMuted ? 'muted' : 'not muted'}
      </button>
    </div>
  )
}

export default PlayerControls;
