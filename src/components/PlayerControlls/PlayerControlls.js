import React from "react";
import { formatTime } from "../../Utilities/functions";
import { PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";
import { IconButton, Grid, Stack, Typography, Slider } from "@mui/material";

const PlayerControlls = ({ sliderStyle }) => {
  const skipStyle = { width: 28, heigth: 28 };
  const songDuration = 195;

  return (
    <Grid
      item
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: { xs: "flex-end", md: "center" },
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justify="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Stack
          spacing={1}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <IconButton size="small" sx={{ color: "text.primary" }}>
            <SkipPrevious sx={skipStyle} />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.primary" }}>
            <PlayArrow sx={{ width: 26, height: 38 }} />
          </IconButton>
          <IconButton size="small" sx={{ color: "text.primary" }}>
            <SkipNext sx={skipStyle} />
          </IconButton>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "75%" }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(38)}
          </Typography>
          <Slider
            min={0}
            max={songDuration}
            sx={sliderStyle}
            size="medium"
            value={97}
          />
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(195)}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default PlayerControlls;
