import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const pokemonCard = ({ id, name, weight, height, types, sprites }) => {
  const img = sprites?.other?.["official-artwork"]?.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png";
  return (
    <div className={styles.card}>
      <a target="blank" href={`https://www.pokemon.com/br/pokedex/${id}`}>
        <Image quality="50" src={img} alt={`Figura do ${name}`} width={300} height={300} />
        <h3>{name}</h3>
        <p>Altura: {weight}</p>
        <p>Peso: {height}</p>
        <p>Tipo:</p>
        <ul>
          {types.map((typeItem, i) => {
            const { type } = typeItem;
            const { name } = type;
            return <li key={i}>{name}</li>;
          })}
        </ul>
      </a>
    </div>
  );
};

pokemonCard.defaultProps = {
  name: "",
  weight: "",
  height: "",
  types: [],
  sprites: {},
};

export default pokemonCard;
