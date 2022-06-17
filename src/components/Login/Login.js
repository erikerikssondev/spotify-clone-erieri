import { Box, Button } from "@mui/material";
import { accessUrl } from "../../config/config";

const Login = () => {
  return (
    <Box>
      <Button href={accessUrl} color="primary" variant="contained" size="large">
        Login to Spotify
      </Button>
    </Box>
  );
};

export default Login;
