import React, {useReducer} from 'react';

export default (reducer, action, initialstate) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialstate);

    const eachActions = {};
    for (let key in action) {
      eachActions[key] = action[key](dispatch);
    }
    return (
      <Context.Provider value={{state, ...eachActions}}>
        {children}
      </Context.Provider>
    );
  };

  return {Context, Provider};
};
