import "./BoardgameList.scss";
import Boardgame from "../Boardgame/Boardgame";

const BoardgameList = (props) => {

   const { deleteBoardgame } = props;

   return (
      <div className="game-list">
         <h2 className="game-list__heading">Explore our list of Board Games</h2>
         <div className="game-list__container">
            {props.boardgames && props.boardgames.map(boardgame => (<div>
               <Boardgame key={boardgame.id} boardgames={boardgame} deleteBoardgame={deleteBoardgame} />
            </div>))}
         </div>
      </div>
   )
}

export default BoardgameList