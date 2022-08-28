import React, { useContext } from 'react'
import { AppContextType, IHero, IUniverse } from '../@types/hero';
import DisplayBtn from '../components/DisplayBtn';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import RegisterRenderer from '../components/RegisterRenderer';
import UniverseCard from '../components/UniverseCard';
import UniverseHeader from '../components/UniverseHeader';
import { AppContext } from '../context/AppProvider';
import apiUpdate from '../services/apiUpdate';
import { AiOutlineClose } from "react-icons/ai";
import apiCreate from '../services/apiCreate';

export default function SuperHeroPage() {
  const {
    heroes,
    universes,
    hasFilter,
    filteredHeroes,
    showHeroes,
    filteredUniverses,
    superHero,
    edit,
    onSelectChange,
    onNameChange,
    onUrlChange,
    isDisabled,
    setEdit,
    newUniverse,
    onUniverseNameChange,
    editUniverse,
    setEditUniverse,
    register,
    isDisabledUniverse,
    message,
    addHero,
    addUniverse,
    setAddHero,
    setAddUniverse,
  } = useContext(AppContext) as AppContextType;


  async function onSubmitEdit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedData = {
      name:superHero.name,
      universeId: superHero.universe,
      imageUrl: superHero.image,
    }

    const updatedHero = await apiUpdate(updatedData, `heroes/${superHero.id}`);

    if (updatedHero) {
      window.location.reload();
    }
  }


  async function onSubmitUniverseEdit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const updatedData = {
      id: newUniverse.id,
      universe: newUniverse.universe,
    }

    const updatedUniverse = await apiUpdate(updatedData, `universes/${newUniverse.id}`);

    if (updatedUniverse) {
      window.location.reload();
    }
  }

  function renderHeroEditModal() {
    return(
      <section>
      {
        edit
          && (
            <form
              className="modal-form"
              onSubmit={ (e) => onSubmitEdit(e) }
            >
              <select
                className="modal-styles"
                onChange={ (e) => onSelectChange(e) }
                value={ superHero.universe }
              >
                {
                  universes.map((universe) => (
                    <option
                      key={universe.id}
                      value={universe.id}
                    >
                      {universe.universe}
                    </option>
                  ))
                }
              </select>
              <input
                className="modal-styles"
                type="text"
                value={superHero.name}
                onChange={ (e) => onNameChange(e) }
                required
              />
              <input
                className="modal-styles"
                type="text"
                value={superHero.image}
                onChange={ (e) => onUrlChange(e) }
                required
              />
              <button
                className="modal-styles"
                type='submit'
                disabled={isDisabled}
              >
                Editar
              </button>
              <AiOutlineClose
                className="close-modal-btn"
                onClick={ () => setEdit(!edit) }
              />
            </form>
          )
        }
      </section>
    );
  }

  function renderUniverseEditModal() {
    return (
      <section >
      {
        editUniverse
          && (
            <>
              <form
                className="modal-form"
                onSubmit={ (e) => onSubmitUniverseEdit(e) }
              >
                <input
                  className="modal-styles"
                  type="text"
                  value={newUniverse.universe}
                  onChange={ (e) => onUniverseNameChange(e) }
                  required
                />
                <button
                  className="modal-styles"
                    type='submit'
                    disabled={isDisabled}
                  >
                    Editar
                </button>
                <AiOutlineClose
                    className="close-modal-btn"
                    onClick={ () => setEditUniverse(!editUniverse) }
                />
              </form>
            </>
          )
      }
    </section>
    );

  }


  async function onSubmitHero(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const heroData = {
      name: superHero.name,
      universeId: superHero.universe,
      imageUrl: superHero.image,
    }

    const newHero = await apiCreate(heroData, "heroes");

    if (newHero) {
      window.location.reload();
    }
  }

  function newHeroForm() {
    return(
      <>
        <form onSubmit={ (e) => onSubmitHero(e) }>
          <select
            className="modal-styles"
            onChange={ (e) => onSelectChange(e) }
            value={ superHero.universe }
          >
            {
              universes.map((universe) => (
                <option
                  key={universe.id}
                  value={universe.id}
                >
                  {universe.universe}
                </option>
              ))
            }
          </select>
          <input
            className="modal-styles"
            type="text"
            placeholder="Digite o nome do novo herói"
            onChange={ (e) => onNameChange(e) }
            required
          />
          <input
            className="modal-styles"
            type="text"
            placeholder="Insira a URL da imagem"
            onChange={ (e) => onUrlChange(e) }
            required
          />
          <button
            className="modal-styles"
            type='submit'
            disabled={isDisabled}
          >
            Criar novo heróí
          </button>
        </form>
        <AiOutlineClose
          className="close-modal-btn"
          onClick={ () => setAddHero(!addHero) }
        />
      </>
    );
  }

  async function onSubmitUniverse(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const universeData = {
      id: newUniverse.id,
      universe: newUniverse.universe,
    }

    const newHero = await apiCreate(universeData, "universes");

    if (newHero) {
      window.location.reload();
    }
  }


  function newUniverseForm() {
    return (
      <>
        <form onSubmit={ (e) => onSubmitUniverse(e) }>
          <input
            className="modal-styles"
            type="text"
            placeholder="Digite o nome do novo universo"
            onChange={ (e) => onUniverseNameChange(e) }
            required
          />
          <button
            className="modal-styles"
            type='submit'
            disabled={isDisabledUniverse}
          >
            Criar novo universo
          </button>
        </form>
        <AiOutlineClose
          className="close-modal-btn"
          onClick={ () => setAddUniverse(!addUniverse) }
        />
      </>
    );
  }

  function registerRender() {
    if (register === "hero") {
      return(
        <section
          className="modal-form"
        >
          { newHeroForm() }
          {
            message !== "" && <div>{message}</div>
          }
        </section>
      );
    }
    if (register === "universe") {
      return(
        <section
          className="modal-form"
        >
          { newUniverseForm() }
          {
            message !== "" && <div>{message}</div>
          }
        </section>
      );
    }
  }
  
  return (
    <>
      {
        showHeroes
        ? (
          <>
          <header className="header-wrapper">
            <DisplayBtn />
            <Header />
            <RegisterRenderer />
          </header>
          <div className="hero-wrapper">
            {
              hasFilter
              ? (filteredHeroes.map((data: IHero) => (
                <div
                  key={data.id}
                >
                  <HeroCard data={ data } />
                </div>
              )))
              : (heroes.map((data: IHero) => (
                <div
                  key={data.id}
                >
                  <HeroCard data={ data } />
                </div>
              )))
            }
          </div>
          </>
          )
        : (
          <>
          <header className="header-wrapper">
            <DisplayBtn />
            <UniverseHeader />
            <RegisterRenderer />
          </header>
          <div className="universes-wrapper">
            {
              hasFilter
              ? (filteredUniverses.map((data: IUniverse) => (
                <div
                  key={data.id}
                >
                  <UniverseCard data={ data } />
                </div>
              )))
              : (universes.map((data: IUniverse) => (
                <div
                  key={data.id}
                >
                  <UniverseCard data={ data } />
                </div>
              )))
            }
          </div>
          </>
        )
      }
      { renderHeroEditModal() }
      { renderUniverseEditModal() }
      {
        (addHero || addUniverse) && registerRender() 
      }
    </>
  )
}
