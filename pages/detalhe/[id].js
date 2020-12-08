import React from "react";
import Nav from "../../components/Nav";

const fetchPokemon = async (id) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return data.json();
};

//#region SERVER SIDE PROPS

// export async function getServerSideProps({ query }) {
//   const pokemon = await fetchPokemon(query.id);

//   return {
//     props: {
//       ...pokemon,
//     },
//   };
// }

//#endregion

export async function getStaticProps({ params }) {
  const { id } = params;
  const pokemon = await fetchPokemon(id);

  return {
    props: {
      ...pokemon,
    },
  };
}

export async function getStaticPaths() {
  const paths = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, cur) => {
    acc.push({
      params: {
        id: `${cur}`,
      },
    });
    return acc;
  }, []);

  return {
    paths,
    fallback: false,
  };
}

export default function Detalhe({ name }) {
  return (
    <>
      <Nav />
      <h1>Detalhe</h1>
      <p>Name: {name}</p>
    </>
  );
}
