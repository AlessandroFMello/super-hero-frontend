import React, { useContext, useEffect, useState } from 'react'
import { AppContextType, IHero } from '../@types/hero';
import { AppContext } from '../context/AppProvider';
import apiGetAll from '../services/apiGetAll';
import { BsFillTrashFill } from 'react-icons/bs';
import { BsPencilFill } from "react-icons/bs";

interface BaseLayoutProps {
  data?: IHero;
}

const HeroCard: React.FunctionComponent<BaseLayoutProps> = ({ data }) => {
  const {
    setIsDisabled,
    superHero,
    setSuperHero,
    edit,
    setEdit,
  } = useContext(AppContext)  as AppContextType;
  const { id, name, heroUniverse, image } = data as IHero;
  async function getSuperHero() {
    const hero = await apiGetAll(`heroes/${id}`)
    setSuperHero({
      id: id,
      name: hero.name,
      universe: hero.universe,
      image: hero.image
    });
  }

  useEffect(() => {
    function enableBtn() {
      if (superHero.image !== "" && superHero.name !== "") {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
    enableBtn();
  }, [superHero, setIsDisabled])

  return (
    <>
          <div className="hero-card">
            <div className="menu-wrapper">
            <BsFillTrashFill
                type="button"
                className="menu-btn"
              />
              <BsPencilFill
                type='button'
                className="menu-btn"
                onClick={ () => {
                  getSuperHero()
                  setEdit(!edit)
                }}
              />
            </div>
            <figure className="hero-card-figure">
              <img src={ image } alt={ name } />
            </figure>
            <div key={ name } className="hero-text">
              { name }
            </div>
            <div className="hero-text">
              { heroUniverse.universe }
          </div>
        </div>
    </>
  )
}

export default HeroCard;