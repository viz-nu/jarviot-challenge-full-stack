
import React, { useContext, createContext, useState } from 'react';
const DataContext = createContext();
const DataProvider = ({ children }) => {
    const [files, setFiles] = useState([])
    const [user, setUser] = useState({})

    return (
        <DataContext.Provider value={{ files, setFiles, user, setUser }}>
            {children}
        </DataContext.Provider>
    )
}
export const DataState = () => useContext(DataContext)
export default DataProvider