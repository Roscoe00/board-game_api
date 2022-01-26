import "./BoardgameList.scss";
import Boardgame from "../Boardgame/Boardgame";

const BoardgameList = (props) => {

   const { deleteBoardgame } = props;

   return (
      <>
         <h2 className="heading">Explore our list of Board Games</h2>
         <div className="container">
            {props.boardgames && props.boardgames.map(boardgame => (<div>
               <Boardgame key={boardgame.id} boardgames={boardgame} />
               <button onClick={() => deleteBoardgame(boardgame.id)}>Delete</button>
            </div>))}
         </div>
      </>
   )
}

export default BoardgameList