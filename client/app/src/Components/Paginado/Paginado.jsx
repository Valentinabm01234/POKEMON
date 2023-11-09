import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Paginado.css"

const Paginado = () => {
  const POKEMON_PER_PAGE = 12;

  const pokemons = useSelector((state) => state.pokemons);

  const [currentPage, setCurrentPage] = useState(0);

  const startPokemons = currentPage * POKEMON_PER_PAGE;
  const endPokemons = (currentPage + 1) * POKEMON_PER_PAGE;//inicio y final de las cards que mostrar


  const totalpage = Math.ceil(pokemons.length / POKEMON_PER_PAGE); //calculo toal 

  const nextHandler = () => {
    if (currentPage < totalpage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 0) {

      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (pokemons.length <= startPokemons) {
      setCurrentPage(0);
    }
  }, [pokemons, startPokemons]);

  return (
    <>


      <div className="card-container">
       
        {pokemons.slice(startPokemons, endPokemons).map((pokemon) => (
          <Card key={pokemon.id} data={pokemon} />
        ))}
      </div>
      <div className='buttons'>


        <button className='buttonP2' onClick={nextHandler}>Next</button>

        <p className='pP'> Page: {currentPage + 1}</p>

        <button className='buttonP' onClick={prevHandler}>Previous</button>
      </div>
    </>
  );
}

export default Paginado;


