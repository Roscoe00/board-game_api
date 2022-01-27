import "./Boardgame.scss";
import { ReactComponent as Trash } from "../../assets/images/trash-icon.svg"

const Boardgame = (props) => {
   const {
      id,
      gameName,
      description,
      releaseDate,
      maximumPlayers,
      minimumPlayers,
   } = props.boardgames;
   const { deleteBoardgame } = props;
   return (
      <div className="boardgame">
         <h3 className="boardgame__title">{gameName}</h3>
         <p className="description__description"><span className="boardgame__header">Description:</span> {description}</p>
         <p className="boardgame__players"><span className="boardgame__header">Players:</span> {minimumPlayers} - {maximumPlayers}</p>

         <div className="boardgame-subsection">
            <p className="boardgame-subsection__release"><span className="boardgame__header">Released:</span> {releaseDate}</p>
            <Trash className="boardgame-subsection__icon"
               onClick={() => deleteBoardgame(id)}
            />
         </div>
         <div className="boardgame__image" src="none" alt={"picutre of " + gameName} ></div>
      </div>
   )
}

export default Boardgame 