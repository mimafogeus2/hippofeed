import cx from 'classnames';
import React, { Component } from 'react';

class DigestIndexItem extends Component {
	render() {
		const classes = cx({
			'DigestIndex__List__Item': true,
			'DigestIndex__List__Item--article': this.props.type === 'article',
			'DigestIndex__List__Item--discussion': this.props.type === 'discussion',
			'DigestIndex__List__Item--message': this.props.type === 'message',
		})

		return <li className={classes}>
			<h2>{this.props.title}</h2>
			<p>{this.props.summary}</p>
		</li>;
	}
}

export default DigestIndexItem;