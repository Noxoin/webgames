import React from 'react';
import Cell from './Cell';
import './TicTacToe.css';

class TicTacToe extends React.Component {
	render() {
			return (
				<div>
					<h2>This is where TicTacToe is located</h2>
					<table>
						<tr>
							<td><Cell value="1"/></td>
							<td><Cell value="2"/></td>
							<td><Cell value="3"/></td>
						</tr>
						<tr>
							<td><Cell value="4"/></td>
							<td><Cell value="5"/></td>
							<td><Cell value="6"/></td>
						</tr>
						<tr>
							<td><Cell value="7"/></td>
							<td><Cell value="8"/></td>
							<td><Cell value="9"/></td>
						</tr>
					</table>
				</div>
			);
		}
}

export default TicTacToe;
