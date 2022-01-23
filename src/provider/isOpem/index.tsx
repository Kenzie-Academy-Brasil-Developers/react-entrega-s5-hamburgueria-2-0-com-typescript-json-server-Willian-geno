import { useContext, createContext, ReactNode, useState } from "react";

interface IsOpemProps {
  children: ReactNode;
}

interface isOpemProviderData {
  isOpemSearch: boolean;
  isOpemSearchFunction: () => void;
}

const IsOpemContext = createContext<isOpemProviderData>(
  {} as isOpemProviderData
);

export const IsOpemProvider = ({ children }: IsOpemProps) => {
  const [isOpemSearch, setIsOpemSearch] = useState(false);

  const isOpemSearchFunction = () => {
    if (isOpemSearch) {
      setIsOpemSearch(false);
    } else {
      setIsOpemSearch(true);
    }
  };

  return (
    <IsOpemContext.Provider value={{ isOpemSearch, isOpemSearchFunction }}>
      {children}
    </IsOpemContext.Provider>
  );
};

export const useIsOpem = () => useContext(IsOpemContext);
