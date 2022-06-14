import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const Playlist = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(17,38,25,1) 0% rgba(24,115,38,1) 100%);",
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
    </Box>
  );
};

export default Playlist;
