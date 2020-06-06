import * as React, { Fragment } from 'react';

interface IProps {
	children: React.Children;
}

interface IState {
}

class ExampleLayout<IProps, IState> {
	public render() {
		return (
			<Fragment>
				{ children }
				<div>example layout</div>
			</Fragment>
		)
	}
}

export default ExampleLayout;
