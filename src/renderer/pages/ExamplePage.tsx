import React from 'react';

import { Example } from '../components/';

interface IProps {
}

interface IState {
}

class ExamplePage extends React.Component<IProps, IState> {
 public render() {
 		return (
 			<Fragment>
 				<div>example Page</div>
 				<Example/>
 			</Fragment>
 		)
 	}
}

export default ExamplePage;
