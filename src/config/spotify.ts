export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectUri = "http://localhost:5173/";
const redirectUri = "https://enchanting-cactus-801121.netlify.app/";
const clientId = "025559af826c4fb49d52bce6b6b8b10d";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-follow-read",
  "user-modify-playback-state",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-library-read",
  "streaming",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: any, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;