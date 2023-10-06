import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
export default function AboutMe() {
  return (
    <Box mt="3rem" textAlign="start">
      <Typography variant="h4">About Me</Typography>

      <Grid container mt={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            Hello! My name is Alexander and I enjoy creating things with code. I
            started coding at 13, my interest started because I wanted to know
            how mobile applications were built. Until today I've had the
            privilege to work at such amazing companies and products. I've
            worked with different products such as Newsletters, Insurance
            Companies, Banks and also CMS web pages. Coding with SASS, CSS,
            Javascript, HTML. Nowadays, my main languages are typescript,
            javascript, css and html, looking forward to expand my knowledge in
            the backend, mobile and blockchain development.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="end">
            <img
              src="https://picsum.photos/500/300"
              alt="Alexander Rojas"
              style={{ borderRadius: "25px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
