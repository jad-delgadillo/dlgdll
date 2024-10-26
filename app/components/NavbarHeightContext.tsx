"use client";

import React, { createContext, useState, useContext } from "react";

interface NavbarHeightContextType {
  navbarHeight: number;
  setNavbarHeight: (height: number) => void;
}

const NavbarHeightContext = createContext<NavbarHeightContextType | undefined>(
  undefined
);

export const useNavbarHeight = () => {
  const context = useContext(NavbarHeightContext);
  if (!context) {
    throw new Error(
      "useNavbarHeight must be used within a NavbarHeightProvider"
    );
  }
  return context;
};

export const NavbarHeightProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
