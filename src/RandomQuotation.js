import React, { useState } from "react";
import Quotation from "./Quotation";

function RandomQuotation() {
  let display;
  let inputAuthor = (
    <input
      type="text"
      placeholder="Auteur"
      onChange={(event) => setQuote(event.target.value)}
    ></input>
  );
  const [quote, setQuote] = useState("");
  function handleSubmitAuthor(e) {
    e.preventDefault();
    console.log(quote);
    console.log(Quotation.prototype);
  }
  return (
    <form>
      {inputAuthor}
      <button onClick={handleSubmitAuthor}>
        Afficher une citation de l'auteur mentionné
      </button>
      <button> Afficher unne citations au hasard</button>
      <button> Afficher toutes les citations</button>
    </form>
  );
}

export default RandomQuotation;
