import React, { useContext, useEffect, useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs';
import { BsPencilFill } from "react-icons/bs";

interface BaseLayoutProps {
  data?: IHero;
}

const HeroCard: React.FunctionComponent<BaseLayoutProps> = ({ data }) => {
  const { id, name, heroUniverse, image } = data as IHero;
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