import React from 'react';
import './Cell.css';

interface Props {
	index: number;
	value: String;
	onClick: any;
}

interface State {
	index: number;
	value: String;
	onClick: any;
}

class Cell extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			index: props.index,
			value: props.value,
			onClick: props.onClick,
		};
	}

	render() {
		return (
			<div className="cell" data-index={this.state.index} onClick={this.state.onClick}>
				{this.state.value}
			</div>
		);
	}
}

export default Cell;
