import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import bernie from "../../assets/image/Bernie.JPG"
import Typography from "@mui/material/Typography"

export default function ArtistInfo() {
  return (
    <Grid container direction={"row"} justifyContent={"space-evenly"}>
      <Grid id="artist-image" item xs={5} sx={{ marginTop: "10px" }}>
        <img src={bernie} style={{ width: "50%", objectFit: "cover" }} />
      </Grid>
      <Grid
        sx={{ marginTop: "10px" }}
        xs={6}
        id="info-column"
        item
        container
        direction={"column"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h4">Sounds of Bernie</Typography>
        <Typography variant="h5">by</Typography>
        <Typography variant="h4" sx={{ fontWeight: "800" }}>
          Bernie
        </Typography>
      </Grid>
    </Grid>
  )
}
