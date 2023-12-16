import "./style.css";
import Message from "./Message";
import SimpleQuotation from "./SimpleQuotation";
import Quotation from "./Quotation";
import RandomQuotation from "./RandomQuotation";

function App() {
  return (
    <>
      <Message></Message>
      <SimpleQuotation></SimpleQuotation>
      <Quotation count="1" shuffle author="Andrew Ryan"></Quotation>
      <RandomQuotation></RandomQuotation>
    </>
  );
}

export default App;
