import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import SongTable from "../SongTable/SongTable";

const Playlist = ({ songs }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Box
        p={{ xs: 3, md: 4 }}
        id="findme"
        sx={{
          width: "100%",
          background: "linear-gradient(0deg, #1ed76010 0%, #1db95470 100%);",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "flex-start", md: "flex-end", xl: "center" },
          gap: 3,
          boxSizing: "border-box",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Avatar
          src="/img/Justin-Bieber.png"
          variant="square"
          alt="Bieber"
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
            Playlist
          </Typography>
          <Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: "bold" }}>
            Code life
          </Typography>
        </Box>
      </Box>
      <SongTable songs={songs} />
    </Box>
  );
};

export default Playlist;