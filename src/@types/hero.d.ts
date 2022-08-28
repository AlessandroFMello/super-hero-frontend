interface IHero {
  id: number;
  name: string;
  universe: number;
  image: string;
  heroUniverse: {
    id: number;
    universe: string;
  }
}

interface IUniverse {
  id: number;
  universe: string;
}

interface ISuperHero {
  id: number;
  name: string;
  universe: number;
  image: string;
}

export type AppContextType = {
  heroes: IHero[];
  universes: IUniverse[];
  hasFilter: boolean;
  filteredHeroes: IHero[];
  selectValue: string;
  register: string;
  message: string;
  isDisabled: boolean;
  isDisabledUniverse: boolean;
  superHero: ISuperHero;
  newUniverse: IUniverse;
  showHeroes: boolean;
  filteredUniverses: IUniverse[];
  addHero: boolean;
  addUniverse: boolean;
  setHasFilter: (filter: boolean) => void;
  setFilteredHeroes: (heroes: IHero[]) => void;
  setSelectValue: (value: string) => void;
  setRegister: (register: string) => void;
  setMessage: (message: string) => void;
  setIsDisabled: (isDisabled: boolean) => void;
  setSuperHero: (hero: ISuperHero) => void;
  setNewUniverse: (universe: IUniverse) => void;
  setIsDisabledUniverse: (isDisabled: boolean) => void;
  setShowHeroes: (isDisabled: boolean) => void;
  setFilteredUniverses: (universes: IUniverse[]) => void;
  setAddHero: (add: boolean) => void;
  setAddUniverse: (add: boolean) => void;
};