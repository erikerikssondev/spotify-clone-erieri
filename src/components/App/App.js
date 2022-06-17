import "./App.css";
import SideNav from "../SideNav/SideNav.js";
import Playlist from "../Playlist/Playlist.js";
import { Box } from "@mui/material";
import MobilNav from "../MobileNav/MobileNav";
import { Routes, Route } from "react-router-dom";
import Player from "../Player/Player";
import Library from "../Library/Library";
import Home from "../Home/Home";
import Login from "../Login/Login";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser, fetchPlaylist } from "../../store/actions/index";

function App({ token, fetchUser, fetchPlaylist, spotifyApi }) {
  useEffect(() => {
    const getData = async () => {
      fetchUser(spotifyApi);
      fetchPlaylist(spotifyApi);
    };

    if (token) getData();
  }, [token, fetchUser]);

  return (
    <Box className="App">
      {token ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
            <SideNav />
            <Routes>
              <Route
                path="/playlist/:id"
                element={<Playlist spotifyApi={spotifyApi} />}
              />
              <Route
                path="/search"
                element={<h1 style={{ color: "white" }}>Search</h1>}
              />
              <Route path="/library" element={<Library />} />

              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Player />
          <MobilNav />
          <Banner />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 20,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: 12,
        boxSizing: "border-box",
        paddingRight: "10px",
      }}
    >
      Made by Erik Eriksson
    </Box>
  );
};

const mapState = (state) => {
  return { token: state.auth.token };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (api) => dispatch(fetchUser(api)),
    fetchPlaylist: (api) => dispatch(fetchPlaylist(api)),
  };
};

export default connect(mapState, mapDispatch)(App);
