import {Player} from './Player';

class Board {
    private board: Player[] = new Array(9);

    constructor() {
        this.clearBoard();
    }

    getBoardCell(index: number): Player {
        if (index < 0 || index >= 9) {
            throw new RangeError("out of expected range in the board");
        }
        return this.board[index];
    }

    setBoardCell(index: number, player: Player) {
        this.board[index] = player;
    }

    clearBoard() {
        for (let i = 0; i < 9; i++) {
            this.board[i] = Player.UNKNOWN;
        }
    }
}

export default Board;