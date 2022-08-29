import React, { useContext, useEffect, useState } from 'react';
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from 'react-icons/bs';

import { AppContextType, IUniverse, ISuperHero } from '../@types/hero';
import { AppContext } from '../context/AppProvider';
import apiDelete from '../services/apiDelete';
import apiGetAll from '../services/apiGetAll';

interface BaseLayoutProps {
  data?: IUniverse;
}

const UniverseCard: React.FunctionComponent<BaseLayoutProps> = ({ data }) => {  const {
  setIsDisabled,
  newUniverse,
  setNewUniverse,
  editUniverse,
  setEditUniverse,
  getUniverses,
  message,
} = useContext(AppContext)  as AppContextType;
  const { id, universe } = data as IUniverse;

  const [universeToDelete, setUniverseToDelete] = useState(false);
  const [universeHeroes, setUniverseHeroes] = useState<ISuperHero[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  async function deleteUniverse() {
    const response = await apiDelete(`/universes/${id}`)

    if (response.status === 200) {
      window.location.reload();
    }
  }

  async function getUniverse() {
    const universeToEdit = await apiGetAll(`/universes/${id}`)
    setNewUniverse({ id: universeToEdit.id , universe: universeToEdit.universe });
  }

  async function getAllHeroesFromUniverse() {
    const request = await apiGetAll(`/universes/${id}`);
    const universeHeroes = request.universeHeroes;

    setUniverseHeroes([ ...universeHeroes ])
  }

  useEffect(() => {
    function enableBtn() {
      if (newUniverse.universe !== "" && message === "") {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
    enableBtn();
  }, [message, newUniverse, setIsDisabled])

  return (
    <>

      {
        !universeToDelete ? (
          <div className="universe-card">
            <div className="menu-wrapper">
              <BsFillTrashFill
                  type="button"
                  className="menu-btn-universe"
                  onClick={ () => {
                    setUniverseToDelete(!universeToDelete)
                  } }
                />
              <BsPencilFill
                  type='button'
                  className="menu-btn-universe"
                  onClick={ () => {
                    getUniverse()
                    setEditUniverse(!editUniverse)
                  }}
                />
            </div>
            <div className="universe-card-renderer">
              <div
                className="universe-name"
                onClick={ () => {
                  getAllHeroesFromUniverse();
                  setIsClicked(!isClicked)
                }}
              >
                {universe}
              </div>
              <div>
                {
                  isClicked && (
                    <ul>
                      {
                        universeHeroes.map((hero) => (
                          <li key={hero.id}>{hero.name}</li>
                        ))
                      }
                    </ul>
                  )
                }
              </div>
            </div>
          </div>
        ) : (
          <div className="universe-card-delete">
            <h1>Deseja deletar o universo?</h1>
            <div>
              <button
                type="button"
                className="btn-styles"
                onClick={ () => {
                  setUniverseToDelete(!universeToDelete)
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn-styles"
                onClick={ () => {
                  deleteUniverse()
                  getUniverses()
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

export default UniverseCard;