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
  const [edit, setEdit] = useState<boolean>(false);
  const [editUniverse, setEditUniverse] = useState<boolean>(false);
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


  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setSuperHero({ ...superHero, universe: Number(value) });
  }

  function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const verifyExistance = verifyIfHeroExists(value);

    if (!verifyExistance) {
      setSuperHero({ ...superHero, name: value.toString() });
      setMessage("")
    }
  }

  function onUniverseNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const verifyExistance = verifyIfUniverseExists(value);

    if (!verifyExistance) {
      setNewUniverse({ ...newUniverse, universe: value.toString() });
      setMessage("")
    }
  }

  function onUrlChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setSuperHero({ ...superHero, image: value.toString() })
  }

  function verifyIfHeroExists(newHeroName: string) {
    let verification = false
    heroes.forEach((hero) => {
      if (hero.name === newHeroName) {
        setMessage("Super herói já existe no banco de dados")
        verification = true
      }
    })
    return verification;
  }

  function verifyIfUniverseExists(newUniverseName: string) {
    let verification = false
    universes.forEach((universe) => {
      if (universe.universe === newUniverseName) {
        setMessage("Universo já existe no banco de dados")
        verification = true
      }
    })
    return verification;
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
    register,
    setRegister,
    message,
    setMessage,
    isDisabled,
    setIsDisabled,
    onSelectChange,
    onNameChange,
    onUrlChange,
    verifyIfHeroExists,
    superHero,
    setSuperHero,
    newUniverse,
    setNewUniverse,
    onUniverseNameChange,
    verifyIfUniverseExists,
    isDisabledUniverse,
    setIsDisabledUniverse,
    showHeroes,
    setShowHeroes,
    filteredUniverses,
    setFilteredUniverses,
    edit,
    setEdit,
    editUniverse,
    setEditUniverse,
    addHero,
    addUniverse,
    setAddHero,
    setAddUniverse,
    getData,
    getUniverses,
  }

  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
};

export default AppProvider;