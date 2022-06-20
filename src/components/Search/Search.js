import React, { useState } from "react";
import { Box, InputBase, Grid, Typography } from "@mui/material";
import SongTable from "../SongTable/SongTable";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ spotifyApi }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  const formatSongData = (items) => {
    return items.map((item) => {
      return {
        ...item,
        contextUri: item.album.uri,
        position: item.track_number - 1,
      };
    });
  };

  const handleOnChange = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { value } = event.target;

    if (value === "") {
      setSongs([]);
      setLoading(false);
      return;
    }

    try {
      const result = await spotifyApi.searchTracks(value);
      const { items } = result.body.tracks;
      const formattedSongs = formatSongData(items);
      setSongs(formattedSongs);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        padding: "30px",
        bgcolor: "background.paper",
        flex: 1,
        overflowY: "auto",
      }}
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{
          borderRadius: 50,
          padding: "2px 10px",
          display: "flex",
          alignItems: "center",
          width: 250,
          backgroundColor: "#ffffff",
          color: "#000000",
          marginBottom: 20,
        }}
      >
        <SearchIcon
          fontSize="large"
          sx={{ marginRight: "4px", marginTop: "3px", marginLeft: "-2px" }}
        />
        <InputBase
          id="input__for__songs"
          label={"Artist's, songs or podcast's"}
          sx={{ color: "black" }}
          onChange={handleOnChange}
        />
      </form>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          {songs.length > 0 && (
            <SongTable
              songs={songs}
              loading={loading}
              spotifyApi={spotifyApi}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
