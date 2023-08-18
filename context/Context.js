"use client"
import { createContext, useContext, useState } from "react";


export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [dark, setdark] = useState(false)

    const toggle = () => {
        setdark(!dark)
    }
    return (
        <GlobalContext.Provider value={{ toggle, dark, setdark }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const Theme = () => {
    return useContext(GlobalContext)
}