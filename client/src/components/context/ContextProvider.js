import React, { createContext, useState } from "react";

export const addData = createContext();
export const updateData = createContext();
export const dltData = createContext();

const ContextProvider = ({ children }) => {
  const [userAdd, setUserAdd] = useState("");
  const [update, setUpdate] = useState("");
  const [deleteData, setDeletedata] = useState("");

  return (
    <>
      <addData.Provider value={{ userAdd, setUserAdd }}>
        <updateData.Provider value={{ update, setUpdate }}>
          <dltData.Provider value={{ deleteData, setDeletedata }}>
            {children}
          </dltData.Provider>
        </updateData.Provider>
      </addData.Provider>
    </>
  );
};

export default ContextProvider;
