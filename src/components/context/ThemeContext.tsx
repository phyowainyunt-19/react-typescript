import React, { createContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export const themeContext = createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return (
        <themeContext.Provider value={theme}>{children}</themeContext.Provider>
    )
}

export default ThemeContextProvider