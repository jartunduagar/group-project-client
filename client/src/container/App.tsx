import { Route, Routes } from "react-router-dom";
import ArtistDetail from "../components/ArtistDetail/ArtistDetail";
import Explore from "../components/Explorar";
import Home from "../components/Home";
import Example from "../components/Testing/Example";
import AllArtists from "../components/Artists/allArtists";
import Login from "../components/Login/Login";
import CreateFormRe from "../components/Form/CreateFormFin";
import Modal from "../components/Modal";

export default function App() {

  const UnElementoCualquiera = () => {
    return (
      <>
        <h1>Este es el body del modal</h1>
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<AllArtists />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/form' element={<CreateFormRe />} />
        <Route path='/artistDetail/:id' element={<ArtistDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/testing' element={<Example />} />
      </Routes>
    </>
  )
}
