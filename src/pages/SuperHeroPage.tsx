import React, { useContext } from 'react'
import { AppContextType, IHero, IUniverse } from '../@types/hero';
import HeroCard from '../components/HeroCard';
import { AppContext } from '../context/AppProvider';

export default function SuperHeroPage() {
  const {
  } = useContext(AppContext) as AppContextType;

  
  return (
    <>
          <div className="hero-wrapper">
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
