function App() {
  let list = ["first item", "second item", "third item", "fourth item"]

  return (
    <div className="App">
      <ul>
        {list.map(element => listElement(element))}
      </ul>
    </div>
  );
}

function listElement(element) {
  return <li>
    <a >
    {element}
    </a>
  </li>
}

export default App;
