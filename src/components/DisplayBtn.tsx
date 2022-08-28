import React, { useContext } from 'react'
import { AppContextType } from '../@types/hero';
import { AppContext } from '../context/AppProvider';

export default function DisplayBtn() {
  const { setShowHeroes, showHeroes, setHasFilter } = useContext(AppContext) as AppContextType;
  return (
    <div className="display-btn">
      <button
        className="btn-styles"
        type="button"
        onClick={ () => {
          setShowHeroes(true);
          setHasFilter(false);
        } }
        disabled={showHeroes}
      >
        Heróis
      </button>
      <button
        className="btn-styles"
        type="button"
        onClick={ () => {
          setShowHeroes(false)
          setHasFilter(false);
        } }
        disabled={!showHeroes}
      >
        Universos
      </button>
    </div>
  )
}
