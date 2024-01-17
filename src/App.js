import "./index.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ProjectsContextProvider from "./store/project-context";
function App() {
  return (
    <>
      <ProjectsContextProvider>
        <Header />
        <Menu />
      </ProjectsContextProvider>
    </>
  );
}

export default App;
