import "./Boardgame.scss";

const Boardgame = (props) => {
   const {
      gameName,
      description,
      releaseDate,
      maximumPlayers,
      minimumPlayers,
   } = props.boardgames;

   return (
      <div className="boardgame">
         <h3>{gameName}</h3>
         <p>Description: {description}</p>
         <p>Number of Players: {minimumPlayers} - {maximumPlayers}</p>
         <p>Released: {releaseDate}</p>
      </div>
   )
}

export default Boardgame 