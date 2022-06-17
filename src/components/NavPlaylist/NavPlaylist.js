import { Box, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const NavPlaylist = ({ name, id, loading }) => {
  return (
    <Link to={loading ? "" : `/playlist/${id}`}>
      <Box
        px={3}
        py={1}
        sx={{
          color: "text.secondary",
          cursor: "pointer",
          fontSize: 14,
          "&:hover": { color: "text.primary" },
        }}
      >
        {loading ? (
          <Skeleton variant={"text"} height={"14px"} width={"70px"} />
        ) : (
          name
        )}
      </Box>
    </Link>
  );
};

export default NavPlaylist;
