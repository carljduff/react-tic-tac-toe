import "../App.css"

const Board = ({playerLabel, setPlayerLabel}) => {
    
        const playerHandler = () => {
            if(playerLabel === "X") {
                setPlayerLabel("O")
            } else {
                setPlayerLabel("X")
            }
            console.log(playerLabel)
        }

    const btn = <button onClick={playerHandler} className="tile">{playerLabel}</button>
    const tile = [btn, btn, btn, btn, btn, btn, btn, btn, btn]
    return(
        <div className="board">
            <div>
            {tile.map(element => element)}
            </div>
        </div>

    )
}

export default Board;