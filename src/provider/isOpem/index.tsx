import { useContext, createContext, ReactNode, useState } from "react";

interface IsOpemProps {
  children: ReactNode;
}

interface isOpemProviderData {
  isOpemSearch: boolean;
  isOpemSearchFunction: () => void;
  isOpemModalFunction: () => void;
  isOpemModal:boolean;
}

const IsOpemContext = createContext<isOpemProviderData>(
  {} as isOpemProviderData
);

export const IsOpemProvider = ({ children }: IsOpemProps) => {
  const [isOpemSearch, setIsOpemSearch] = useState(false);

  const [isOpemModal, setIsOpemModal] = useState(false)

  const isOpemSearchFunction = () => {
    if (isOpemSearch) {
      setIsOpemSearch(false);
    } else {
      setIsOpemSearch(true);
    }
  };

  const isOpemModalFunction = () => {
    if (isOpemModal) {
      setIsOpemModal(false);
    } else {
      setIsOpemModal(true);
    }
  };

  return (
    <IsOpemContext.Provider value={{ isOpemSearch, isOpemSearchFunction, isOpemModalFunction, isOpemModal}}>
      {children}
    </IsOpemContext.Provider>
  );
};

export const useIsOpem = () => useContext(IsOpemContext);
