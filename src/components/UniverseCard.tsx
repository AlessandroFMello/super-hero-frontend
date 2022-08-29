import React, { useContext, useEffect, useState } from 'react';
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from 'react-icons/bs';

import { AppContextType, IUniverse } from '../@types/hero';
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
} = useContext(AppContext)  as AppContextType;
  const { id, universe } = data as IUniverse;

  const [universeToDelete, setUniverseToDelete] = useState(false);

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

  useEffect(() => {
    function enableBtn() {
      if (newUniverse.universe !== "") {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
    enableBtn();
  }, [newUniverse, setIsDisabled])

  return (
    <>

      {
        !universeToDelete ? (
          <div className="universe-card">
            <div></div>
            <div className="universe-name">{universe}</div>
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