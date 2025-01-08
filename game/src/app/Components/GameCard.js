import styles from "./GameCard.css"
import Link from 'next/link'
// import Link from '../app/game_1/page'

function GameCard(props){
  return (
    <Link href={props.link}>
      <div className="GameCardDiv" style={{backgroundColor: props.backgroundColor, animation: "fade-in 1s"}}>
        {/* <p className="gameCardName">{props.name}</p> */}
      </div>
      <h1 style={{color: "black", animation: "fade-in 1s", fontSize: "29px"}}>{props.name}</h1>
    </Link>
    
  )
}

export default GameCard;