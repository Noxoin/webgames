import React, {MouseEvent} from 'react';
import Cell from './Cell';
import Game from './Game';
import { playerName, playerValue } from './Player';
import './TicTacToe.css';

class TicTacToe extends React.Component {
	game: Game;

	onClick(event: MouseEvent) {
		alert(event.currentTarget.getAttribute('data-index'));
		let index: string|null = event.currentTarget.getAttribute('data-index');
		if (index === null) {
			throw new Error("this should not happen");
		}
		this.game.onPlayerMove(+index);
	}

	constructor(props: any) {
		super(props);
		this.game = new Game();
	}

	render() {
			return (
				<div>
					<h2>It is {playerName(this.game.getCurrentPlayer())}'s turn</h2>
					<table>
						<tr>
							<td><Cell index={0} value={playerValue(this.game.getBoardCell(0))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={1} value={playerValue(this.game.getBoardCell(1))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={2} value={playerValue(this.game.getBoardCell(2))} onClick={this.onClick.bind(this)}/></td>
						</tr>
						<tr>
							<td><Cell index={3} value={playerValue(this.game.getBoardCell(3))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={4} value={playerValue(this.game.getBoardCell(4))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={5} value={playerValue(this.game.getBoardCell(5))} onClick={this.onClick.bind(this)}/></td>
						</tr>
						<tr>
							<td><Cell index={6} value={playerValue(this.game.getBoardCell(6))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={7} value={playerValue(this.game.getBoardCell(7))} onClick={this.onClick.bind(this)}/></td>
							<td><Cell index={8} value={playerValue(this.game.getBoardCell(8))} onClick={this.onClick.bind(this)}/></td>
						</tr>
					</table>
				</div>
			);
		}
}

export default TicTacToe;
