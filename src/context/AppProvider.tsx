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
  const [filteredHeroes, setFilteredHeroes] = useState<IHero[]>([]);
  const [selectValue, setSelectValue] = useState<string>("All");
  const [register, setRegister] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [superHero, setSuperHero] = useState<ISuperHero>({
    id: 1,
    name: "",
    universe: 1,
    image: "",
  });
  const [newUniverse, setNewUniverse] = useState<IUniverse>({
    id: 1,
    universe: "",
  });
  const [isDisabledUniverse, setIsDisabledUniverse] = useState<boolean>(true);
  const [showHeroes, setShowHeroes] = useState(true);
  const [filteredUniverses, setFilteredUniverses] = useState<IUniverse[]>([]);
  const [addHero, setAddHero] = useState<boolean>(false);
  const [addUniverse, setAddUniverse] = useState<boolean>(false);

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
    filteredHeroes,
    setFilteredHeroes,
    selectValue,
    setSelectValue,
    showHeroes,
    setShowHeroes,
    filteredUniverses,
    setFilteredUniverses,
  }

  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
};

export default AppProvider;