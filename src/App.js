function App() {
  let list = ["first item", "second item", "third item", "fourth item"]

  let query = (new URL(document.location)).searchParams
  let page = Number(query.get("p")) || 1 // current page

  return (
    <div className="App">
      <ul className="list-group">
        {list.map((element, index) => listElement({element, index, page}))}

      </ul>
    </div>
  );
}

function listElement({element, index, page}) {


  return <li>
    <a key={index} href={`?page=${index}`} className={`list-group-item list-group-item-action ${index == page ? "active" : null}`} >
    {element}
    </a>
  </li>
}

export default App;
