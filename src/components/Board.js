import "../App.css"

const Board = ({playerLabel, setPlayerLabel}) => {

    
        const boardHandler = (e) => {
            if(playerLabel === "X") {
                setPlayerLabel("O")
            } else {
                setPlayerLabel("X")
            }
            
            if(e.target.value === "") {
                e.target.innerText = playerLabel
            }

            


        }

    const btn = <button onClick={boardHandler} className="tile"></button>
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