import React from 'react';

import InputName from '../components/InputName';
import PrintName from '../components/PrintName';

class Hello extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		}
	}
	
	onGetName = (name) => {
		this.setState({name});
	}
	
	render() {
		return (
				<div>
					<InputName onGetName={this.onGetName} />
					<PrintName name={this.state.name} />
				</div>
		);
	}
}

export default Hello;