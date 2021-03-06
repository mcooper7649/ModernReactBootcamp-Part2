

import React, {Component} from "react";
import Cell from "./Cell";
import Rules from "./Rules"
import Footer from "./Footer"


import './Board.css';



/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.35
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
      gameStarted: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNew = this.handleNew.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y= 0; y < this.props.nrows; y++){
      let row = [];
      for (let x = 0; x < this.props.ncols; x++){
        row.push(Math.random() < this.props.chanceLightStartsOn)
      }
      board.push(row);
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({board, hasWon});
  }

  handleClick(){
    this.resetGame();
    
  }

  handleNew(){
    this.newGame();
    
  }


  newGame(){
    this.setState(st => ({
      hasWon: false,
      board: this.createBoard(),
      gameStarted: true

    }));
    let audio = new Audio("./game-bg-new.mp3")
      const start = () => {
          audio.play()
        }
        start();
  }

  

  resetGame(){
    this.setState(st => ({
      hasWon: false,
      board: this.createBoard(),
      gameStarted: true

    }));
  }

  
  /** Render game board or winning message. */

  render() {
    if (this.state.hasWon){
      return (
    <div className="game-winner-wrapper">
        <div className="Board-title">
        <div className="Big-Winner">
          <span className="neon-orange">You</span>
          <span className="neon-blue">Win!!!</span>
        </div>
      </div>
      <img className="win-img" src="https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif" alt="the office erin excited Big Win"/>
      <div className="play-again-btn-wrapper">
      <div onClick={this.handleClick} className="play-again-btn">
          <span id="play-btn" className="neon-orange">Play</span>
          <span id="play-btn" className="neon-blue play-btn">Again?</span>
        </div>
      </div>
    </div>
      )
    } if (!this.state.gameStarted){
      return(
        <div className="game-winner-wrapper">
        <div className="Board-title">
        <div className="Winner">
          <span className="neon-orange">Ready</span>
          <span className="neon-blue">To Play?</span>
        </div>
      </div>
      <div className="play-again-btn-wrapper">
      <div onClick={this.handleNew} className="play-again-btn">
          <span id="play-btn" className="neon-orange">Click</span>
          <span id="play-btn" className="neon-blue play-btn">Here</span>
        </div>
      </div>
    </div>
      )
    } else {

    let tblBoard =  [];
    for (let y = 0; y < this.props.nrows; y++){
      let row = [];
      for (let x = 0; x < this.props.ncols; x++){
        let coord = `${y}-${x}`
        row.push(
        <Cell 
        key={coord}
        isLit={this.state.board[y][x]}
        flipCellsAroundMe={() => this.flipCellsAround(coord)}
         />);
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }

    return (
      
      <div>
      <div className="Board-title">
      <div className="neon-orange">Lights</div>
      <div className="neon-blue">Out</div>
      </div>
          <table className="Board">
            <tbody>
              {tblBoard}
            </tbody>
          </table>
          <div className="play-again-btn-wrapper">
            <div onClick={this.handleClick}>
                <span id="play-btn" className="neon-orange">New</span>
                <span id="play-btn" className="neon-blue play-btn">Board?</span>
            </div>
        </div>

      <Rules />
      <Footer />
      </div>
    )
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}
}


export default Board;
