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
};