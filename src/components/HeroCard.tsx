import React, { useContext, useEffect, useState } from 'react'
import { AppContextType, IHero } from '../@types/hero';
import { AppContext } from '../context/AppProvider';
import apiDelete from '../services/apiDelete';
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
    getData,
  } = useContext(AppContext)  as AppContextType;
  const { id, name, heroUniverse, image } = data as IHero;

  const [deleteHero, setDeleteHero] = useState(false);

  async function deleteSuperHero() {
    const response = await apiDelete(`/heroes/${id}`)

    if (response.status === 200) {
      window.location.reload();
    }
  }

  async function getSuperHero() {
    const hero = await apiGetAll(`/heroes/${id}`)
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
      {
        !deleteHero ? (
          <div className="hero-card">
            <div className="menu-wrapper">
            <BsFillTrashFill
                type="button"
                className="menu-btn"
                onClick={ () => {
                  setDeleteHero(!deleteHero);
                } }
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
        ) : (
          <div className="hero-card">
            <h1>Deseja deletar o herói?</h1>
            <div>
              <button
                type="button"
                className="btn-styles"
                onClick={ () => setDeleteHero(!deleteHero)}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn-styles"
                onClick={ () => {
                  deleteSuperHero()
                  getData()
                } }
              >
                Deletar
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default HeroCard;