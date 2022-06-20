import { Box, Typography, Grid, IconButton, Container } from "@mui/material";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { connect } from "react-redux";
import { closeOverlay } from "../../store/actions";

const PlayerOverlay = ({
  sliderStyle,
  spotifyApi,
  closeOverlay,
  playerOverlayOpen,
  title,
  artist,
  image,
}) => {
  return (
    <Box
      id="PlayerOverlay"
      sx={{
        width: "100%",
        height: "calc(100vh - 81px)",
        bgcolor: "background.paper",
        display: { xs: "block", md: "none" },
        position: "fixed",
        top: 0,
        left: 0,
        transition: "all 0.3s",
        transform: playerOverlayOpen ? "translateY(0vh)" : "translateY(100vh)",
      }}
    >
      <Container
        sx={{
          height: "100%",
          background: "linear-gradient(0deg, #1ed76050 0%, #1db95495 100%);",
        }}
      >
        <Grid
          container
          direction={"column"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
        >
          <Grid
            item
            xs={1}
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <IconButton
              onClick={() => closeOverlay()}
              sx={{ position: "absolute", paddingLeft: "0px" }}
            >
              <KeyboardArrowDownIcon
                fontSize="large"
                sx={{ color: "text.primary" }}
              />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              backgroundImage: `url("${image?.url}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Grid>
          <Grid item xs={1}>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", fontSize: "28px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.primary", fontSize: "18px" }}
            >
              {artist}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <PlayerControlls
              sliderStyle={sliderStyle}
              spotifyApi={spotifyApi}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const mapState = (state) => {
  const { playerOverlayOpen, title, artist, image } = state.player;
  return { playerOverlayOpen, title, artist, image };
};

const mapDispatch = (dispatch) => {
  return {
    closeOverlay: () => dispatch(closeOverlay()),
  };
};

export default connect(mapState, mapDispatch)(PlayerOverlay);
