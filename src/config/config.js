export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "8e0e42e2cfb44f8c9f9b6bf9b087a2fe";
export const liveURL = "...";
export const devURL = "http://localhost:3000";
export const redirectURL = devURL;
export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
