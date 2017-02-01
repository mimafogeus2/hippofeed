import cx from 'classnames';
import React, { Component } from 'react';

import DigestIndexList from './DigestIndexList.js';

class DigestIndex extends Component {
	componentWillMount() {
		this.state = {
			isSticky: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this._handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this._handleScroll);
	}

	render() {
		const classes = cx({
			'DigestIndex': true,
			'DigestIndex--sticky': this.state.isSticky
		});

		return <div ref="wrapper" className={classes}>
			<h1>Today's Digest</h1>
			{this._getDigestIndexList()}
		</div>;
	}

	_getDigestIndexList() {
		return this.state.isSticky ? null : <DigestIndexList />;
	}

	_handleScroll = (e) => {
		const windowTop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
		const componentBottom = this.refs.wrapper.getBoundingClientRect().bottom;
		this.setState({ isSticky: (this.state.isSticky && windowTop > 0) || componentBottom <= 30 });
	}
}

export default DigestIndex;