import React from "react";
import Nav from "../components/Nav";

export default function RedirectPage({ res }) {
  return (
    <>
      <Nav />
      {res === 404 && <h1>Ops, não encontramos resultados.</h1>}
      {res !== 404 && <h1>Foram encontrados 250 resultados.</h1>}
    </>
  );
}

export async function getServerSideProps({ res, req }) {
  console.log(req.headers["user-agent"]);

  const getStatusHttp = () => {
    if (req.headers["user-agent"].includes("Googlebot")) {
      return 404;
    }
    return 200;
  };

  res.statusCode = getStatusHttp();

  return {
    props: {
      res: res.statusCode,
    },
  };
}
