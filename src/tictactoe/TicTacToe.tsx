import React from 'react';
import Cell from './cell';

class TicTacToe extends React.Component {
  render() {
		return (
			<div>
				<p>This is where TicTacToe is located</p>
				<Cell />
				<Cell />
				<Cell />
				<Cell />
			</div>
		);
	}
}

export default TicTacToe;
