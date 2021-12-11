
import React, { createContext,useState } from 'react';

const CurrentUserContext = React.createContext("");

function CurrentUserProvider({ children }) {
    const [CurrentUser, setCurrentUser] = useState();
    return (
        <CurrentUserContext.Provider value={{ CurrentUser, setCurrentUser }}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export { CurrentUserContext, CurrentUserProvider }; 


