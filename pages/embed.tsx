import React, { useState } from 'react'
import DynamicIsland from '../src/DynamicIsland'
import { DynamicIslandMusicPlayer } from '../src/MusicPlayer'
import { DynamicIslandSize } from '../types'

const Player = () => {
  const [musicPlayerState, setMusicPlayerState] = useState<DynamicIslandSize>('compactBothSides')
  return (
    <DynamicIsland
      id='music-player'
      default='compactBothSides'
      state={musicPlayerState}
      setState={setMusicPlayerState}
      onClick={musicPlayerState === 'compactBothSides' ? () => setMusicPlayerState('ultra') : () => setMusicPlayerState('compactBothSides')}
    >
      <DynamicIslandMusicPlayer size={musicPlayerState} />
    </DynamicIsland>
  )
}

export default Player
