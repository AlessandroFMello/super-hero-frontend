import React, { useContext, useEffect, useState } from 'react';
import { BsPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from 'react-icons/bs';

import { AppContextType, IUniverse } from '../@types/hero';
import { AppContext } from '../context/AppProvider';

interface BaseLayoutProps {
  data?: IUniverse;
}

const UniverseCard: React.FunctionComponent<BaseLayoutProps> = ({ data }) => {  const {
} = useContext(AppContext)  as AppContextType;
  const { id, universe } = data as IUniverse;

  return (
    <>
          <div className="universe-card">
            <div></div>
            <div className="universe-name">{universe}</div>
            <div className="menu-wrapper">
              <BsFillTrashFill
                  type="button"
                  className="menu-btn-universe"
                />
              <BsPencilFill
                  type='button'
                  className="menu-btn-universe"
                />
            </div>
          </div>
    </>
  )
}

export default UniverseCard;