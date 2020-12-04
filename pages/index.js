import React, { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const pokemons = [];
  const indexesArray = Array.from({ length: 3 }, (_, i) => i + 1);

  const fetchPokemon = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return data;
  };

  indexesArray.map((i) => fetchPokemon(i).then((res) => res.json().then((data) => pokemons.push(data))));

  const teste = await fetch(`https://pokeapi.co/api/v2/pokemon/150`).then((data) => data.json().then((pokemon) => pokemon));

  return {
    props: {
      pokemonsStaticGeneration: pokemons,
    },
  };
}

export default function Home(props) {
  const { pokemonsStaticGeneration } = props || {};
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemon = async (id) => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return data;
    };

    const storePokemon = (pokemon) => {
      setPokemons((oldPokemons) => [...oldPokemons, pokemon]);
    };

    const indexesArray = Array.from({ length: 3 }, (_, i) => i + 1);

    indexesArray.map((i) =>
      fetchPokemon(i).then((res) => {
        res.json().then((data) => storePokemon(data));
      })
    );
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Pokemon POC {props.name}</h1>
        <div className={styles.grid}>
          {pokemons.map((pokemon, i) => (
            <PokemonCard key={i} {...pokemon} />
          ))}
        </div>
        <div className={styles.hr}></div>
        <div className={styles.grid}>
          {pokemonsStaticGeneration.map((pokemon, i) => (
            <PokemonCard key={i} {...pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}
