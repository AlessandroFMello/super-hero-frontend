import React, { useContext } from 'react'
import { AppContextType, IHero, IUniverse } from '../@types/hero';
import DisplayBtn from '../components/DisplayBtn';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import UniverseCard from '../components/UniverseCard';
import UniverseHeader from '../components/UniverseHeader';
import { AppContext } from '../context/AppProvider';

export default function SuperHeroPage() {
  const {
    heroes,
    universes,
    hasFilter,
    filteredHeroes,
    showHeroes,
    filteredUniverses,
  } = useContext(AppContext) as AppContextType;

  
  return (
    <>
      {
        showHeroes
        ? (
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
          )
        : (
          <>
          <header className="header-wrapper">
            <DisplayBtn />
            <RegisterRenderer />
          </header>
          <div className="universes-wrapper">
            {
              hasFilter
              ? (filteredUniverses.map((data: IUniverse) => (
                <div
                  key={data.id}
                >
                  <UniverseCard data={ data } />
                </div>
              )))
              : (universes.map((data: IUniverse) => (
                <div
                  key={data.id}
                >
                  <UniverseCard data={ data } />
                </div>
              )))
            }
          </div>
          </>
        )
      }
    </>
  )
}
