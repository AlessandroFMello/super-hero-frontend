import React,
{ useContext } from 'react'
import { AppContextType } from '../@types/hero';
import { AppContext } from '../context/AppProvider'

export default function RegisterBtn() {
  const {
      register,
      setRegister,
      setIsDisabled,
      setIsDisabledUniverse,
      setSuperHero,
      setNewUniverse,
      newUniverse,
      addHero,
      addUniverse,
      setAddHero,
      setAddUniverse,
     } = useContext(AppContext)  as AppContextType;
  return (
    <div className="register-header-wrapper ">
      <button
        type='button'
        className="btn-styles"
        onClick={ () => {
          if (register === 'hero') {
            setRegister('')
            setIsDisabledUniverse(true)
          } else {
            setRegister('hero')
            setIsDisabled(true)
            setSuperHero({
              id: 1,
              name: "",
              universe: 1,
              image: "",
            })
            setNewUniverse({ id: 1, universe:""})
          }
          setAddHero(!addHero)
        } }
      >
        Novo Super-Herói
      </button>
      <button
        type='button'
        className="btn-styles"
        onClick={ () => {
          if (register === 'universe') {
            setRegister('')
            setIsDisabledUniverse(true)
            setSuperHero({
              id: 1,
              name: "",
              universe: 1,
              image: "",
            })
            setNewUniverse({ ...newUniverse, universe:""})
          } else {
            setRegister('universe')
            setIsDisabledUniverse(true)
          }
          setAddUniverse(!addUniverse)
        } }
      >
        Novo Universo
      </button>
    </div>
  )
}
