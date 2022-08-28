import React, { useContext } from 'react'
import { AppContextType, IUniverse } from '../@types/hero';
import { AppContext } from '../context/AppProvider';

export default function UniverseHeader() {
  const {
    universes,
    setHasFilter,
    setFilteredUniverses,
  } = useContext(AppContext) as AppContextType;

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const selectedUniverses: IUniverse[] = [];

    universes.forEach((universe) => {
      if (universe.universe.toLowerCase().includes(value.toLowerCase())) {
        selectedUniverses.push(universe);
      }
      setFilteredUniverses([...selectedUniverses]);
      setHasFilter(true);
    })

    if (value.length === 0) {
      setHasFilter(false);
    }
  }

  return (
    <div className="filter-wrapper">
      <input
        className="btn-styles filter-size"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ (e) => onInputChange(e) }
      />
    </div>
  )
}
