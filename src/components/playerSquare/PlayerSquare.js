import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import ArtistInfo from "../artistInfo/ArtistInfo"
import MusicPlayer from "../musicPlayer/MusicPlayer"

export default function PlayerSquare(props) {
  return (
    <Box
      sx={{
        margintop: "550px",
        display: "flex",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: "70vh",
          height: "60vh",
        },
      }}
    >
      <Paper
        elevation={10}
        variant="elevation"
        sx={{ width: "40vh", backgroundColor: "#f2f4f2" }}
      >
        <ArtistInfo />
        <MusicPlayer />
      </Paper>
    </Box>
  )
}
