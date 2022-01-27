import { useState, useEffect } from "react";
import "./Dashboard.scss";
import BoardgameList from "../../components/BoardgameList/BoardgameList";
import Form from "../../components/Form/From";
import Home from "../../components/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Dashboard = () => {

   const [boardgames, setBoardgames] = useState([]);

   const getBoardgames = () => {
      fetch("http://localhost:8080/boardgames")
         .then(res => res.json())
         .then(json => setBoardgames(json))
         .catch(err => console.log(err))
   }


   const deleteBoardgame = (identity) => {
      fetch("http://localhost:8080/boardgame/" + identity, {
         method: "DELETE",
      }).then((response) => response.json())
         .then(json => setBoardgames(json))
         .catch(err => console.log(err))
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
               <Route path="/new-Boardgame" element={<Form />} />
            </Routes>
         </div>
      </Router>
   )
}

export default Dashboard
