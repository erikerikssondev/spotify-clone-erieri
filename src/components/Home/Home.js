import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <img
        src="/TA-logo.png"
        style={{ maxHeight: "50%", maxWidth: "50%" }}
        alt="Erik Eriksson"
      />
      <Button
        size="large"
        variant="contained"
        onClick={() =>
          (window.location.href = "https://www.academy.techover.nu")
        }
      >
        Contact
      </Button>
    </Box>
  );
};

export default Home;
