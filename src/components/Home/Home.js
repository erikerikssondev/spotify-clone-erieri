import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <img
        src="/Spotify_Logo_RGB_White.png"
        style={{ maxHeight: "50%", maxWidth: "50%" }}
        alt="Erik Eriksson"
      />
      <Button
        size="large"
        variant="contained"
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/erik-eriksson-966b84218/")
        }
      >
        Contact
      </Button>
    </Box>
  );
};

export default Home;
