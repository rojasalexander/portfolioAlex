import { Container } from "@mui/material";
import "./App.css";
import AppBar from "./components/AppBar";
import HomePage from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <Container>
      <AppBar />
      <HomePage />
      <AboutMe />
      <Experience />
    </Container>
  );
}

export default App;
