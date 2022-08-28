import React, { useContext } from 'react'
import { AppContextType, IHero, IUniverse } from '../@types/hero';
import DisplayBtn from '../components/DisplayBtn';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import { AppContext } from '../context/AppProvider';

export default function SuperHeroPage() {
  const {
    heroes,
    universes,
    hasFilter,
    filteredHeroes,
  } = useContext(AppContext) as AppContextType;

  
  return (
    <>
          <>
          <header className="header-wrapper">
            <DisplayBtn />
            <Header />
          </header>
          <div className="hero-wrapper">
            {
              hasFilter
              ? (filteredHeroes.map((data: IHero) => (
                <div
                  key={data.id}
                >
                  <HeroCard data={ data } />
                </div>
              )))
              : (heroes.map((data: IHero) => (
                <div
                  key={data.id}
                >
                  <HeroCard data={ data } />
                </div>
              )))
            }
          </div>
          </>
    </>
  )
}
