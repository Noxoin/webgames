import React from 'react';
import './cell.css';

interface Props {
}

interface State {
	value: String;
}

class Cell extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			value: 'HELLO',
		};
	}

	render() {
		return (
			<div className="cell">
				<p>{this.state.value}</p>
			</div>
		);
	}
}

export default Cell;
