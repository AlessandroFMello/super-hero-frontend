import React, { useEffect, useState } from 'react'
import { AppContextType, IHero, ISuperHero, IUniverse } from '../@types/hero';
import apiGetAll from '../services/apiGetAll';

interface BaseLayoutProps {
  children?: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);


const AppProvider: React.FunctionComponent<BaseLayoutProps> = ({ children }) => {
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [universes, setUniverses] = useState<IUniverse[]>([]);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<string>("All");

  async function getData() {
    const data = await apiGetAll('heroes')
    setHeroes([ ...data ]);
  }

  async function getUniverses() {
    const allUniverses = await apiGetAll('universes')
    setUniverses([ ...allUniverses ]);
  }


  useEffect(() => {
    getUniverses()
  }, [universes])

  useEffect(() => {
    getData()
  }, [heroes])

  const context = {
    heroes,
    setHeroes,
    universes,
    setUniverses,
    hasFilter,
    setHasFilter,
    selectValue,
    setSelectValue,
  }

  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
};

export default AppProvider;