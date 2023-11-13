import './App.css';
import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main';
import { useState } from "react"
import { sendFetch } from './fetchmethod/fetchmethod.js';
import { Loading } from './components/main/loading/Loading.jsx';

function App() {
  const [data, setData] = useState("")
  const [page, setPage] = useState(<Loading />)

  function setDataFetch(send) {
    setPage(<Loading />)
    if (send === "location") {
      sendFetch(setData, setPage, "loc")
    } else {
      sendFetch(setData, setPage, "city")
    }
    setData("Waiting")
  }

  const date = new Date()

  const shortoptions = {
      year: 'numeric',
      month: 'long',
  };

  const longoptions = {
      weekday: 'long',
      day: 'numeric',
      year: 'numeric',
      month: 'short',
  }

  const shortDate = date.toLocaleString("en-US", shortoptions)
  const longDate = date.toLocaleString("en-US", longoptions)

  return (
    <div className="App">
      <Header shortDate={shortDate} longDate={longDate} setData={setDataFetch}/>
      <Main data={data} page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
