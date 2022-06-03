import { useContext } from "react";
import { TeamsContext } from "../context/teams";
import Team from "./team";

function Teams() {
  const [teams, dispatch] = useContext(TeamsContext);

  const handleAddTeam = () => {
    dispatch({
      type: "ADD_TEAM",
    });
  };

  const save = () => console.log(">>>> save", teams);

  return (
    <>
      <button className="btn btn-primary" onClick={handleAddTeam}>
        Add New Team
      </button>

      {teams.map((_, teamIndex) => (
        <Team key={teamIndex} index={teamIndex} />
      ))}

      <button className="btn btn-primary" onClick={save}>
        Save
      </button>
    </>
  );
}

export default Teams;
