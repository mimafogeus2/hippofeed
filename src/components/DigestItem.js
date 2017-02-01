import React, { Component } from 'react';

class DigestItem extends Component {
	_getImage() {
		if (this.props.imageURI) {
			return <div className="DigestItem__Image" style={{backgroundImage: `url(${this.props.imageURI})`}}></div>;
		}

		return null;
	}

	_getTitle() {
		if (this.props.title) {
			return <h1>{this.props.title}</h1>;
		}

		return null;
	}

	_getFormattedContent() {
		if (this.props.content) {
			return this.props.content.split('\n').map((paragraph) => <p>{paragraph}</p>);
		}

		return null
	}

	render() {
		return <div className="DigestItem">
			{this._getImage()}
			<div className="DigestItem__Content">
				{this._getTitle()}
				{this._getFormattedContent()}
			</div>
		</div>;
	}
}

export default DigestItem;