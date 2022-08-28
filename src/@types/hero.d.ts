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


export type AppContextType = {
  heroes: IHero[];
  universes: IUniverse[];
  hasFilter: boolean;
  filteredHeroes: IHero[];
  selectValue: string;
  superHero: ISuperHero;
  showHeroes: boolean;
  filteredUniverses: IUniverse[];
  setHasFilter: (filter: boolean) => void;
  setFilteredHeroes: (heroes: IHero[]) => void;
  setSelectValue: (value: string) => void;
  setShowHeroes: (isDisabled: boolean) => void;
  setFilteredUniverses: (universes: IUniverse[]) => void;
};