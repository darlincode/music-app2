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
          width: "90vh",
          height: "50vh",
        },
      }}
    >
      <Paper
        elevation={10}
        variant="outlined"
        sx={{ width: "40vh", backgroundColor: "#f2f2f2" }}
      >
        <ArtistInfo />
        <MusicPlayer />
      </Paper>
    </Box>
  )
}
