import citations from "./data";
import React from "react";

function Quotation(props) {
  let display = citations.map((quote) => <p key={quote.id}>{quote.quote}</p>);

  if (props.count > 0) {
    display = display.slice(0, props.count);
  }

  if (!props.shuffle && !props.author) {
    <p>{display}</p>;
  } else if (props.shuffle && !props.author) {
    display.sort((a, b) => 0.5 - Math.random());
  } else if (props.author) {
    const filteredCitations = citations.filter(
      (citation) => citation.author === props.author
    );
    display = filteredCitations.map((quote) => (
      <p key={quote.id}>{quote.quote}</p>
    ));
    if (props.shuffle) {
      display.sort((a, b) => 0.5 - Math.random());
    }if (props.count > 0) {
      display = display.slice(0, props.count);
    }
  }

  return (
    <div>
      <p>il y a {props.count} éléments</p>
      {display}
    </div>
  );
}

export default Quotation;
