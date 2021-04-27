import React, { createContext, useContext } from "react";

const ContextoAutenticacao = createContext(null);

export const AutenticacaoProvider = ({ children }) => {
  return (
    <ContextoAutenticacao.Provider value={{}}>
      {children}
    </ContextoAutenticacao.Provider>
  );
};

export function useAutenticacao() {
  const context = useContext(ContextoAutenticacao);
  if (!context) {
    throw new Error("use Auth");
  }

  return context;
}
