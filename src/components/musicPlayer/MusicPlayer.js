import React from "react"
import Button from "@mui/material/Button"

import song from "../../assets/music/2021-05-26_-_Slavic_Lo-Fi_-_www.FesliyanStudios.com.mp3"

export default function MusicPlayer() {
  const [audio] = React.useState(new Audio(song))
  const [playing, setPlaying] = React.useState(false)

  const toggleSongPlaying = () => {
    playing ? audio.play() : audio.pause()
    setPlaying(!playing)
  }

  return (
    <div>
      <Button onClick={() => toggleSongPlaying()}>Play shit</Button>
    </div>
  )
}
