import React from "react"; // Make sure to import React
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TypeAnimation } from "react-type-animation";

export default function HomePage() {
  return (
    <Box mt="3rem" textAlign="start" padding="0 6rem">
      <Typography variant="body1" color="green">
        Hi There,
      </Typography>
      <Typography variant="h3">My name is Alexander Rojas</Typography>
      <TypeAnimation
        cursor={true}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "I am Web Developer",
          1000,
          "I am React Developer",
          1000,
          "I am Coffee Lover",
          1000,
        ]}
        wrapper="h3"
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
      <Typography variant="body1">
        I am a web developer based in the Paraguay. I have a passion for
        building websites and applications that are responsive and accessible.
      </Typography>
    </Box>
  );
}
