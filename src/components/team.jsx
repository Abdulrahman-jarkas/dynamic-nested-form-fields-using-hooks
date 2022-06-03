import { useContext } from "react";
import { TeamsContext } from "../context/teams";
import Player from "./player";

function Team({ index }) {
  const [teams, dispatch] = useContext(TeamsContext);

  const handleChangeTeam = ({ currentTarget: input }) => {
    const inputName = input.name;
    const inputValue = input.value;

    const team = { ...teams[index] };

    dispatch({
      type: "UPDATE_TEAM",
      payload: { index, value: { ...team, [inputName]: inputValue } },
    });
  };

  const handleDeleteTeam = () => {
    dispatch({
      type: "DELETE_TEAM",
      payload: index,
    });
  };

  const handleAddPlayer = () => {
    dispatch({
      type: "ADD_PLAYER",
      payload: index,
    });
  };

  return (
    <div className="team my-5">
      <div className="row align-items-end">
        <div className="col-8">
          <div className="form-group">
            <label htmlFor={`teamName-${index}`} className="form-label">
              Team Name
            </label>
            <input
              className="form-control"
              type="text"
              value={teams[index]?.name}
              id={`teamName-${index}`}
              name="name"
              onChange={(e) => handleChangeTeam(e)}
            />
          </div>
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteTeam}
          >
            Delete Team
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => handleAddPlayer()}
          >
            Add Player
          </button>
        </div>
      </div>
      {teams[index]?.players?.map((player, playerIndex) => {
        return (
          <Player
            key={playerIndex}
            teamIndex={index}
            playerIndex={playerIndex}
          />
        );
      })}
    </div>
  );
}

export default Team;
