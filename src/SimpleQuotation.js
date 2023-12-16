import citations from "./data";
function SimpleQuotation() {
  const randomIndex = Math.floor(Math.random() * citations.length);
  const randomQuote = citations[randomIndex];

  return (
    <div>
      <p>
        {randomQuote.quote} - {randomQuote.author}
      </p>
    </div>
  );
}

export default SimpleQuotation;
