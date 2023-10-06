import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6">Alexander Rojas</Typography>
          <Box sx={{ display: "flex", gap: "5rem" }}>
            <Link
              underline="none"
              href="#"
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="white"
            >
              Home
            </Link>
            <Link
              underline="none"
              href="#"
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="white"
            >
              About
            </Link>
            <Link
              underline="none"
              href="#"
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="white"
            >
              Projects
            </Link>
            <Link
              underline="none"
              href="#"
              variant="h6"
              sx={{ flexGrow: 1 }}
              color="white"
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
