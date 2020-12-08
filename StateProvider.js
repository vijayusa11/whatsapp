import React , { createContext, useContext, useReducer } from 'react';

//Prepare Data layer
export const StateContext = createContext();

//Wrap our app and provide Date layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull information from date layer
export const useStateValue = () => useContext(StateContext);
