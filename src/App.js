import "./App.css";
import Teams from "./components/teams";
import { TeamsProvider } from "./context/teams";

function App() {
  return (
    <div className="w-75 m-5">
      <TeamsProvider>
        <Teams />
      </TeamsProvider>
    </div>
  );
}

export default App;
