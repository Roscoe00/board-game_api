import "./Form.scss";

const Form = (props) => {

   const { handleSubmit, setBoardgame, boardgame } = props;

   return (
      <div className="log-form">
         <h2 className="log-form__title">Add a new Board game to the list</h2>
         <form className="log-form__form" onSubmit={
            (e) => handleSubmit(e)
            // () => console.log(boardgame)
         }>
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
               <textarea className="log-form__input" id="log-form__description" rows="6" cols="35" onInput={(e) => setBoardgame({ ...boardgame, description: e.target.value })} maxLength="120" />
               <button type="submit" className="log-form__input btn">Submit</button>
            </div>
         </form>
      </div>
   );
}

export default Form;