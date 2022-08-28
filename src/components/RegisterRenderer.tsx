import React, { useContext, useEffect } from 'react';

import { AppContextType } from '../@types/hero';
import { AppContext } from '../context/AppProvider';
import RegisterBtn from './RegisterBtn';

export default function RegisterRenderer() {
  const {
    superHero,
    setIsDisabled,
    message,
    newUniverse,
    setIsDisabledUniverse,
  } = useContext(AppContext)  as AppContextType;


  useEffect(() => {
    function enableBtn() {
      if (superHero.name !== "" && superHero.image !== "" && message === "") {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
    enableBtn();
  }, [superHero, setIsDisabled, message])

  useEffect(() => {
    function enableBtn() {
      if (newUniverse.universe !== "" && message === "") {
        setIsDisabledUniverse(false);
      } else {
        setIsDisabledUniverse(true);
      }
    }
    enableBtn();
  }, [newUniverse, setIsDisabledUniverse, message])

  return (
    <div>
      <RegisterBtn />
    </div>
  )
}
