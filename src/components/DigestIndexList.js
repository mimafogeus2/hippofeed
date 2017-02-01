import React, { Component } from 'react';

import DigestIndexItem from './DigestIndexItem.js';

const ITEMS = [
	{summary: 'blah blah blah', title: 'I am an article', type: 'article'},
	{summary: 'meep meep', title: 'I am a discussion', type: 'discussion'},
	{summary: 'How art thee? :)', title: 'I am a message', type: 'message'},
];

class DigestIndexList extends Component {
	getItems() {
		return ITEMS.map((item) => <DigestIndexItem title={item.title} summary={item.summary} type={item.type} />);
	}

	render() {
		return <ul className="DigestIndex__List">
			{this.getItems()}
		</ul>;
	}
}

export default DigestIndexList;