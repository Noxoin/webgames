import Board from './Board';
import {Player} from './Player';

class Game {
    private board : Board;
    private currentPlayer: Player;
    private isFinished: boolean;

    constructor() {
        this.board = new Board();
        this.currentPlayer = Player.PLAYER_1;
        this.isFinished = false;
    }

    getBoardCell(index: number): Player {
        return this.board.getBoardCell(index);
    }

    getCurrentPlayer(): Player {
        return this.currentPlayer;
    }

    onPlayerMove(index: number): boolean {
        if (this.isFinished) {
            throw new Error("The game is finished");
        }
        if (this.board.getBoardCell(index) !== Player.UNKNOWN) {
            throw new Error("Space is already occupied");
        }
        this.board.setBoardCell(index, this.currentPlayer);
        this.toggleCurrentPlayer();
        return isGameFinished(this.board);
    }

    toggleCurrentPlayer() {
        this.currentPlayer =
            this.currentPlayer === Player.PLAYER_1 ? Player.PLAYER_2 : Player.PLAYER_1;
    }
}

function isGameFinished(board: Board): boolean {
    const winningIndexCombinations: number[][] = [
        [0, 4, 8],
        [2, 3, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];
    for (let combination of winningIndexCombinations) {
        if (board.getBoardCell(combination[0]) === Player.UNKNOWN) {
            continue;
        }
        if (board.getBoardCell(combination[0]) === board.getBoardCell(combination[1]) && board.getBoardCell(combination[1]) === board.getBoardCell(combination[2])) {
            return true;
        }
    }
    return false;
}

export default Game;