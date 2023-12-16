
function Message(titre, date) {

  date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const fullDate = `${day}/${month}/${year}`;

  return (
    <>
      {titre ? (
        <h1 id="title" style={{ backgroundColor: "#000", color: "#fff" }}>
          Salutations 
        </h1>
      ) : (
        " "
      )}

      <p className="brushing">Bonjour à tous</p>
      <div className="date-info">{fullDate}</div>
      
    </>
  );
}

export default Message;
