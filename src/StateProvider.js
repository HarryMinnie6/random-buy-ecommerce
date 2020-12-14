//setup data layer
// this tracks the basket

import React, { createContext, useContext, useReducer } from "react";


//this is the data layer
export const StateContext = createContext()



//this is like a global variable that can be passed around the react app
// 1.) wrapp the App.js in the index.js file in <StateProvider> </StateProvider> tags

//build a provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
)


// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);