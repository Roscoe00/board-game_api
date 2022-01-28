import { useState, useEffect } from "react";
import "./Dashboard.scss";
import BoardgameList from "../../components/BoardgameList/BoardgameList";
import Form from "../../components/Form/From";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {

   const [boardgames, setBoardgames] = useState([]);

   const [boardgame, setBoardgame] = useState({
      gameName: "",
      description: "",
      maximumPlayers: null,
      minimumPlayers: null,
      releaseDate: null,
   })

   const getBoardgames = () => {
      fetch("http://localhost:8080/boardgames")
         .then(res => res.json())
         .then(json => setBoardgames(json))
         .catch(err => console.log(err))
   }

   const deleteBoardgame = (identity) => {
      fetch("http://localhost:8080/boardgame/" + identity, {
         method: "DELETE",
      }).then(() => { getBoardgames() })
         .catch(err => console.log(err))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:8080/boardgame/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(boardgame)
      })
         .then(() => { getBoardgames() })
         .catch(err => console.log(err))
      e.target.reset();
   }

   useEffect(() => {
      getBoardgames()
   }, []);

   return (
      <Router>
         <Nav />
         <div className="dashboard">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/boardgames" element={<BoardgameList boardgames={boardgames} deleteBoardgame={deleteBoardgame} />} />
               <Route path="/new-Boardgame" element={<Form handleSubmit={handleSubmit} setBoardgame={setBoardgame} boardgame={boardgame} />} />
            </Routes>
         </div>
      </Router>
   )
}

export default Dashboard
