import React, { useState } from 'react';

export const CurrentPageView = React.createContext(
  {
    currentPage: '',
    setCurrentPage: (newPage: string) => {}
  }
)

const CurrentPageViewProvider: React.FC = (props) => {

  const [currentPage, setCurrentPage] = useState<string>('');

  return (
    <CurrentPageView.Provider
      value={{
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
      }}
    >
      {props.children}
    </CurrentPageView.Provider>
  );
};

export default CurrentPageViewProvider;