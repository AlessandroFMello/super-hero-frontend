import React, { useContext, useState } from 'react';

import { AppContextType, IHero } from '../@types/hero';
import { AppContext } from '../context/AppProvider';

export default function Header() {
  const {
    universes,
    heroes,
    setHasFilter,
    setFilteredHeroes,
    selectValue,
    setSelectValue,
  } = useContext(AppContext) as AppContextType;
  const [filterInput, setFilterInput] = useState<string>("");

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = event.target;
    setSelectValue(value);

    const selectedUniverseHeroes: IHero[] = [];

    heroes.forEach((hero) => {
      if (value === "All"
        && hero.name.toLowerCase().includes(filterInput.toLowerCase())) {
          selectedUniverseHeroes.push(hero);
      }
      if (hero.heroUniverse.universe.toLowerCase() === value.toLowerCase()) {
        if (filterInput === "") {
          selectedUniverseHeroes.push(hero);
        }
        else if (hero.name.toLowerCase().includes(filterInput.toLowerCase())) {
          selectedUniverseHeroes.push(hero);
        }
      }
      setFilteredHeroes([...selectedUniverseHeroes]);
      setHasFilter(true);
      if (value === 'All' && filterInput.toLowerCase() === "") {
        setHasFilter(false);
      }
    });
  }

  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const selectedHeroes: IHero[] = [];

    heroes.forEach((hero) => {
      if ((
        selectValue === hero.heroUniverse.universe
        || selectValue === 'All')
        && hero.name.toLowerCase().includes(value.toLowerCase())) {
        selectedHeroes.push(hero);
      }
      setFilteredHeroes([...selectedHeroes]);
      setFilterInput(value);
      setHasFilter(true);
    })

    if (value.length === 0 && selectValue === "All") {
      setHasFilter(false);
    }
  }

  return (
    <div className="filter-wrapper">
      <select
        className="btn-styles"
        onChange={ (e) => onSelectChange(e) }
        value={selectValue}
      >
        <option value="All">Todos</option>
        {
          universes.map(({ universe }) => (
            <option key={universe} value={universe}>{universe}</option>
          ))
        }
      </select>
      <input
        className="btn-styles"
        type="text"
        placeholder="Filtrar por nome"
        onChange={ (e) => onInputChange(e) }  
      />
    </div>
  )
}