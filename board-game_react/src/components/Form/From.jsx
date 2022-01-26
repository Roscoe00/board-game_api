import { useState } from "react";
import "./Form.scss";

const Form = () => {

   const [boardgame, setBoardgame] = useState({
      gameName: "",
      description: "",
      maximumPlayers: null,
      minimumPlayers: null,
      releaseDate: null,
   })

   const handleSubmit = (e) => {
      e.preventDefault()
      fetch('http://localhost:8080/boardgame/add', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(boardgame)
      })
         .then((response) => response.json())
         .then((json => console.log(json)))
         .catch(err => console.log(err))
      e.target.reset();
   }

   return (
      <div className="log-form">
         <h2 className="log-form__title">Add a new Board game</h2>
         <form className="log-form__form" onSubmit={handleSubmit}>
            <div className="log-form__section">
               <label className="log-form__label" htmlFor="gamename">Name of Game</label>
               <input className="log-form__input" id="gamename" type="text" onInput={(e) => setBoardgame({ ...boardgame, gameName: e.target.value })} required />
               <label className="log-form__label" htmlFor="minplayers">Min. Players</label>
               <input className="log-form__input" id="minplayers" type="number" onInput={(e) => setBoardgame({ ...boardgame, minimumPlayers: e.target.value })} required />
               <label className="log-form__label" htmlFor="maxplayers">Max. Players</label>
               <input className="log-form__input" id="maxplayers" type="number" onInput={(e) => setBoardgame({ ...boardgame, maximumPlayers: e.target.value })} min={boardgame.minimumPlayers} required />
            </div>
            <div className="log-form__section">
               <label className="log-form__label" htmlFor="release">Year of Release</label>
               <input className="log-form__input" id="release" type="number" onInput={(e) => setBoardgame({ ...boardgame, releaseDate: e.target.value })} min="1900" />
               <label className="log-form__label" htmlFor="log-form__description">Description</label>
               <textarea className="log-form__input" id="log-form__description" rows="6" cols="35" onInput={(e) => setBoardgame({ ...boardgame, description: e.target.value })} />
               <button type="submit" className="log-form__input btn">Submit</button>
            </div>
         </form>
      </div>
   );
}

export default Form;