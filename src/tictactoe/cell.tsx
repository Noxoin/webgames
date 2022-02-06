import React from 'react';
import './Cell.css';

interface Props {
	value: String;
}

interface State {
	value: String;
}

class Cell extends React.Component<Props, State> {
	onClickHandler(e: any) {
		this.setState(prevState => ({value: prevState.value + "."}));
	}

	constructor(props: Props) {
		super(props);
		this.state = {
			value: props.value,
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	render() {
		return (
			<div className="cell" onClick={this.onClickHandler}>
				{this.state.value}
			</div>
		);
	}
}

export default Cell;
