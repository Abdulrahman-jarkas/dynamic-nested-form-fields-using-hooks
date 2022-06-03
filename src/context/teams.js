import { createContext, useReducer } from "react";

export const TeamsContext = createContext();

const initState = [
  {
    name: "",
    players: [
      {
        name: "",
        age: "",
      },
      
    ],
  },
  // {
  //   name: "t2",
  //   players: [
  //     {
  //       name: "t2-p1",
  //       age: "12",
  //     },
  //     {
  //       name: "t2-p2",
  //       age: "12",
  //     },
  //   ],
  // },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TEAM": {
      // copy state to new ref
      const teams = [...state];

      teams.push({
        name: "",
        players: [
          {
            name: "",
            age: "",
          },
        ],
      });

      return teams;
    }

    case "UPDATE_TEAM": {
      // copy state to new ref
      const teams = [...state];

      teams[action.payload.index] = { ...action.payload.value };

      return teams;
    }

    case "DELETE_TEAM": {
      // copy state to new ref
      const teams = [...state];

      teams.splice(action.payload, 1);

      return teams;
    }

    case "ADD_PLAYER": {
      // copy state to new ref
      const teams = [...state];

      teams[action.payload].players.push({ name: "", age: "" });

      return teams;
    }

    case "DELETE_PLAYER": {
      // copy state to new ref
      const teams = [...state];

      teams[action.payload.teamIndex].players.splice(
        action.payload.playerIndex,
        1
      );
      return teams;
    }

    case "UPDATE_PLAYER": {
      // copy state to new ref
      const teams = [...state];

      teams[action.payload.teamIndex].players[action.payload.playerIndex] = {
        ...action.payload.value,
      };
      return teams;
    }

    default:
      throw new Error();
  }
};

export const TeamsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <TeamsContext.Provider value={[state, dispatch]}>
      {children}
    </TeamsContext.Provider>
  );
};
