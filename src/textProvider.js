import React, { createContext } from "react";

export const TextContext = createContext();

const text = "Provided Data from TextProvider";

function TextProvider({children}) {
    return (
        <TextContext.Provider value={text}>
            {children}
        </TextContext.Provider>
    )
}

export default TextProvider;