import { useContext } from "react";
import { TeamsContext } from "../context/teams";

function Player({ teamIndex, playerIndex }) {
  const [teams, dispatch] = useContext(TeamsContext);

  const handleDeletePlayer = () => {
    dispatch({
      type: "DELETE_PLAYER",
      payload: { teamIndex, playerIndex },
    });
  };

  const handleChangePlayer = ({ currentTarget: input }) => {
    const name = input.name;
    const value = input.value;

    const player = { ...teams[teamIndex].players[playerIndex] };

    dispatch({
      type: "UPDATE_PLAYER",
      payload: { teamIndex, playerIndex, value: { ...player, [name]: value } },
    });
  };

  return (
    <div className="row align-items-end">
      <div className="col-5">
        <div className="form-group">
          <label
            htmlFor={`team-${teamIndex}-playerName-${playerIndex}`}
            className="form-label"
          >
            Player Name
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            id={`team-${teamIndex}-playerName-${playerIndex}`}
            onChange={(e) => handleChangePlayer(e)}
            value={teams[teamIndex]?.players[playerIndex]?.name}
          />
        </div>
      </div>
      <div className="col-5">
        <div className="form-group">
          <label
            htmlFor={`team-${teamIndex}-playerAge-${playerIndex}`}
            className="form-label"
          >
            Player Age
          </label>
          <input
            className="form-control"
            type="text"
            name="age"
            id={`team-${teamIndex}-playerAge-${playerIndex}`}
            onChange={(e) => handleChangePlayer(e)}
            value={teams[teamIndex]?.players[playerIndex]?.age}
          />
        </div>
      </div>
      <div className="col">
        <button className="btn btn-danger" onClick={handleDeletePlayer}>
          Delete Player
        </button>
      </div>
    </div>
  );
}

export default Player;
