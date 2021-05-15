import React, { useState } from 'react';
import { useScrollPosition } from '../@utils/useScrollPosition';
import { LAST_SECTION_OFFSET } from '../@constants';

export interface PageContextProps {
  currentPage: string;
  setCurrentPage: (newPage: string) => void;
}

export const CurrentPageView = React.createContext<PageContextProps>(
  {
    currentPage: '',
    setCurrentPage: (newPage: string) => { }
  }
)

const CurrentPageViewProvider: React.FC = (props) => {

  const [currentPage, setCurrentPage] = useState<string>('');

  useScrollPosition(({ currPos }: any) => {
    if (currPos.y + LAST_SECTION_OFFSET > document.body.clientHeight) setCurrentPage('Contact');
  });

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