import "./App.css";
import SideNav from "../SideNav/SideNav.js";
import Playlist from "../Playlist/Playlist.js";
import { Box } from "@mui/material";
import MobilNav from "../MobileNav/MobileNav";
import { Routes, Route } from "react-router-dom";
import Player from "../Player/Player";
import Library from "../Library/Library";
import Home from "../Home/Home";

const mockData = [
  { name: "Rock", playlistId: 123, image: "/Justin-Bieber.png" },
  { name: "Pop", playlistId: 646, image: "/Justin-Bieber.png" },
  { name: "Hip hop", playlistId: 834, image: "/Justin-Bieber.png" },
  { name: "X-mas", playlistId: 5503, image: "/Justin-Bieber.png" },
  { name: "Code life", playlistId: 4832, image: "/Justin-Bieber.png" },
];

const songs = [
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
];

function App() {
  return (
    <Box className="App">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
          <SideNav playlists={mockData} />
          <Routes>
            <Route path="/playlist/:id" element={<Playlist songs={songs} />} />
            <Route
              path="/search"
              element={<h1 style={{ color: "white" }}>Search</h1>}
            />
            <Route
              path="/library"
              element={<Library playlists={mockData} loading={false} />}
            />

            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
        <Player />
        <MobilNav />
        <Banner />
      </Box>
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
      Made with love by Techover Academy
    </Box>
  );
};

export default App;
